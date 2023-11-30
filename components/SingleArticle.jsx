import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";

import { BsCodeSquare, BsBook } from "react-icons/bs";
export const SingleArticle = ({
  author,
  image,
  category,
  title,
  publishedAt,
  children,
  description,
}) => {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"

          content={description}

        />
        <meta
          property="og:image"
          content={image}
        />
      </Head>
      <div className="w-full pt-10 lg:flex">
        <div className="w-full h-full overflow-y-auto">
          <div className="mx-auto prose prose-xl py-8 prose-md prose prose-teal lg:prose-md max-w-3xl px-4 mx-auto  xl:max-w-4xl  rounded-t">
            <div className="flex justify-between items-center px-16"></div>
            <h1 className="mt-2 block px-2 leading-10 text-4xl font-black tracking-tight sm:text-4xl  dark:text-yellow-400 text-gray-900 ">
              {title}
            </h1>
            <p className="px-2 lg:-mt-4 md:-mt-6 leading-tight italic text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <div className="flex justify-between mt-8 px-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="text-sm text-gray-500">{publishedAt}</span>
              </div>
            </div>
            <Image
              className="rounded-t mt-12 lg:h-96 md:h-48 w-full object-cover -mt-4 object-center "
              src={image}
              width={860}
              height={480}
              alt="blog"
            />
            <article className="mx-auto text-gray-500 dark:text-gray-200 prose-md prose prose-teal lg:prose-md max-w-3xl px-4 mx-auto  xl:max-w-4xl ">
              {children}
              <div className="flex p-0 items-center rounded-xl  mt-4">
                <Image
                  src={author.image}
                  width={36}
                  height={36}
                  alt="GlenH Profile Photo"
                  className="w-20 h-20  mx-4 border border-gray-200 bg-gray-200 rounded-full"
                />

                <div class="items-center md:flex">
                  <p class="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
                    {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline">By:</span> */}
                    <span href="" className="inline-flex items-center ml-2 text-sm font-light text-gray-600 md:ml-2 dark:text-gray-400 ">
                      <BsCodeSquare className='mr-3 text-green-500 dark:text-green-400 flex-shrink-0' />{author.name} - {publishedAt}
                    </span>
                    <span href="" className="inline-flex items-center ml-2 text-sm font-light text-gray-600 md:ml-2 dark:text-gray-400 ">
                      <BsCodeSquare className='mr-3 text-green-500 dark:text-green-400 flex-shrink-0' />gghayoge at gmail.com
                      {/* <svg class="w-3 h-3 ml-1.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg> */}
                    </span>
                  </p>
                </div>


              </div>


            </article>
          </div>
        </div>
      </div>
    </>
  );
};
