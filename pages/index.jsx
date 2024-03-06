import Head from "next/head";
import ArticleCard from "../components/ArticleCard";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Header from "../components/Header";
import IProjects from "../components/IndexProjects";
import ILearningResources from "../components/LearningResources";
import ISideBar from "../components/IndexSidebar"
import Link from 'next/link'


export default function Home({ articles }) {
  // To display only the first 5 articles
  const displayedArticles = articles.slice(0, 5);
  return (
    <div>
       <Head>
       <meta name="title" content="Glen G Hayoge"/>
       <meta property="og:type" content="website"/>
        <meta name="description" content="Hi, my name is Glen. I'm a software developer, designer & creator from Papua New Guinea."/>
        <meta property="og:image" content="/assets/ggh-meta-image.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        {/* Add other meta tags specific to your homepage */}
      </Head>
      <Header />
     
      <section className="py-24 ">
        <div className="container px-4 lg:px-10 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-8">
            <div className="w-full lg:w-8/12 lg:pl-20 md:px-8">
              <div className="md:px-2 px-4 overflow-hidden">
                <div className="pt-1 pb-1 ">
                  <div className="flex mb-4 justify-between items-center">
                    <div className=" px-3  text-gray-600">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-600 dark:text-gray-400">
                        Recent Articles
                      </p>
                      <p className="text-sm  text-gray-600 my-6">
                    {" "}
                    Read articles, guides,tutorials and lots more.
                  </p>
                    </div>
                  </div>
                </div>
          
                <main>
                {displayedArticles.map(
                    ({
                      title,
                      description,
                      slug,
                      image,
                      category,
                      publishedAt,
                      readingTime,
                      // tags
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

                <div className=" p-4 flex items-center justify-between ">
                  <Link
                    className="before:ease text-center relative py-1 rounded-full w-40 overflow-hidden border border-gray-400 dark:border-gray-500 text-sm text-gray-500 shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-yellow-500 hover:before:-translate-x-40"
                    href="/articles"
                  >
                    All Posts
                    </Link>
                </div>
              </div>
            {/* index projects links */}
             <IProjects />
            {/* learning resources links */}
             <ILearningResources />
            </div>
            {/* index side bar */}
            <div className="w-full lg:w-4/12 lg:pr-20 md:px-4 ">
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
        // "tags"
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 5); // Select only the first 5 articles

  return { props: { articles } };
}
