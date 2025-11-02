import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Subscribe from "../components/Subscribe";
import { ArticleTags } from '../components/ArticleTags'
import Pagination from '../components/Pagination'
import Link from 'next/link';

export default function IndexPage({ articlesData, categories }) {
  const [articles, setArticles] = useState(articlesData || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredByTag, setFilteredByTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const articlesPerPage = 10; // Number of articles per page

  // Filter articles based on search query and tag
  useEffect(() => {
    if (!articlesData) return;
    
    let filteredArticles = articlesData.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredByTag) {
      filteredArticles = filteredArticles.filter((article) =>
        article.tags && article.tags.includes(filteredByTag)
      );
    }

    setArticles(filteredArticles);
  }, [searchQuery, articlesData, filteredByTag]);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <>
      <section className="py-24">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6">
            <div className="w-full lg:w-8/12 px-6 lg:pl-20 md:px-8">
              <div className="overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center">
                  <Link href="/articles">
                    <h1 className="mb-4 block text-left text-5xl px-2 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-5xl">
                      Articles.
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 px-2">
                    Guides, references, stories, posts and tutorials on web/app development and more. <Link href="/article/categories" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline">View All Categories</Link>
                    </p>
                  </Link>
                </div>
                {/* Search form */}
                <div className="px-3 py-8">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-400 rounded-xl bg-gray-50 dark:bg-gray-800 dark:placeholder-cyan-600 dark:text-white"
                        placeholder="Search for Articles ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
                {/* Display filtered articles */}
                <div className="w-full h-full overflow-y-auto">
                  <main>
                    {currentArticles.map(({ slug, title, category, tags, publishedAt, readingTime }) => (
                      <ArticleList
                        key={slug}
                        title={title}
                        slug={slug}
                        category={category}
                        dateTime={publishedAt}
                        tags={<ArticleTags tags={tags} />}
                        readingTime={readingTime?.text || '0 min read'}
                      />
                    ))}
                  </main>
                </div>
                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(articles.length / articlesPerPage)}
                  onPageChange={handlePageChange} // Pass onPageChange callback
                />
              </div>
            </div>
            {/* Sidebar */}
            <div className="w-full px-6 pt-12 lg:w-4/12 lg:pr-20 md:px-8">
              {/* Your sidebar content */}
              <div className="dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden rounded-lg dark:bg-gray-800/25">
                <div className="relative pt-6 pb-10 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                  <div className="px-6 text-center pt-2">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-gray-600 dark:text-yellow-400 text-sm tracking font-semibold">
                        Topic Categories
                      </h5>
                      <Link
                        href="/article/categories"
                        className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline"
                      >
                        View All
                      </Link>
                    </div>
                    {/* Display Categories */}
                    <div className="text-left">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={`/article/category/${encodeURIComponent(category.name)}`}
                          className="block mb-2 p-2 bg-gray-500/25 dark:bg-gray-200/25 rounded-lg hover:bg-gray-400/25 dark:hover:bg-gray-300/25 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {category.count}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  const articlesData = allArticles
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
        'caption'
      ]);
      
      // Ensure readingTime is never undefined
      if (!selected.readingTime) {
        selected.readingTime = { text: '0 min read' };
      }
      
      return selected;
    })
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  // Get all unique categories with their counts
  const categoryMap = {};
  
  allArticles.forEach((article) => {
    const category = article.category;
    if (category) {
      if (!categoryMap[category]) {
        categoryMap[category] = 0;
      }
      categoryMap[category]++;
    }
  });

  // Convert to array and sort alphabetically
  const categories = Object.keys(categoryMap)
    .map((categoryName) => ({
      name: categoryName,
      count: categoryMap[categoryName],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return { 
    props: { 
      articlesData: articlesData || [],
      categories: categories || []
    } 
  };
}
