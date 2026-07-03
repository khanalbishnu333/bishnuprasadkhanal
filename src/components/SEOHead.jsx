import { Helmet } from "react-helmet-async"

/**
 * Runtime <head> manager for the SPA.
 *
 * The canonical, fully-populated SEO tags — including JSON-LD structured data —
 * live in the static index.html so non-JS crawlers and social scrapers
 * (Facebook / LinkedIn / Twitter) read them without executing JavaScript.
 * This component keeps the same values in sync at runtime; it intentionally
 * does NOT re-emit JSON-LD to avoid a duplicate structured-data block in the DOM.
 */
const SITE_URL = "https://bishnukhanal.com"
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const TITLE = "Bishnu Prasad Khanal | Expert Laravel & Full-Stack Developer in Nepal"
const DESCRIPTION =
  "Bishnu Prasad Khanal — expert Laravel & full-stack developer from Lalitpur, Nepal. 3+ years building PHP, React and MySQL web apps, e-commerce platforms, CRM systems and REST APIs. Available for freelance & remote projects worldwide."

const SEOHead = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{TITLE}</title>
      <meta name="title" content={TITLE} />
      <meta name="description" content={DESCRIPTION} />
      <meta
        name="keywords"
        content="Bishnu Prasad Khanal, Bishnu Khanal, Laravel Developer Nepal, Laravel Developer in Nepal, PHP Developer Nepal, Full-Stack Developer Nepal, React Developer Nepal, Software Developer Nepal, Web Developer Nepal, E-commerce Developer Nepal, CRM Developer Nepal, REST API Developer, Freelance Laravel Developer, Laravel Expert Nepal, Software Engineer Nepal"
      />
      <meta name="author" content="Bishnu Prasad Khanal" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={`${SITE_URL}/`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:title" content={TITLE} />
      <meta
        property="og:description"
        content="Expert Laravel & full-stack developer from Nepal. 3+ years building PHP, React and MySQL web apps, e-commerce, CRM systems and REST APIs."
      />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bishnu Prasad Khanal — Laravel & Full-Stack Developer, Nepal" />
      <meta property="og:site_name" content="Bishnu Prasad Khanal" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${SITE_URL}/`} />
      <meta name="twitter:title" content={TITLE} />
      <meta
        name="twitter:description"
        content="Expert Laravel & full-stack developer from Nepal. PHP, React, MySQL, e-commerce, CRM & REST APIs."
      />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Bishnu Prasad Khanal — Laravel & Full-Stack Developer, Nepal" />
      <meta name="twitter:site" content="@bishnukhanal" />
      <meta name="twitter:creator" content="@bishnukhanal" />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="NP-P3" />
      <meta name="geo.placename" content="Lalitpur, Nepal" />
      <meta name="geo.position" content="27.6588;85.3247" />
      <meta name="ICBM" content="27.6588, 85.3247" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />

      {/* Theme & Web App Meta */}
      <meta name="theme-color" content="#C39A4E" />
      <meta name="msapplication-TileColor" content="#C39A4E" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  )
}

export default SEOHead
