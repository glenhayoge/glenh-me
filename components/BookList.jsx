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
      <div className="px-6 pt-6 -mt-2 ">


        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-lg">
          <Image
            className="w-full h-36 md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={image}
            width={120}
            height={50}
            alt="blog"
          />
          {/* <img class=" " 
    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" /> */}
          <div class="p-6 flex flex-col justify-start">
            <a href={`/book/${slug}`}>
              <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            </a>
            <p class="text-gray-600 text-xs mb-4">By {author} / {category}</p>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>

      {/* <div class="flex justify-center"> */}

      {/* </div> */}
    </>
  );
}

