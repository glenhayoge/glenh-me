import { useState, useEffect } from "react";
import SnippetList from "../components/SnippetList";
import { allSnippets } from "contentlayer/generated";
import { select } from "../utils/select";
import Subscribe from "../components/Subscribe";
import { ArticleTags } from '../components/ArticleTags'
import { useRouter } from 'next/router';
import Pagination from '../components/Pagination'
import Link from 'next/link'; // Import Link from 'next/link' for client-side navigation

export default function IndexPage({ snippetsData }) {
  const router = useRouter();
  const [snippets, setSnippets] = useState(snippetsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredByTag, setFilteredByTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const snippetsPerPage = 5; // Number of articles per page

  // Filter articles based on search query and tag
  useEffect(() => {
    let filteredSnippets = snippetsData.filter((snippet) =>
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredByTag) {
      filteredSnippets = filteredSnippets.filter((snippet) =>
        snippet.tags.includes(filteredByTag)
      );
    }

    setSnippets(filteredSnippets);
  }, [searchQuery, snippetsData, filteredByTag]);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current articles
  const indexOfLastSnippet = currentPage * snippetsPerPage;
  const indexOfFirstSnippet = indexOfLastSnippet - snippetsPerPage;
  const currentSnippets = snippets.slice(indexOfFirstSnippet, indexOfLastSnippet);

  const handleTagClick = (tag) => {
    const tagsArray = tag.split(',').map((t) => t.trim()); // Split the tag string into an array
    const queryString = tagsArray.map((t) => `tag=${t}`).join('&'); // Generate query string for each tag
    // Replace 'yourwebsite.com/articles' with your actual route
    window.location.href = `http://glensea.com/snippets?${queryString}`;
  };

  return (
    <>
      <section className="py-24">
        <div className="container px-2 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6">
            <div className="w-full lg:w-8/12 px-6 lg:pl-20 md:px-8">
              <div className="overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center">
                  <Link href="/snippets">
                    <h1 className="mb-4 block text-left text-5xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-5xl">
                      Snippets.
                    </h1>
                    <p className="text-sm pl-4 text-gray-600 my-6">
                      Short solutions to discrete problems which can be copied and pasted.
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
                        placeholder="Search Snippets ..."
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
                    {currentSnippets.map(
                      ({
                        title,
                        description,
                        slug,
                        category,
                        updatedAt,
                      }) => (
                        <SnippetList
                          key={slug}
                          title={title}
                          description={description}
                          slug={slug}
                          category={category}
                          date={updatedAt}
                        />
                      )
                    )}
                  </main>
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(snippets.length / snippetsPerPage)}
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
                      {/* Tags list from articles */}
                      {Array.from(
                        new Set(snippetsData.flatMap((snippet) => snippet.tags))
                      ).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`bg-gray-500/25 rounded-lg p-2 dark:bg-gray-200/25 dark:text-gray-300 text-xs text-gray-700 m-1 ${tag === filteredByTag ? "bg-gray-300" : ""
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
  const snippetsData = allSnippets
    .map((snippet) => select(snippet, ['slug', 'title','updatedAt', 'description', 'category', 'tags']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return { props: { snippetsData } };
}
