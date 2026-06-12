import {
  appUrl,
  contactEmail,
  siteDescription,
  siteName,
  siteUrl,
  socialLinks,
} from "@/lib/site"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/PawMatcher-Logo4.svg`,
  description: siteDescription,
  email: contactEmail,
  sameAs: [socialLinks.instagram, socialLinks.linkedin],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
}

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteName,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web",
  url: appUrl,
  description: siteDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  },
  about: {
    "@type": "Thing",
    name: "Dog adoption and shelter pet matching",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${siteUrl}/PawMatcher-Logo4.svg`,
  },
}

const schemas = [organizationSchema, websiteSchema, softwareApplicationSchema, webPageSchema]

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  )
}
