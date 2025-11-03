import { allArticles } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { SingleArticle } from '../../components/SingleArticle';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import Link from 'next/link';
import { PreWithCopy } from '../../components/PreWithCopy';

const SinglePost = ({ article }) => {
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <NextSeo 
        title={article.title} 
        description={article.seoDescription} 
      />

      <SingleArticle
        image={article.image}
        caption={article.caption}
        title={article.title}
        description={article.description}
        category={article.category}
        author={article.author}
        tags={article.tags}
        publishedAt={article.publishedAt}
        readingTime={article.readingTime?.text || '0 min read'}
        headings={article.headings}
        slug={article.slug}
      >
        <MDXContent components={{
          p: props => <p {...props} className="text-gray-600 dark:text-gray-400 " />,
          strong: props => <strong {...props} className="text-gray-600 dark:text-gray-300 " />,
          h1: props => <h1 {...props} className="text-gray-700 dark:text-yellow-400 " />,
          h2: props => <h2 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h3: props => <h3 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h4: props => <h4 {...props} className="text-gray-700 dark:text-gray-200 " />,
          pre: (props) => {
            // Use PreWithCopy wrapper for code blocks with copy functionality
            return <PreWithCopy {...props} />;
          },
          code: (props) => {
            // Check if this is inline code or part of a code block
            const { className, children, ...rest } = props;
            const isInlineCode = !className || !className.includes('language-');
            
            if (isInlineCode) {
              // Inline code
              return (
                <code {...rest} className="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            
            // Code block - preserve className from rehypePrismPlus
            return (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }} />
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
  
  if (!article) {
    return {
      notFound: true,
    };
  }

  return { props: { article } };
}