import Link from "next/link";
import Image from "next/image";
import ArticleList from "../components/ArticleList";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import { useEffect } from "react";
import propic from "../assets/profile2.png";
import Subscribe from "../components/Subscribe";

export default function IndexPage({ articles }) {

  useEffect(() => {}, []);
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
                  <div class="relative pt-10 pb-20 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                    <div class="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      Categories
                    </h5>
                    <p class="mb-6 text-sm text-gray-500">
                      Software Developer, Designer &amp; Creator
                    </p>
                    </div>
                  </div>
                </div>
                <div class="mt-8 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden   shadow-md rounded-lg dark:bg-gray-800/25">
                  <div class="relative pt-10 pb-20 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                    <div class="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      Tags
                    </h5>
                    <p class="mb-6 text-sm text-gray-500">
                      Software Developer, Designer &amp; Creator
                    </p>
                    </div>
                  </div>
                </div>
                <Subscribe/>
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

