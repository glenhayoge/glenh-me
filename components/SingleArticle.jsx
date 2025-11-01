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
  headings,
  readingTime,
}) => {
  const [relatedArticles, setRelatedArticles] = useState([]); // Initialize state for related articles

  useEffect(() => {
    try {
      const articles = getRelatedArticles(category);
      setRelatedArticles(articles);
    } catch (error) {
      console.error('Error fetching related articles:', error);
    }
  }, [category]);

  return (
    <>
      <div className="w-full pt-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Article Content - Left Side */}
            <div className="w-full lg:w-3/4">
              <div className="prose prose-xl py-8 prose-md prose-teal lg:prose-md max-w-none">
                <h1 className="mt-2 block leading-10 text-4xl font-black tracking-tight sm:text-4xl dark:text-yellow-400 text-gray-900">
                  {title}
                </h1>
                <p className="lg:-mt-4 md:-mt-6 leading-tight italic text-gray-500 dark:text-gray-400">
                  {description}
                </p>
                
                <Image
                  className="rounded-t mt-12 lg:h-96 md:h-48 w-full object-cover object-center"
                  src={image}
                  width={860}
                  height={480}
                  alt="blog"
                />
                <div className="text-xs -mt-8 text-gray-600 italic font-medium text-right">{caption}</div>
                
                <article className="mx-auto text-gray-500 dark:text-gray-200 prose-md prose prose-teal lg:prose-md max-w-none mt-8">
                  {children}
                  <div className="flex p-0 items-center border-l border-l-gray-500 border-dotted mt-8">
                    <Image
                      src={author.image}
                      width={36}
                      height={36}
                      alt="GlenH Profile Photo"
                      className="w-20 h-20 mx-4 border border-gray-200 bg-gray-200 rounded-full"
                    />
                    <div className="items-center md:flex">
                      <p className="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
                        <span className="inline-flex items-center ml-2 text-sm font-light text-gray-600 md:ml-2 dark:text-gray-400">
                          <BsCodeSquare className='mr-3 text-green-500 dark:text-green-400 flex-shrink-0' />{author.name} - {publishedAt}
                        </span>
                        <span className="inline-flex items-center ml-2 text-sm font-light text-gray-600 md:ml-2 dark:text-gray-400">
                          <BsCodeSquare className='mr-3 text-green-500 dark:text-green-400 flex-shrink-0' />gghayoge at gmail.com
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Sidebar - Right Side (Hidden on mobile/tablet) */}
            <aside className="hidden lg:block w-full lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Article Details */}
                <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Article Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">Published</span>
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mt-1">{publishedAt}</p>
                    </div>
                    {readingTime && (
                      <div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">Reading Time</span>
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mt-1">{readingTime}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">Author</span>
                      <div className="flex items-center gap-3 mt-2">
                        <Image
                          src={author.image}
                          width={40}
                          height={40}
                          alt={author.name}
                          className="w-10 h-10 border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{author.name}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">gghayoge at gmail.com</p>
                        </div>
                      </div>
                    </div>
                    {category && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">Category</span>
                          <Link
                            href="/article/categories"
                            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline transition-colors"
                          >
                            View All
                          </Link>
                        </div>
                        <Link
                          href={`/article/category/${encodeURIComponent(category)}`}
                          className="inline-block text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
                        >
                          {category}
                        </Link>
                      </div>
                    )}
                    {tags && (
                      <div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">Tags</span>
                        <div className="mt-2">
                          <ArticleTags tags={tags} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Table of Contents */}
                {headings && headings.length > 0 && (
                  <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-800">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">In this Article</h3>
                    <nav className="space-y-1">
                      {headings.map((heading) => {
                        let paddingLeftStyle = '';
                        if (heading.level === 'two') paddingLeftStyle = 'pl-0';
                        if (heading.level === 'three') paddingLeftStyle = 'pl-4';

                        return (
                          <div key={`###${heading.slug}`} className={paddingLeftStyle}>
                            <Link
                              href={`#${heading.slug}`}
                              className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 py-1 transition-colors"
                            >
                              {heading.text}
                            </Link>
                          </div>
                        );
                      })}
                    </nav>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="prose prose-xl py-8 prose-md prose-teal lg:prose-md max-w-none">
          <h2 className="dark:text-gray-300 text-gray-500">Related Articles</h2>
          <ul>
            {relatedArticles.map((relatedArticle) => (
              <li key={relatedArticle.slug}>
                <Link href={`/article/${relatedArticle.slug}`}>
                  {relatedArticle.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
