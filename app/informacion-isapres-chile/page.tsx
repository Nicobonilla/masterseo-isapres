'use client';
import { Base } from '../templates/Base';
import { InformacionIsapresChileItem } from './InformacionIsapresChileItem';
import { Section } from '../components/layout/Section';
import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';


type Article = {
  id: number;
  h1: string;
  idnoticia: string;
  urlimg: string;
  content: string;
};


export default function Page() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Define una función asíncrona dentro del efecto
    const fetchData = async () => {
      const content_elements = await fetch('/api/resume_all_articles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data_articles = await content_elements.json();
      setArticles(data_articles);
    };

    // Invoca la función asíncrona
    fetchData();
  }, []);

  return (
    <>
      <Base>
        <Section>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
            
            articles.map((article) => (
              <InformacionIsapresChileItem
                key={article.id}
                title={article.h1}
                description={article.content}
                idNoticia={article.idnoticia}
                urlImg={article.urlimg}
              />
            ))}
          </div>
        </Section>
      </Base>
    </>
  );
}
