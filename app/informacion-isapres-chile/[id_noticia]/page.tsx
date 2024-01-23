'use client';
import { articlesData } from '../boletin-isapres';
import { Base } from '../../templates/Base';
import { Section } from '../../components/layout/Section';
import { usePathname } from 'next/navigation';
import { normalizeId } from '../page';
import { useEffect, useState } from 'react';

type htmlElement = {
  h1?: string;
  h2?: string;
  p?: string;
  vineta?: string[];
  iNoticia?: string;
};

export default function Page( { params }: { params: { id_noticia: string } } ) {
  
  const pathname = usePathname().split("/")[2]

  const [article, setArticle] = useState<htmlElement[] | null>(null);

  function encontrarArticuloPorH1(articlesData: htmlElement[][], idNoticia: string) {
    return articlesData.find(articulo =>
      articulo.some(seccion =>
        seccion.h1 !== undefined && normalizeId(seccion["h1"]) === idNoticia)
    );
  }
  
  useEffect(() => {
    const idNoticiaStr = Array.isArray(pathname) ? pathname[0] : pathname;
    if (idNoticiaStr) {
      const articuloEncontrado = encontrarArticuloPorH1(articlesData, idNoticiaStr);
      if (articuloEncontrado) {
        setArticle(articuloEncontrado);
        }
    }
  }, [usePathname()]);

  if (!article) {
    return <Base><Section>Cargando o artículo no encontrado - pathname: {pathname}</Section></Base>;
  }
  return (
    <Base>
      <Section>
        {
          article.map((element, index) => (
            <div>
              {element.h1 && <h1 className="text-3xl py-11  font-bold">{element.h1}</h1>}
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
