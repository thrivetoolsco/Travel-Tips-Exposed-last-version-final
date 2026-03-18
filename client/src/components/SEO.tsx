import { Helmet } from "react-helmet-async";

const SITE_NAME = "Travel Tips Exposed";
const BASE_URL = "https://www.traveltipsexposed.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
  author?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  publishedTime,
  author,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${canonical}`;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  const articleSchema =
    ogType === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: fullTitle,
          description,
          url: canonicalUrl,
          datePublished: publishedTime,
          image: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1200,
            height: 630,
          },
          author: {
            "@type": "Person",
            name: author || "Eden",
            url: `${BASE_URL}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: BASE_URL,
            logo: {
              "@type": "ImageObject",
              url: DEFAULT_OG_IMAGE,
              width: 1200,
              height: 630,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
        }
      : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Article metadata */}
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* JSON-LD structured data for blog posts */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
}
