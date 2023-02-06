import Link from "next/link";
import Image from "next/image";
import ArticleList from "../components/ArticleList";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import { useEffect } from "react";
import propic from "../assets/profile2.png";
import Subscribe from "../components/Subscribe";

export default function IndexPage({ articles }) {

  useEffect(() => { }, []);
  return (
    <>
      <section className="py-24 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto ">
          <div className="flex flex-wrap items-stretch ">
            <div className="w-full lg:w-8/12 lg:pr-8 -mt-4">
              <div className=" rounded-lg overflow-hidden ">
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className=" mb-4 block text-left text-4xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    All Posts
                  </h1>
                </div>
                <div className="px-3 py-8">
                <form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-cyan-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search Blogs & Articles ...." required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Search</button>
    </div>
</form>
</div>
        
                <div className="w-full h-full overflow-y-auto">
                  <main>
                    {articles.map(
                      ({
                        title,
                        description,
                        slug,
                        image,
                        category,
                        publishedAt,
                        readingTime,
                      }) => (
                        <ArticleList
                          key={slug}
                          title={title}
                          slug={slug}
                          dateTime={publishedAt}

                        />
                      )
                    )}
                  </main>
                </div>
              </div>
            </div>
        
            <div class="w-full lg:w-4/12 p-4 ">
              <div class="p-0 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden   shadow-md rounded-lg dark:bg-gray-800/25">
                <div class="relative pt-10 pb-10 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                  <div class="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      Major Categories
                    </h5>
                    <p className="mb-1 text-sm text-gray-500">
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Blog</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Story</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Thoughts</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Coding</button>
                    <br/>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Tutorial</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Musing</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Rant</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Personal Dev</button>
                    <br/>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Learning</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Work</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Critics</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">Review</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden shadow-md rounded-lg dark:bg-gray-800/25">
                <div className="relative pt-10 pb-10 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                  <div className="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      Popular Tags
                    </h5>
                    <p className="mb-1 text-sm text-gray-500">
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Python</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Javascript</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Music</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Photography</button>
                    <br/>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#UI/UX Design</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Testing</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#Code</button>
                    <button className="bg-gray-500/25 rounded-lg p-2 text-xs text-gray-500 m-1">#React</button>
                    <br/>
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
  const articles = allArticles
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
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}

