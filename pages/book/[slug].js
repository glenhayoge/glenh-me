import { allBooks } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { BookDetails } from '../../components/BookDetails';
import SampleComponent from '../../components/SampleComponent';
import { useMDXComponent } from 'next-contentlayer/hooks';


// const usedcomponents = {
//     SampleComponent,
//   };


const SingleBook = ({ book }) => {

  //   console.log(article);

  const MDXContent = useMDXComponent(book.body.code);

  return (
    <>
      <NextSeo title={book.title} description={book.description} />

      <BookDetails
        image={book.image}
        title={book.title}
        description={book.description}
        category={book.category}
        date={book.publishedAt}
        author={book.author}
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
  
        {/* <div>
          <h3>On this page</h3>
          <div>
            {book.headings.map(heading => {
              return (
                <div key={`#${heading.slug}`}>
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


      </BookDetails>
    

    </>
  );
};

export default SingleBook;

export async function getStaticPaths() {
  return {
    paths: allBooks.map((book) => ({
      params: { slug: book.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const book = allBooks.find((book) => book.slug === params.slug);

  return { props: { book } };
}