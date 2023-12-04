import { allArticles } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { SingleArticle } from '../../components/SingleArticle';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link'


const SinglePost = ({ article }) => {
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <NextSeo 
      title={article.title} 
      description={article.seoDescription} />

      <SingleArticle
      
        image={article.image}
        title={article.title}
        description={article.description}
        category={article.category}
        author={article.author}
        tags={article.tags}
        publishedAt={article.publishedAt}
        readingTime={article.readingTime.txt}
      >
              <div>
  <h3 className="text-gray-600 dark:text-gray-200">In this Article</h3>
  <div>
    {article.headings.map(heading => {
      let paddingLeftStyle = '';
      if (heading.level === 'two') paddingLeftStyle = 'pl-2';
      if (heading.level === 'three') paddingLeftStyle = 'pl-4';

      return (
        <ul key={`###${heading.slug}`}>
          <li>
          <Link
            className={paddingLeftStyle}
            href={`#${heading.slug}`}
          >
            {heading.text}
          </Link>
          </li>
        </ul>
      );
    })}
  </div>
</div>
        <MDXContent components={{
          p: props => <p {...props} className="text-gray-600 dark:text-gray-400 " />,
          strong: props => <strong {...props} className="text-gray-600 dark:text-gray-300 " />,
          h1: props => <h1 {...props} className="text-gray-700 dark:text-yellow-400 " />,
          h2: props => <h2 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h3: props => <h3 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h4: props => <h4 {...props} className="text-gray-700 dark:text-gray-200 " />,
          code: (props) => (
            <code {...props} className="text-gray-500 dark:text-gray-200">
              {props.children}
            </code>
          ),
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