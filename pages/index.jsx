// import Head from "next/head";
import Head from "next/document";
import ArticleCard from "../components/ArticleCard";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Header from "../components/Header";
import IProjects from "../components/IndexProjects";
import ILearningResources from "../components/LearningResources";
import ISideBar from "../components/IndexSidebar"
import Link from "next/link";
// import Newsletter from "../components/Newsletter";
// import { useTimeAgo } from "next-time-ago";
// import Subscribe from "../components/Subscribe";


export default function Home({ articles }) {
  // const { TimeAgo } = useTimeAgo();

  return (
    <div>
      {/* <Head>
        <title>Glenh.me | Blog</title>
        <Link rel="icon" href="/favicon.ico"/> 
      </Head> */}
      <Header />
      <main>
      <section className="py-24 ">
        <div className="container px-4 lg:px-10 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-4">
            <div className="w-full lg:w-8/12 p-4">
              <div className=" overflow-hidden">
                <div className="pt-1 pb-1 ">
                  <div className="flex mb-4 justify-between items-center">
                    <div className="pt-2 px-3  text-gray-600">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-600 dark:text-gray-400">
                        Recent Posts
                      </p>
                      <p className="text-sm  text-gray-600 my-6">
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
                      tags
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
                        tags={tags}
                      />
                    )
                  )}
                </main>

                <div className=" p-4 flex items-center justify-between ">
                  <a
                    className=" py-2 px-2  text-gray-500 outline outline-1  font-bold hover:outline-2 rounded-full text-xs hover:text-cyan-700 dark:hover:text-cyan-700"
                    href="/articles"
                  >
                    View All Posts
                  </a>
                </div>
              </div>

            {/* index projects links */}
             <IProjects />

            {/* learning resources links */}
             <ILearningResources />
            </div>
            {/* index side bar */}
            <div className="w-full lg:w-4/12 p-4 ">
            <ISideBar /> 
            </div>
          
          </div>
        </div>
      </section>
      </main>
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
        "tags"
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
