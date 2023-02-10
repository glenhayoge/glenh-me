import Head from 'next/head';
import Link from 'next/link';
import { allArticles } from 'contentlayer/generated';
import { useRouter } from 'next/router';
import { getBlogsByTag } from '../../../lib/blogs';

const BlogsByTag = ({ article, tag }) => {
  return (
    <div>
      <Head>
        <title>Blogs by tag: {tag}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Blogs by tag: {tag}</h1>
      <ul>
        {article.map(article => (
          <li key={article.slug}>
            <Link href="/blogs/[slug]" as={`/blogs/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const blogs = getBlogsByTag(params.tag);
  return {
    props: {
      blogs,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { tag: 'test' } }],
    fallback: false,
  };
}

export default BlogsByTag;

// import type { GetStaticProps, GetStaticPaths } from "next";
// import Head from "next/head";
// import { getAllPosts, PostMeta } from "@/src/api";
// import { allArticles } from 'contentlayer/generated';
// import Articles from "@/src/components/articles";

// export default function TagPage({
//   slug,
//   posts,
// }: {
//   slug: string;
//   articles: PostMeta[];
// }) {
//   return (
//     <>
//       <Head>
//         <title>Tag: {slug}</title>
//       </Head>
//       <h1>Tag: {slug}</h1>
//       <Articles articles={articles} />
//     </>
//   );
// }

// export const getStaticProps: getStaticProps = async ({ params }) => {
//   const { slug } = params
//   const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

//   return {
//     props: {
//       slug,
//       posts: posts.map((post) => post.meta),
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = getAllPosts();
//   const tags = new Set(posts.map((post) => post.meta.tags).flat());
//   const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export default SingleBook;

// export async function getStaticPaths() {
//   return {
//     paths: allBooks.map((book) => ({
//       params: { slug: book.slug },
//     })),
 
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const book = allBooks.find((book) => book.slug === params.slug);

//   return { props: { book } };
// }
