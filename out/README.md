# Paw Matcher Landing Page - Static Build

This directory contains the static HTML, CSS, and JavaScript files for the Paw Matcher landing page.

## Deployment Instructions

### For Linux Public Folder

1. **Copy all files** from this `out` directory to your Linux web server's public folder (e.g., `/var/www/html`, `/var/www/your-domain/public_html`, or your Apache/Nginx document root).

2. **Ensure proper permissions**:
   ```bash
   sudo chown -R www-data:www-data /path/to/public/folder
   sudo chmod -R 755 /path/to/public/folder
   ```

3. **Ensure `index.html` exists** at the root of your public folder.

4. **Configure your web server** to serve `index.html` for all routes (if using client-side routing):
   - For Apache: Add a `.htaccess` file with rewrite rules
   - For Nginx: Configure try_files directive

## File Structure

- `index.html` - Main HTML file
- `404.html` - 404 error page
- `_next/` - Next.js static assets (CSS, JS, fonts)
- `favicon.ico` - Site favicon
- Public assets (SVG files, images)

## Server Configuration

### For Apache Servers

An `.htaccess` file has been included in the `out` directory. Make sure:

1. **mod_rewrite is enabled**: `sudo a2enmod rewrite`
2. **AllowOverride is set**: In your Apache config, ensure `AllowOverride All` is set for your document root
3. **Restart Apache**: `sudo systemctl restart apache2`

### For Nginx Servers

Add this to your Nginx site configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location /_next {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

## Troubleshooting CSS Issues

If styles are missing but images load:

1. **Check if CSS file exists**: Verify `/_next/static/css/7e5d0fd5b28b27a0.css` is accessible
2. **Check browser console**: Look for 404 errors for CSS files
3. **Verify server permissions**: Ensure the `_next` directory is readable: `chmod -R 755 _next`
4. **Check MIME types**: Ensure your server serves `.css` files with `text/css` content-type
5. **Test direct access**: Try accessing `https://your-domain.com/_next/static/css/7e5d0fd5b28b27a0.css` directly

## Notes

- All assets are already bundled and optimized
- No backend server is required - this is a pure static site
- Make sure any referenced images (like `/bruce.jpg`, `/iva.jpg`, etc.) exist in the public folder
- The site uses React for interactivity, but it's all client-side rendered
- The `_next` folder contains all CSS, JS, and font assets - ensure it's copied to your server

## Missing Assets

If you see broken images, ensure these files exist in your public folder:
- `/bruce.jpg`
- `/iva.jpg`
- `/paw-violet.svg`
- `/paw-white.svg`
- `/phone-demo.mp4` (if using video)

