import React from "react";
import Image from "next/image";
import Link from "next/link";



export default function BookList({
  title,
  description,
  slug,
  image,
  category,
  author,
  dateTime,
  readingTime,
}) {
  return (
    <>
      {/* <div className="px-4 pt-6 -mt-2 ">


        <div className="flex flex-col md:flex-row md:max-w-xl bg-gray-200/25 rounded-lg dark:bg-gray-800/25 ">
          <Image
            className="w-full h-36 md:h-auto object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={image}
            width={120}
            height={50}
            alt="blog"
          />
          <div className="p-6 flex flex-col justify-start">
            <a href={`/book/${slug}`}>
              <h5 class="text-gray-900 dark:text-yellow-400 text-xl font-medium mb-2">{title}</h5>
            </a>
            <p className="text-gray-600 dark:text-gray-400  text-xs mb-4">By {author} / {category}</p>
            <p className="text-cyan-700 text-sm mb-4">
             {description}
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div> */}

      <div className="p-10 border-b  border-gray-400 dark:border-gray-600 border-dashed">
                     <div className=" mb-4 flex flex-col justify-start">
            <a href={`/book/${slug}`}>
            <h3 className="mb-2 text-2xl font-bold text-gray-600 dark:text-yellow-400">{title}</h3>
            </a>
            <p className="text-gray-600 dark:text-gray-400  text-xs mb-4">By {author} / {category}</p>
            <p className="text-cyan-700 text-l mb-4">
             {description}
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
                    
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="inline-flex items-center justify-center text-sm font-medium text-gray-500 dark:text-yellow-400">
                        {/* {dateTime} */} <a
                      href={`/book/${slug}`}
                      className=' rounded-full p-1 text-gray-500 dark:text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0'
                    >
                      Review/Notes
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                    

                        </div>
                      </div>
                      <div class="flex">
                       
                        <a
                          className="flex items-center text-xs text-gray-500"
                          href="#"
                        >
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-eye"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                          <span className="ml-2">
                          Star 3/5
                          </span>
                        </a>
                      </div>
                    
                    </div>
                  </div>
    </>
  );
}

