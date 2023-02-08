import { allSnippets } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { SnippetDetails } from '../../components/BookDetails';

import { useMDXComponent } from 'next-contentlayer/hooks';



const SingleSnippet = ({ snippet }) => {

  //   console.log(article);

  const MDXContent = useMDXComponent(book.body.code);

  return (
    <>
      <NextSeo name={snippet.name} description={snippet.description} />

      <SnippetDetails
        image={snippet.image}
        title={snippet.name}
        description={snippet.description}
        category={snippet.category}
        date={snippet.updatedAt}

      >
        <MDXContent components={{
          // Map HTML element tag to React component
          // h1: DesignSystem.H1,
          // h2: DesignSystem.H2,
          // h3: DesignSystem.H3,
          // Or define component inline
          p: props => <p {...props} className="text-gray-600 dark:text-gray-400 " />,
          h1: props => <h1 {...props} className="text-gray-700 dark:text-yellow-400 " />,
          h2: props => <h2 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h3: props => <h3 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h4: props => <h4 {...props} className="text-gray-700 dark:text-gray-200 " />,
          // <p {...props} style={{ color: "rebeccapurple" }} />,
        }}
        />
      </SnippetDetails>
    

    </>
  );
};

export default SingleSnippet;

export async function getStaticPaths() {
  return {
    paths: allSnippet.map((snippet) => ({
      params: { slug: snippet.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const book = allSnippets.find((snippet) => snippet.slug === params.slug);

  return { props: { snippet } };
}