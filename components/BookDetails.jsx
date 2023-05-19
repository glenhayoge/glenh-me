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
