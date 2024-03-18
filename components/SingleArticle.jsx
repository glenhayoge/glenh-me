import { useEffect, useState } from 'react'; // Import useEffect and useState
import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";
import { ArticleTags } from '../components/ArticleTags';
import { BsCodeSquare } from "react-icons/bs";
import { getRelatedArticles } from '../lib/articles'; // Import function to get related articles

export const SingleArticle = ({
  author,
  image,
  category,
  title,
  publishedAt,
  children,
  description,
  tags,
  caption,
  slug, // Add the slug of the current article
}) => {
  const [relatedArticles, setRelatedArticles] = useState([]); // Initialize state for related articles
  useEffect(() => {
    // Fetch related articles when the component mounts
    async function fetchRelatedArticles() {
      try {
        const articles = await getRelatedArticles(category, tags, slug);
        setRelatedArticles(articles); // Update state with related articles
      } catch (error) {
        console.error('Error fetching related articles:', error);
      }
    }

    fetchRelatedArticles(); // Call the function to fetch related articles
  }, [category, tags, slug]); // Call the effect whenever category, tags, or slug change

  return (
    <>
     <div className="w-full pt-10 lg:flex">
        <div className="w-full h-full overflow-y-auto">
          <div className="mx-auto prose prose-xl py-8 prose-md prose prose-teal lg:prose-md max-w-3xl px-4 mx-auto  xl:max-w-4xl  rounded-t">
            <h1 className="mt-2 block px-2 leading-10 text-4xl font-black tracking-tight sm:text-4xl  dark:text-yellow-400 text-gray-900 ">
              {title}
            </h1>
            <p className="px-2 lg:-mt-4 md:-mt-6 leading-tight italic text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <div className="flex justify-between mt-8 px-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="text-sm text-gray-500">{publishedAt}</span>
                {/* article tags */}
                <ArticleTags tags={tags} />
              </div>
            </div>
            <Image
              className="rounded-t mt-12 lg:h-96 md:h-48 w-full object-cover -mt-4 object-center "
              src={image}
              width={860}
              height={480}
              alt="blog"
            />
            <div className="text-xs -mt-8 text-gray-600 italic font-medium text-right ">{caption}</div>
            <article className="mx-auto text-gray-500 dark:text-gray-200 prose-md prose prose-teal lg:prose-md max-w-3xl px-4 mx-auto  xl:max-w-4xl ">
              {children}
              <div className="flex p-0 items-center  border-l border-l-gray-500 border-dotted mt-8">
                <Image
                  src={author.image}
                  width={36}
                  height={36}
                  alt="GlenH Profile Photo"
                  className="w-20 h-20  mx-4 border border-gray-200 bg-gray-200 rounded-full"
                />
                <div className="items-center md:flex">
                  <p className="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
                    <span className="inline-flex items-center ml-2 text-sm font-light text-gray-600 md:ml-2 dark:text-gray-400 ">
                      <BsCodeSquare className='mr-3 text-green-500 dark:text-green-400 flex-shrink-0' />{author.name} - {publishedAt}
                    </span>
                    <span className="inline-flex items-center ml-2 text-sm font-light text-gray-600 md:ml-2 dark:text-gray-400 ">
                      <BsCodeSquare className='mr-3 text-green-500 dark:text-green-400 flex-shrink-0' />gghayoge at gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* Your existing JSX */}
      <div className="mx-auto prose prose-xl py-8 prose-md prose prose-teal lg:prose-md max-w-3xl px-4 mx-auto  xl:max-w-4xl  rounded-t">
        <h2 className="dark:text-gray-300 text-gray-500">Related Articles</h2>
        <ul>
          {relatedArticles.map((relatedArticle) => (
            <li key={relatedArticle.slug}>
              <Link href={`/articles/${relatedArticle.slug}`}>
                <a>{relatedArticle.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
