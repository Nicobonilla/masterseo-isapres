'use client'
import { Base } from '../templates/Base';
import { InformacionIsapresChile } from '../templates/InformacionIsapresChile';
import { Section } from '../components/layout/Section';
import { articlesData } from "../informacion-isapres-chile/boletin-isapres";

export const normalizeId = (text: string): string => {
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // Convertir a minúsculas
    .toLowerCase()
    // Eliminar todo lo que no sea alfanumérico
    .replace(/[^a-z0-9 ]/g, '')
    // Reemplazar espacios por '-'
    .replace(/\s+/g, '-')
    // Eliminar '-' al inicio y al final si los hay
    .replace(/^-+|-+$/g, '');
  console.log("normalize: " + text)
  return text;
};

export default function Page() {

  const list_titles = [];
  const extractedData = articlesData.map(article => {
    let extracted = { "h1": '', "p": '', "id_noticia": '' };
    // Encuentra el primer elemento h1
    const h1Element = article.find(element => element.h1);
    if (h1Element) {
      extracted.h1 = String(h1Element.h1);
      extracted.id_noticia = normalizeId(String(h1Element.h1));
    }
    // Encuentra el primer elemento p
    const pElement = article.find(element => element.p);
    if (pElement) extracted.p = String(pElement.p);
    return extracted;
  });


  return (
    <>
      <Base>
        <Section>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {extractedData.map((article,index)=>(
            <InformacionIsapresChile 
              title={article.h1}
              description={article.p} 
              id_noticia={article.id_noticia}
              />
              ))}
          </div>
        </Section>
      </Base>
    </>
  );
}