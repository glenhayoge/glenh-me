import React from "react";
import Link from "next/link";

export default function ArticleList({ title, slug, dateTime, tags, category }) {
  return (
    <>
      <div className="px-6 pt-6 -mt-2 ">
        <div className="mb-2">
          <Link href={`/article/${slug}`}>
            <h3
              className="mb-2 text-lg font-bold text-gray-600 leading-tight dark:text-yellow-400 hover:text-gray-500 dark:hover:text-gray-300"
              style={{ textDecoration: "none" }}
            >
              {title}
            </h3>
          </Link>
        </div>
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="flex items-center text-xs text-gray-500" href="#">
              <span className="mr-1">{dateTime}</span>/
            </div>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t1}</span>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t2}</span>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t3}</span>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t4}</span>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t5}</span>
            <div
              className="flex items-center text-xs text-gray-500"
              href="#"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
