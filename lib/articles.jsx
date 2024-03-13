// ../lib/articles.js

import { allArticles } from 'contentlayer/generated';

export async function getRelatedArticles(category, tags, currentArticleSlug) {
  let relatedArticles = [];

  // Query all articles
  const allArticlesData = await allArticles();

  // Filter articles by category
  if (category) {
    relatedArticles = relatedArticles.concat(
      allArticlesData.filter(article => article.category === category)
    );
  }

  // Filter articles by tags
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      relatedArticles = relatedArticles.concat(
        allArticlesData.filter(article => article.tags.includes(tag))
      );
    }
  }

  // Remove duplicates and the current article from the related articles list
  relatedArticles = relatedArticles
    .filter(article => article.slug !== currentArticleSlug)
    .filter((v, i, a) => a.findIndex(t => t.slug === v.slug) === i);

  return relatedArticles;
}
