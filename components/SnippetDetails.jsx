
import Link from "next/link";


export const SnippetDetails = ({
  category,
  title,
  children,
  description,
}) => {
  return (
    <>
      {/* additional layout */}
      <div className="w-full pt-10 lg:flex">
        <div className="w-full h-full overflow-y-auto">
          <div className="mx-auto prose prose-md py-8 max-w-3xl  xl:max-w-4xl rounded-t">
            <div className="flex pl-2">
        <p className="inline-block  text-center text-base uppercase text-sm tracking-wide text-gray-500 dark:text-gray-400">
              <span>{category}</span>
            </p>
      </div>
            <h1 className="mt-2 block text-left px-2 leading-10 text-4xl font-black tracking-tight sm:text-4xl  dark:text-yellow-400 text-gray-900 ">
              {title}
            </h1>
            <p className="px-4 lg:-mt-4 md:-mt-6 leading-tight italic text-gray-500 dark:text-gray-400">
   
               {description}
            </p>

            <article className="mx-auto text-gray-500 dark:text-gray-200 prose-md prose prose-indigo lg:prose-md max-w-3xl px-4 mx-auto  xl:max-w-5xl ">
              {children}
            </article>
          </div>
        </div>
        
      </div>
    </>
  );
};
