import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Subscribe from "../components/Subscribe";
import { ArticleTags } from '../components/ArticleTags'
import { useRouter } from 'next/router';

export default function IndexPage({ articlesData }) {
  const router = useRouter();
  const [articles, setArticles] = useState(articlesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredByTag, setFilteredByTag] = useState(null);

  // Filter articles based on search query
    
  useEffect(() => {
    const filteredArticles = articlesData.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setArticles(filteredArticles);
  }, [searchQuery, articlesData]);

  // Filter articles based on search query and tag
  useEffect(() => {
    let filteredArticles = articlesData.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredByTag) {
      filteredArticles = filteredArticles.filter((article) =>
        article.tags.includes(filteredByTag)
      );
    }


    setArticles(filteredArticles);
  }, [searchQuery, articlesData, filteredByTag]);

// Function to filter articles based on tag query parameter
  const filterArticlesByTag = (tag) => {
    const filteredArticles = articlesData.filter((article) =>
      article.tags.includes(tag)
    );
    setArticles(filteredArticles);
  };

  useEffect(() => {
    const { query } = router;
    if (query && query.tag) {
      // Check if 'tag' query parameter exists in the URL
      filterArticlesByTag(query.tag); // Filter articles based on the 'tag' query parameter
    } else {
      // If no tag parameter, reset articles to original data
      setArticles(articlesData);
    }
  }, [router.query, articlesData]);

  const handleTagClick = (tag) => {
    const tagsArray = tag.split(',').map((t) => t.trim()); // Split the tag string into an array
    const queryString = tagsArray.map((t) => `tag=${t}`).join('&'); // Generate query string for each tag
    // Replace 'yourwebsite.com/articles' with your actual route
    window.location.href = `http://localhost:3000/articles?${queryString}`;
  };
  

  return (
    <>
      <section className="py-24 ">
      <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6 ">
            <div className="w-full lg:w-8/12 px-6 lg:pl-20 md:px-8 ">
              <div className=" overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className=" mb-4 block text-left text-4xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    All Articles
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
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-400 rounded-xl bg-gray-50  dark:bg-gray-800 dark:placeholder-cyan-600 dark:text-white "
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
          {articles.map(
            ({ slug, title, category, tags, publishedAt,  readingTime }) => (
              <ArticleList
                key={slug}
                title={title}
                slug={slug}
                category={category}
                dateTime={publishedAt}
                tags={<ArticleTags tags={tags} />}
                readingTime={readingTime.text}
              />
            )
          )}
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
                      {/* Display Tags */}
      <div>
        {/* Tags list from articles */}
        {Array.from(
          new Set(articlesData.flatMap((article) => article.tags))
        ).map((tag) => (
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
                    {/* <p className="mb-1 text-sm text-gray-500">
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
                    </p> */}
                  </div>
                </div>
              </div>
              {/* <div className="mt-8 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden rounded-lg dark:bg-gray-800/25">
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
              </div> */}
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
        'slug',
        'title',
        'description',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'image',
        'tags',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articlesData } };
}