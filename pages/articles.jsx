import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Subscribe from "../components/Subscribe";

export default function IndexPage({ articlesData }) {
  const [articles, setArticles] = useState(articlesData);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter articles based on search query
  useEffect(() => {
    const filteredArticles = articlesData.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setArticles(filteredArticles);
  }, [searchQuery, articlesData]);

  return (
    <>
      <section className="py-24 ">
      <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6 ">
            <div className="w-full lg:w-8/12 px-6 lg:pl-20 md:px-8 ">
              <div className=" overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className=" mb-4 block text-left text-4xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    All Posts
                  </h1>
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
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-cyan-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  placeholder="Search Blogs & Articles ...."
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
              {articles.map(({ slug, title, publishedAt }) => (
                <ArticleList
                  key={slug}
                  title={title}
                  slug={slug}
                  dateTime={publishedAt}
                />
              ))}
            </main>
          </div>

              </div>
            </div>

            <div className="w-full px-6 pt-12 lg:w-4/12  lg:pr-20 md:px-8 ">
              <div className="dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden rounded-lg dark:bg-gray-800/25">
                <div className="relative pt-6 pb-10 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                  <div className="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-sm mb-4 tracking-wider font-semibold">
                      MAJOR CATEGORIES
                    </h5>
                    <p className="mb-1 text-sm text-gray-500">
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Blog</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Story</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Thoughts</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Coding</button>
                      <br />
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Tutorial</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Musing</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Rant</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Personal Dev</button>
                      <br />
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Learning</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Work</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Critics</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Review</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden rounded-lg dark:bg-gray-800/25">
                <div className="relative pt-6 pb-10 z-60 dark:bg-gray-800/25 rounded overflow-hidden">
                  <div className="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-sm mb-4 tracking-wider font-semibold">
                      POPULAR TAGS
                    </h5>
                    <p className="mb-1 text-sm text-gray-500">
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Python</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Javascript</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Music</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Photography</button>
                      <br />
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#UI/UX Design</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Testing</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Code</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#React</button>
                      <br />
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Angular</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#NextJS</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#NodeJS</button>
                      <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Databases</button>
                    </p>

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
    .map((article) =>
      select(article, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "readingTime",
        "author",
        "category",
        "image",
        // "tags",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articlesData } };
}



