import React from "react";
import Image from "next/image";
import Link from "next/link";



export default function BookList({
  title,
  description,
  slug,
  category,
  author,

}) {
  return (
    <>

      <div className="p-4 ">
        <div className=" mb-4 flex flex-col justify-start">
          <a href={`/book/${slug}`}>
            <h3 className="mb-2 text-2xl font-bold text-gray-600 dark:text-yellow-400
            hover:text-teal-600 dark:hover:text-cyan-600
            ">{title}</h3>
          </a>
          <p className="text-gray-600  text-xs mb-4">By {author} / {category}</p>
          <p className="text-gray-600 text-l mb-4 leading-7 dark:text-gray-400">
            {description}
          </p>
          {/* <p className="text-gray-600  text-xs">Last updated 3 mins ago</p> */}
        </div>

        <div className="flex justify-between border-b  border-gray-400 dark:border-gray-600 border-dashed">
          <div className="flex items-center mb-6">
            <button >
              {/* {dateTime} */} <a
                href={`/book/${slug}`} type="button"
                className=' font-bold pt-2 hover:text-teal-600 dark:hover:text-cyan-600 rounded-full text-gray-500 dark:text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0'
              >
                Notes
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
          <div class="flex">

            <a
              className="flex items-center text-xs text-gray-500"
              href="#"
            >
              <svg className='w-4 h-4 mr-2 'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

              <span className="ml-2">
                star 3/5
              </span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

