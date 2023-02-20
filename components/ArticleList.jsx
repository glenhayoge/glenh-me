import React from "react";
// import ViewCounter from "../components/ViewCounter";
import Link from "next/link";


export default function ArticleList({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
  tags
}) {
  return (
    <>
      <div className="px-6 pt-6 -mt-2 ">
        <div className="mb-2">
          <Link
            href={`/article/${slug}`}
            
          >
            <h3 className="mb-2 text-lg font-bold text-gray-600 leading-tight dark:text-yellow-400 hover:text-gray-500 dark:hover:text-gray-300" 
            style={{ textDecoration: "none" }}
            >
              {title}
            </h3>
          </Link>
        </div>
        <div className="flex justify-between ">
          <div class="flex ">
            <div
              className="flex items-center text-xs text-gray-500"
              href="#">
              <span className="mr-2">{dateTime}</span>
            </div>
            <div
              className="flex items-center text-xs text-gray-500"
              href="#">
              <span className="mr-2">{tags}</span>
            </div>
            <span className="text-gray-500">/</span>
            <div
              className="flex items-center text-xs text-gray-500"
              href="#"
            >
              {/* <span className="ml-2">
                <ViewCounter slug={slug} blogPage={true} />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

