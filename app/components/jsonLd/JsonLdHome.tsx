export default function JsonLdHome(){
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.redisapres.cl/",
      "name": "Red Isapres",
      "description": "",
      "publisher": {
        "@type": "Organization",
        "name": "Red Isapres",
        "logo": {
          "@type": "ImageObject",
          "url": "/images/logo.svg"
        }
      }
    };
  
    return (
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    );
  };
  