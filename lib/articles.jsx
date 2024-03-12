// ../lib/articles.js

import { getArticleBySlug, allArticles } from 'contentlayer/generated';
// import { allArticles } from "contentlayer/generated";

export async function getRelatedArticles(category, tags, currentArticleSlug) {
  let relatedArticles = [];

  // Get the current article
  const currentArticle = await getArticleBySlug(currentArticleSlug);

  // Query all articles
  const getAllArticles = await allArticles();

  // Filter articles by category
  if (category) {
    relatedArticles = relatedArticles.concat(
        getAllArticles.filter(article => article.category === category)
    );
  }

  // Filter articles by tags
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      relatedArticles = relatedArticles.concat(
        getAllArticles.filter(article => article.tags.includes(tag))
      );
    }
  }

  // Remove duplicates and the current article from the related articles list
  relatedArticles = relatedArticles
    .filter(article => article.slug !== currentArticleSlug)
    .filter((v, i, a) => a.findIndex(t => (t.slug === v.slug)) === i);

  return relatedArticles;
}
