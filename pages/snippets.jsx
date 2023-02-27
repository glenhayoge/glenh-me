import Link from "next/link";

import SnippetList from "../components/SnippetList";
import { allSnippets } from "contentlayer/generated";
import { select } from "../utils/select";
import { useEffect } from "react";

import Subscribe from "../components/Subscribe";

export default function SnippetPage({ snippets }) {

  useEffect(() => { }, []);
  return (

      <div>
      <section className="py-20 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-4">
            <div className="w-full lg:w-8/12 p-4">
              <div className=" overflow-hidden">
                <div className="pt-1 pb-1  ">
                  <div className="flex mb-4 justify-between items-center">
                    <div className="pt-2 px-3  text-gray-600">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-600 dark:text-gray-400">
                      Snippets.
                      </p>
                      <p className="text-sm  text-gray-600 my-6">
                      Short solutions to discrete problems which can be copied and pasted.
                  </p>
                    </div>
                  </div>
                </div>
          
                <main>
                    {snippets.map(
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
            </div>
            <div className="w-full lg:w-4/12 p-4 ">
              <div className="p-0 dark:text-gray-500 rounded text-center overflow-hidden   rounded-lg dark:bg-gray-800/25">
                <div className="relative pt-6 pb-10 z-60  rounded overflow-hidden">
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
              <div className="mt-8 dark:text-gray-500 rounded text-left overflow-hidden  rounded-lg dark:bg-gray-800/25">
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
    </div>

 
  );

}

export function getStaticProps() {
  const snippets = allSnippets
    .map((snippet) =>
      select(snippet, [
        "slug",
        "title",
        "description",
        "category",
        "updatedAt",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt))
    );

  return { props: { snippets } };
}

