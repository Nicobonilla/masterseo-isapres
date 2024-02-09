'use server';

const fetchData = async (id_noticia: string) => {
  console.log("article")
  const response = await fetch(`/api/articles/${id_noticia}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Network response was not ok.");
  const article = await response.json();
  console.log(article)
  return article.data;
};
