const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'out');
const targetDir = path.join(__dirname, '..', 'docs');

// Remove existing docs directory if it exists
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}

// Copy out directory to docs
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    // Check if it's an HTML or CSS file that needs path fixing
    if (src.endsWith('.html')) {
      let content = fs.readFileSync(src, 'utf8');
      // Convert absolute paths to relative paths for GitHub Pages
      // This needs to fix paths in:
      // 1. HTML attributes (href="/..." src="/...")
      // 2. JSON strings in embedded scripts ("href":"/..." "src":"/...")
      
      // Fix HTML attributes
      content = content.replace(/href="\/([^"]+)"/g, 'href="./$1"');
      content = content.replace(/src="\/([^"]+)"/g, 'src="./$1"');
      content = content.replace(/src='\/([^']+)'/g, "src='./$1'");
      
      // Fix JSON strings in embedded JavaScript
      // Pattern: "href":"/path" or "src":"/path" (need to handle escaped quotes)
      // Use a more comprehensive pattern that catches paths starting with /
      content = content.replace(/"href":"\/([^"]+)"/g, '"href":"./$1"');
      content = content.replace(/"src":"\/([^"]+)"/g, '"src":"./$1"');
      
      // Also handle escaped JSON: \"href\":\"/path\" 
      content = content.replace(/\\"href\\":\\"\/([^"]+)\\"/g, '\\"href\\":\\"./$1\\"');
      content = content.replace(/\\"src\\":\\"\/([^"]+)\\"/g, '\\"src\\":\\"./$1\\"');
      
      // Fix Next.js internal path references in script tags (various formats)
      content = content.replace(/":HL\["\/_next\//g, '":HL["./_next/');
      content = content.replace(/":HL\["/g, function(match) {
        return match.replace('":HL["/', '":HL["./');
      });
      
      // Also fix any remaining "/_next/ or "/filename patterns in JSON strings
      // This is a catch-all for any absolute paths we might have missed
      content = content.replace(/"\/([a-zA-Z0-9_-]+\.(jpg|png|svg|mp4|ico|woff2|css|js))"/g, '"./$1"');
      content = content.replace(/"\/_next\//g, '"./_next/');
      content = content.replace(/\\"\/_next\\\//g, '\\"./_next\\/');
      
      fs.writeFileSync(dest, content, 'utf8');
    } else if (src.endsWith('.css')) {
      let content = fs.readFileSync(src, 'utf8');
      // For CSS files, font URLs are relative to CSS file location
      // CSS is at docs/_next/static/css/ so /_next/static/media/ should be ../media/
      content = content.replace(/url\(\/_next\/static\/media\//g, 'url(../media/');
      // Also fix any other absolute paths in CSS
      content = content.replace(/url\(\//g, 'url(../');
      
      fs.writeFileSync(dest, content, 'utf8');
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

copyRecursiveSync(sourceDir, targetDir);
console.log('✓ Successfully copied build output to docs/ folder');
console.log('✓ Fixed all paths for GitHub Pages deployment');

