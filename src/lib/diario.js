import { getCollection } from 'astro:content';

// Entradas del Diario por página (3 filas de 4)
export const PER_PAGE = 12;

export async function getArticles() {
  return (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export function paginate(articles, page) {
  const total = Math.max(1, Math.ceil(articles.length / PER_PAGE));
  return { total, items: articles.slice((page - 1) * PER_PAGE, page * PER_PAGE) };
}
