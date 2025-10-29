import { DATA } from "@/data/resume";

export default function AdditionalSEO() {
  return (
    <>
      {/* Additional Meta Tags for Better SEO */}
      <meta name="author" content={DATA.name} />
      <meta name="creator" content={DATA.name} />
      <meta name="publisher" content={DATA.name} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="26.3249;89.4592" />
      <meta name="ICBM" content="26.3249, 89.4592" />

      {/* Additional Open Graph Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Ayush Paul Portfolio" />
      <meta property="article:author" content={DATA.name} />

      {/* Twitter Additional Tags */}
      <meta name="twitter:creator" content="@_ayush_paul_" />
      <meta name="twitter:site" content="@_ayush_paul_" />

      {/* Professional Schema */}
      <meta name="profession" content="Full Stack Developer" />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Mobile Specific */}
      <meta name="mobile-web-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Verification Tags - Add your verification codes here */}
      <meta
        name="google-site-verification"
        content="cKdhBphu0GLeOH0kpFGSU0ZSj7xgiN_H6xspXKcQmL0"
      />
      {/* Add other verification tags as needed:
      <meta name="bing-site-verification" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="pinterest-site-verification" content="your-pinterest-verification-code" />
      */}
    </>
  );
}
