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
      <div className="w-full pt-10 lg:flex">
        <div className="w-full h-full overflow-y-auto">
          <div className="mx-auto prose prose-xl py-8 max-w-3xl  xl:max-w-4xl rounded-t">
            <article className="text-gray-500 dark:text-gray-200 prose-md prose prose-indigo lg:prose-md max-w-3xl   xl:max-w-4xl ">
            <div className="flex justify-between px-4">
        <p className="inline-block  text-base uppercase text-sm tracking-wide text-gray-500 dark:text-gray-400">
              <span>{category}</span>
            </p>
        <button className="focus:outline-none mt-4 flex text-sm ">
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
            <h1 className="mt-12 block px-2 leading-10 text-4xl font-black tracking-tight sm:text-4xl  dark:text-yellow-400 text-gray-900 ">
              {title}
            </h1>
            <Image
              className="rounded-t h-48 md:h-48 w-48 mt-4 object-center px-2"
              src={image}
              width={400}
              height={720}
              alt="book"
            />
            <p className="inline-block  text-center text-base uppercase text-sm tracking-wide text-gray-500 dark:text-gray-400">
              <span>{category}</span>
            </p>
              {children}
            </article>
          </div>
        </div> 
      </div>
    </>
  );
};
