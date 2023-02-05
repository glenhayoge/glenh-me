import React from "react";
import ViewCounter from "../components/ViewCounter";


export default function ArticleList({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
}) {
  return (
    <>
        <div className="px-6 pt-6 -mt-2 ">
                 <div className="mb-2">
                      <a href={`/article/${slug}`}>
                        <h3 className="mb-2 text-lg font-bold text-gray-600 leading-tight dark:text-yellow-400 hover:text-gray-500 dark:hover:text-gray-300">
                          {title}
                        </h3>
                      </a>
                    </div>
                    <div className="flex justify-between ">
                      <div class="flex ">
                        <div
                          className="flex items-center text-xs text-gray-500"
                          href="#">
                          <span className="mr-2">{dateTime}</span>
                        </div>
                        <span className="text-gray-500">/</span>
                        <div
                          className="flex items-center text-xs text-gray-500"
                          href="#"
                        >
                          <span className="ml-2">
                          <ViewCounter slug={slug} blogPage={true}/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
    </>
  );
}

