'use client';
import { articlesData } from '../boletin-isapres';
import { Base } from '../../templates/Base';
import { Section } from '../../components/layout/Section';
import { useRouter } from 'next';
import { normalizeId } from '../page';
import { useEffect, useState } from 'react';

type htmlElement = {
  h1?: string;
  h2?: string;
  p?: string;
  vineta?: string[];
  id_noticia?: string;
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: normalizeId(String(article[0]["h1"])),
  }))
}

export default function Page( { params }) {
  
  const [article, setArticle] = useState<htmlElement[] | null>(null);

  function encontrarArticuloPorH1(articlesData: htmlElement[][], id_noticia: string) {
    return articlesData.find(articulo =>
      articulo.some(seccion =>
        seccion.h1 !== undefined && normalizeId(seccion["h1"]) === id_noticia)
    );
  }

  const router = useRouter();
  
  useEffect(() => {
    // Asegúrate de que estás en el cliente y que el router está listo
    if (router.isReady) {
      // Asegúrate de que id_noticia es una cadena
      const idNoticiaStr = Array.isArray(router.query.id_noticia) ? router.query.id_noticia[0] : router.query.id_noticia;
      if (idNoticiaStr) {
        const articuloEncontrado = encontrarArticuloPorH1(articlesData, idNoticiaStr);
        if (articuloEncontrado) {
          setArticle(articuloEncontrado);
        }
      }
    }
  }, [router.isReady, router.query]);

  if (!article) {
    return <Base><Section>Cargando o artículo no encontrado</Section></Base>;
  }
  return (
    <Base>
      <Section>
        {
          article.map((element, index) => (
            <div>
              {element.h1 && <h1 className="text-xl font-bold">{element.h1}</h1>}
              {element.h2 && <h2 className="text-lg font-semibold mb-1">{element.h2}</h2>}
              {element.p && <p className="mb-3 text-justify">{element.p}</p>}
              {element.vineta && Array.isArray(element.vineta) && (
                <ul className="list-disc pl-5 space-y-2">
                  {element.vineta.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
      </Section>
    </Base>
  );
};
