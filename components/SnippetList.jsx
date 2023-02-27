import React from "react";

import Link from "next/link";


export default function SnippetList({
  title,
  description,
  slug,
  category,
  date,
}) {
  return (
    <>

      <div className="p-4 ">
        <div className=" mb-4 flex flex-col justify-start">
          <Link href={`/snippets/${slug}`} 
          >
          <h3 className="mb-2 text-2xl font-bold text-gray-600 dark:text-yellow-400
            hover:text-teal-600 dark:hover:text-cyan-600
            "  style={{ textDecoration: "none" }}>{title}</h3>
          </Link>
          <p className="text-gray-600  text-xs mb-4">{category}</p>
          <p className="text-gray-600 text-l mb-4 leading-7 dark:text-gray-400">
            {description}
          </p>
          {/* <p className="text-gray-600  text-xs">Last updated 3 mins ago</p> */}
        </div>

        <div className="flex justify-between border-b  border-gray-400 dark:border-gray-600 border-dashed">
          <div className="flex items-center mb-6">
            <button >
              {/* {dateTime} */} <a
                href={`/snippets/${slug}`} type="button"
                className='pt-2 hover:text-teal-600 dark:hover:text-cyan-600 rounded-full text-gray-500 dark:text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0'
              >
               View Snippet
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


            </button>
          </div>
          <div className="flex">

            <a
              className="flex items-center text-xs text-gray-500"
              href="#"
            >
              <svg
                className="mr-2 bi bi-eye"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <span className="ml-2">
                {date}
              </span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

