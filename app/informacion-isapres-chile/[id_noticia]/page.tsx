"use client";
import { Base } from "../../templates/Base";
import { Section } from "../../components/layout/Section";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Contenido = {
  id: number;
  article_id: string;
  element_type: string;
  content_order: number;
  content: string | string[];
  group_id?: number;
};

type Titles = {
  id: number;
  urlimg: string;
  h1: string;
  idnoticia: string;
};

export default function Page() {
  const [title, setTitle] = useState<Titles>({
    id: 0,
    urlimg: "",
    h1: "",
    idnoticia: "",
  });
  const [contenido, setContenido] = useState<Contenido[]>([]);
  const path = usePathname();
  const pathname = path ? path.split("/").pop() : "";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/articles/${pathname}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Network response was not ok.");
      const data_articles = await response.json();
      const { titles, content } = data_articles.data;
      setTitle(titles);
      setContenido(content);
    };

    fetchData();
  }, [pathname]);

  return (
    <Base>
      <Section yPadding="py-0">
        <div className="relative w-full h-32">
          {title.urlimg && pathname && (
            <Image
              src={title.urlimg}
              alt={pathname}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          )}
        </div>
        {title.h1 && (
          <h1 className="text-3xl pt-11 pb-3 font-bold">{title.h1}</h1>
        )}
        {contenido.map((element, index) => (
          <div key={index}>
            {element.element_type == "H2" && (
              <h2 className="text-lg font-semibold mt-5 mb-2">
                {element.content}
              </h2>
            )}
            {element.element_type == "P" && (
              <p className="text-justify">{element.content}</p>
            )}
            {element.element_type == "VINETA" && (
              <ul className="list-disc pl-12 space-y-2">
                <li>{element.content}</li>
              </ul>
            )}
          </div>
        ))}
      </Section>
    </Base>
  );
}
