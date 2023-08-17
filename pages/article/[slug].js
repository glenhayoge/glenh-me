import { allArticles } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { SingleArticle } from '../../components/SingleArticle';
import { useMDXComponent } from 'next-contentlayer/hooks';

const SinglePost = ({ article }) => {
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <NextSeo title={article.title} description={article.seoDescription} />

      <SingleArticle
        image={article.image}
        title={article.title}
        description={article.description}
        category={article.category}
        author={article.author}
        publishedAt={article.publishedAt}
        readingTime={article.readingTime.txt}
      >
        <MDXContent components={{
          p: props => <p {...props} className="text-gray-600 dark:text-gray-400 " />,
          strong: props => <strong {...props} className="text-gray-600 dark:text-gray-300 " />,
          h1: props => <h1 {...props} className="text-gray-700 dark:text-yellow-400 " />,
          h2: props => <h2 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h3: props => <h3 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h4: props => <h4 {...props} className="text-gray-700 dark:text-gray-200 " />,
        }}
        />
  
        {/* <div>
          <h3 className="text-gray-600 dark:text-gray-300">On this page</h3>
          <div>
            {article.headings.map(heading => {
              return (
                <div key={`#${h1.slug}`}>
                  <a
                    className="data-[level=two]:pl-2 data-[level=three]:pl-4"
                    data-level={heading.level}
                    href={heading.slug}
                  >
                    {heading.text}
                  </a>
                </div>
              )
            })}
          </div>
        </div> */}
        <div>
  <h3 className="text-gray-600 dark:text-yellow-400">On this page</h3>
  <div >
    {article.headings.map(heading => {
      let paddingLeftStyle = '';
      if (heading.level === 'two') paddingLeftStyle = 'pl-2';
      if (heading.level === 'three') paddingLeftStyle = 'pl-4';

      return (
        <div className="text-gray-600 dark:text-teal-600" key={`#${heading.slug}`}>
          <a
            className={paddingLeftStyle}
            href={`#${heading.slug}`}
          >
            {heading.text}
          </a>
        </div>
      );
    })}
  </div>
</div>



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