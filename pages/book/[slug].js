import { allBooks } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { BookDetails } from '../../components/BookDetails';
// import SampleComponent from '../../components/SampleComponent';
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
    
          p: props => <p {...props} className="text-gray-600 dark:text-gray-400 " />,
          h1: props => <h1 {...props} className="text-gray-700 dark:text-yellow-400 " />,
          h2: props => <h2 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h3: props => <h3 {...props} className="text-gray-700 dark:text-gray-200 " />,
          h4: props => <h4 {...props} className="text-gray-700 dark:text-gray-200 " />,
        
        }}


        />
  
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