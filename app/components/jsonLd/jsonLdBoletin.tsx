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
  

  const product = await getProduct(params.id)
 
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
  }
 
  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... */}
    </section>
  )
}