import Head from "next/head";
import ArticleCard from "../components/ArticleCard";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Header from "../components/header";
import IProjects from "../components/IndexProjects";
import ILearningResources from "../components/LearningResources";
import ISideBar from "../components/IndexSideBar"

import Newsletter from "../components/newsletter";
import { useTimeAgo } from "next-time-ago";
import Subscribe from "../components/Subscribe";


export default function Home({ articles }) {
  const { TimeAgo } = useTimeAgo();

  return (
    <div>
      <Head>
        <title>Glenh.me | Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          
          @import
          url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&family=Nanum+Pen+Script&display=swap');
        </style>       
      </Head>
      <Header />
      <section className="py-24 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-4">
            <div className="w-full lg:w-8/12 p-4">
              <div className=" overflow-hidden">
                <div className="pt-1 pb-1 px-6 ">
                  <div className="flex mb-4 justify-between items-center">
                    <div class="pt-2 px-3  text-gray-600">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-600 dark:text-gray-400">
                        Recent Posts
                      </p>
                      <p className="text-sm  text-gray-400 mt-3">
                    {" "}
                    Read articles, guides,tutorials and lots more.
                  </p>
                    </div>
                  </div>
                </div>
          
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
                      <ArticleCard
                        key={slug}
                        title={title}
                        description={description}
                        slug={slug}
                        image={image}
                        category={category}
                        dateTime={publishedAt}
                        date={publishedAt}
                        readingTime={readingTime.text}
                      />
                    )
                  )}
                </main>

                <div class="ml-4 p-6 flex items-center justify-between ">
                  <a
                    class=" py-2 px-3  text-gray-500 outline outline-1  font-bold hover:outline-2 rounded-full text-xs "
                    href="/articles"
                  >
                    View All Posts
                  </a>
                </div>
              </div>

            {/* index projects links */}
             <IProjects />

            {/* learning resources links */}
             {/* <ILearningResources /> */}
            </div>
            {/* index side bar */}
            <div class="w-full lg:w-4/12 p-4 ">
            <ISideBar />
            </div>
          
          </div>
        </div>
      </section>
    </div>
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
