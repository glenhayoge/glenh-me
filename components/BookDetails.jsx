import Image from "next/image";
import Link from "next/link";
// import ViewCounter from "./ViewCounter";

export const BookDetails = ({

  image,
  category,
  title,
  children,
  description,
}) => {
  return (
    <>
      {/* additional layout */}
      <div class="w-full pt-10 lg:flex">
        <div className="w-full h-full overflow-y-auto">
          {/* <div className="flex items-center justify-center "> */}
          <div className="mx-auto prose prose-xl py-8 max-w-3xl  xl:max-w-5xl rounded-t">
        
            <div class="flex justify-between items-center px-16">
        {/* <span class="inline-block py-1 px-2 bg-blue-50 text-xs text-blue-500 rounded-full">Development</span> */}
        <p className="inline-block  text-center text-base uppercase text-sm tracking-wide text-gray-500 dark:text-gray-400">
              <span>{category}</span>
            </p>
        <button className="focus:outline-none flex justify-center text-sm ">
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg> 
                <Link
                href="/books"
                className="text-gray-500 dark:text-gray-400"
                style={{ textDecoration: "none" }}
            
              >{" "}
                BACK
              </Link>
        </button>
      </div>
            <h1 className="mt-2 block text-center px-2 leading-10 text-4xl font-black tracking-tight sm:text-4xl  dark:text-yellow-400 text-gray-900 ">
              {title}
            </h1>
            <p className="px-4 text-center lg:-mt-4 md:-mt-6 leading-tight italic text-gray-500 dark:text-gray-400">
              {/* This is a dummy text for inserting a short description of the
              article */}
               {description}
            </p>
        
            <Image
              className="rounded-t lg:h-96 md:h-48 w-full object-cover -mt-4 object-center px-4"
              src={image}
              width={720}
              height={400}
              alt="book"
            />
            {/* <hr /> */}
            {/* <br /> */}
            <article className="mx-auto text-gray-500 dark:text-gray-200 prose-md prose prose-indigo lg:prose-lg max-w-3xl px-4 mx-auto  xl:max-w-5xl ">
              {children}
            </article>
          </div>
        </div>
        
      </div>
    </>
  );
};
