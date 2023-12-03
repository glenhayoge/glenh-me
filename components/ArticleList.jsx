import React from "react";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { ArticleTags } from '../components/ArticleTags'

export default function ArticleList({ title, slug, dateTime, tags, category }) {
  const page_title = 'Articles - Glen G Hayoge'
  const description =
    'Articles, guides, rants, musings, tutorials on software data analysis and lots more.'
  const canonical = 'https://glenh.me/articles'
  return (
    <>
     <NextSeo
        page_title={page_title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          page_title,
          description,
        }}
      />
      <div className="px-6 pt-4 -mt-2 ">
        <div className="my-3">
          <Link href={`/article/${slug}`}>
            <h3
              className="mb-2 text-lg font-bold text-gray-600 leading-tight dark:text-yellow-400 hover:text-gray-500 dark:hover:text-gray-300"
              style={{ textDecoration: "none" }}
            >
              {title}
            </h3>
          </Link>
        </div>
        <div className="flex justify-between py-2">
          <div className="flex ">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-200" >
              <span className="mr-1 ">{dateTime}</span>/
            </div>
            {/* <span >{tags}</span> */}
            <ArticleTags tags={tags} />
            {/* <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t2}</span>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t3}</span>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t4}</span>
            <span className="text-[9px] ml-1 text-gray-500 border border-gray-600 rounded-lg px-[4px]">{tags.t5}</span> */}
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
