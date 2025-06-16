import Head from "next/head";
import ArticleCard from "../components/ArticleCard";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Header from "../components/Header";
import IProjects from "../components/IndexProjects";
import ILearningResources from "../components/LearningResources";
import ISideBar from "../components/IndexSidebar"
import Link from 'next/link'
import Button from '../components/Button';


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
     
      <section className="py-8 ">
        <div className="container px-4 md:px-10 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-8">
            <div className="w-full lg:w-8/12 lg:pl-20 md:px-8">
              <div className="md:px-2 px-4 overflow-hidden">
                <div className="pt-1 pb-1 ">
                  <div className="flex mb-4 justify-between items-center">
                    <div className="px-3">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Recent Articless
                      </p>
                      <p className="text-sm text-primary my-6">
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
                    <Button  href="/articles" label="All Posts"/>
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
