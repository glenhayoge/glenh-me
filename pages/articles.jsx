import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Subscribe from "../components/Subscribe";
import { ArticleTags } from '../components/ArticleTags'
import { useRouter } from 'next/router';
import Pagination from '../components/Pagination'
import Link from 'next/link'; // Import Link from 'next/link' for client-side navigation

export default function IndexPage({ articlesData }) {
  const router = useRouter();
  const [articles, setArticles] = useState(articlesData || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredByTag, setFilteredByTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const articlesPerPage = 5; // Number of articles per page

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

  const handleTagClick = (tag) => {
    if (!tag) return;
    const tagsArray = tag.split(',').map((t) => t.trim()); // Split the tag string into an array
    const queryString = tagsArray.map((t) => `tag=${t}`).join('&'); // Generate query string for each tag
    window.location.href = `http://glensea.com/articles?${queryString}`;
  };

  // Get unique tags from articles
  const uniqueTags = articlesData ? Array.from(
    new Set(articlesData.flatMap((article) => 
      article.tags ? article.tags.split(',').map(tag => tag.trim()) : []
    ))
  ) : [];

  return (
    <>
      <section className="py-24">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6">
            <div className="w-full lg:w-8/12 px-6 lg:pl-20 md:px-8">
              <div className="overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center">
                  <Link href="/articles">
                    <h1 className="mb-4 block text-left text-4xl px-2 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl">
                      Articles.
                    </h1>
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
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-sm mb-4 tracking-wider font-semibold">
                      MAJOR CATEGORIES
                    </h5>
                    {/* Display Tags */}
                    <div>
                      {uniqueTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`bg-gray-500/25 rounded-lg p-2 dark:bg-gray-200/25 dark:text-gray-300 text-xs text-gray-700 m-1 ${
                            tag === filteredByTag ? "bg-gray-300" : ""
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <div>
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

  return { 
    props: { 
      articlesData: articlesData || [] 
    } 
  };
}
