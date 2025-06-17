import { allSnippets } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { SnippetDetails } from '../../components/SnippetDetails';

import { useMDXComponent } from 'next-contentlayer2/hooks';


const SingleSnippet = ({ snippet }) => {

  const MDXContent = useMDXComponent(snippet.body.code);

  return (
    <>
      <NextSeo name={snippet.title} description={snippet.description} />

      <SnippetDetails
    
        title={snippet.title}
        description={snippet.description}
        category={snippet.category}
        date={snippet.updatedAt}
      >
        <MDXContent components={{
          p: props => <p {...props} className="text-gray-600 dark:text-gray-400 " />,
          h1: props => <h1 {...props} className="text-gray-700 dark:text-yellow-400 " />,
          h2: props => <h2 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h3: props => <h3 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h4: props => <h4 {...props} className="text-gray-700 dark:text-gray-200 " />,
        }}
        />
      </SnippetDetails>
    

    </>
  );
};

export default SingleSnippet;

export async function getStaticPaths() {
  return {
    paths: allSnippets.map((snippet) => ({
      params: { slug: snippet.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const snippet = allSnippets.find((snippet) => snippet.slug === params.slug);

  return { props: { snippet } };
}