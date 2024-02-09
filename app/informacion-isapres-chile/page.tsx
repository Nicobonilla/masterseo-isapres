"use server";
import { InformacionIsapresChileItem } from "./InformacionIsapresChileItem";
import { Section } from "../components/layout/Section";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Información sobre el Sistema de Salud Previsional chileno",
  };
}

type Article = {
  id: number;
  h1: string;
  idnoticia: string;
  urlimg: string;
  content: string;
};

const getResumeArticles = async () => {
  const content_elements = await fetch(
    "http://localhost:3000/api/resume_all_articles",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await content_elements.json();
};

export default async function Page() {
  const articles = await getResumeArticles();
  return (
    <Section>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article: Article) => (
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
  );
}
