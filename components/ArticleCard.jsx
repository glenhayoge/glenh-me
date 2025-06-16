import React from "react";
import Link from 'next/link'
export default function ArticleCard({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
  // tags,
}) {
  return (
    <>
      <div className="p-4 ">
        <div className="flex justify-between items-center mb-4 ">
          <span className="inline-block uppercase py-1 px-1 text-primary text-xs rounded-full">
            {category}
          </span>
           <Link
            className="flex  items-center text-xs text-gray-800 inline-block py-1 px-2 bg-gray-100 dark:text-gray-500  dark:bg-gray-900 rounded-full dark:text-yellow-400"
            href="#"
          >
            <span className="mr-2">{dateTime}</span>
          </Link>
        </div>
        <div className="mb-4">
           <Link href={`/article/${slug}`}>
            <h3 className="mb-2 text-2xl font-bold hover:text-cyan-700 dark:hover:text-cyan-700">
              {title}
            </h3>
          </Link>
          <p className="text-l ">
            {description}
          </p>
        </div>
        <div className="flex justify-between border-b  border-gray-400 dark:border-gray-600 border-dashed ">
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center text-sm font-medium">
               <Link
                href={`/article/${slug}`}
                className=" rounded-full p-1 inline-flex items-center md:mb-2 lg:mb-0"
              >
                More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex py-6">
             <Link className="flex items-center text-xs text-secondary" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-book mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              <span className="mr-2">{readingTime}</span>
            </Link>
             <Link className="flex items-center text-xs text-gray-500" href="#">
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
