import { allArticles } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { select } from '../../../utils/select';
import ArticleList from '../../../components/ArticleList';
import { ArticleTags } from '../../../components/ArticleTags';
import Pagination from '../../../components/Pagination';
import { useState } from 'react';

export default function CategoryPage({ category, articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Get current articles for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <NextSeo
        title={`${category} - Article Category - Glen G Hayoge`}
        description={`All articles in the ${category} category`}
      />

      <section className="py-24">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6">
            <div className="w-full lg:w-8/12 px-6 lg:pl-20 md:px-8">
              <div className="overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center mb-4">
                  <Link href="/article/categories">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 mr-2">
                      ← Back to Categories
                    </span>
                  </Link>
                </div>
                
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className="mb-4 block text-left text-4xl px-2 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl">
                    {category}
                  </h1>
                </div>

                <div className="px-3 mb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    {articles.length} {articles.length === 1 ? 'article' : 'articles'} in this category
                  </p>
                </div>

                {/* Display articles */}
                <div className="w-full h-full overflow-y-auto">
                  <main>
                    {currentArticles.map(({ slug, title, category: articleCategory, tags, publishedAt, readingTime }) => (
                      <ArticleList
                        key={slug}
                        title={title}
                        slug={slug}
                        category={articleCategory}
                        dateTime={publishedAt}
                        tags={<ArticleTags tags={tags} />}
                        readingTime={readingTime?.text || '0 min read'}
                      />
                    ))}
                  </main>
                </div>

                {/* Pagination */}
                {articles.length > articlesPerPage && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(articles.length / articlesPerPage)}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full px-6 pt-12 lg:w-4/12 lg:pr-20 md:px-8">
              <div className="dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden rounded-lg dark:bg-gray-800/25">
                <div className="relative pt-6 pb-10 z-60 dark:bg-gray-800/25 rounded overflow-hidden">
                  <div className="px-6 text-center pt-2">
                    <h5 className="text-gray-600 dark:text-yellow-400 text-sm mb-4 tracking-wider font-semibold">
                      CATEGORY
                    </h5>
                    <div className="text-left">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{category}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {articles.length} {articles.length === 1 ? 'article' : 'articles'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  // Get all unique categories
  const categories = Array.from(new Set(allArticles.map((article) => article.category).filter(Boolean)));

  const paths = categories.map((category) => ({
    params: { category: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  
  // Filter articles by category
  const categoryArticles = allArticles
    .filter((article) => article.category === category)
    .map((article) => {
      const selected = select(article, [
        'slug',
        'title',
        'description',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'image',
        'tags',
        'caption',
      ]);

      if (!selected.readingTime) {
        selected.readingTime = { text: '0 min read' };
      }

      return selected;
    })
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return {
    props: {
      category,
      articles: categoryArticles,
    },
  };
}

