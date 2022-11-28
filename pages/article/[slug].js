import { allArticles } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { SingleArticle } from '../../components/SingleArticle';
import SampleComponent from '../../components/SampleComponent';
import { useMDXComponent } from 'next-contentlayer/hooks';


// const usedcomponents = {
//     SampleComponent,
//   };


const SinglePost = ({ article }) => {

//   console.log(article);

  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <NextSeo title={article.title} description={article.seoDescription} />

      <SingleArticle
        image={article.image}
        title={article.title}
        category={article.category}
        author={article.author}
        publishedAt={article.publishedAt}
        readingTime={article.readingTime.txt}
      >
        <MDXContent components={{
              // Map HTML element tag to React component
              // h1: DesignSystem.H1,
              // h2: DesignSystem.H2,
              // h3: DesignSystem.H3,
              // Or define component inline
              p: props => <p {...props} className="text-gray-600 dark:text-gray-400 "/>,
              h1: props => <h1 {...props} className="text-gray-700 dark:text-yellow-400 " />,
              h2: props => <h2 {...props} className="text-gray-700 dark:text-gray-200 " />,
              h3: props => <h3 {...props} className="text-gray-700 dark:text-gray-200 " />,
              h4: props => <h4 {...props} className="text-gray-700 dark:text-gray-200 " />,
                // <p {...props} style={{ color: "rebeccapurple" }} />,
            }}
        
        /> 
      </SingleArticle>
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = allArticles.find((article) => article.slug === params.slug);

  return { props: { article } };
}