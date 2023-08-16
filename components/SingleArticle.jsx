import Image from "next/image";
import Head from 'next/head';
export const SingleArticle = ({
  author,
  image,
  category,
  title,
  publishedAt,
  children,
  description,
}) => {
  return (
    <>
     <Head>
        <title>
        {title}
        </title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta
         property="og:description"
     
          content={description}
        
        />
        <meta
          property="og:image"
          content={image}
        />
      </Head>
      <div className="w-full pt-10 lg:flex">
        <div className="w-full h-full overflow-y-auto">
          <div className="mx-auto prose prose-xl py-8 max-w-3xl  xl:max-w-5xl rounded-t">
            <div className="flex justify-between items-center px-16"></div>
            <h1 className="mt-2 block px-2 leading-10 text-4xl font-black tracking-tight sm:text-4xl  dark:text-yellow-400 text-gray-900 ">
              {title}
            </h1>
            <p className="px-2 lg:-mt-4 md:-mt-6 leading-tight italic text-gray-500 dark:text-gray-400">
              {description} 
            </p>
            <div className="flex justify-between mt-8 px-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="text-sm text-gray-500">{publishedAt}</span>
              </div>
            </div>
            <Image
              className="rounded-t mt-12 lg:h-96 md:h-48 w-full object-cover -mt-4 object-center "
              src={image}
              width={860}
              height={480}
              alt="blog"
            />
            <article className="mx-auto text-gray-500 dark:text-gray-200 prose-md prose prose-indigo lg:prose-md max-w-4xl px-4 mx-auto  xl:max-w-5xl ">
              {children}
              <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-lg px-8 mt-8">
                <Image
                  src={author.image}
                  width={36}
                  height={36}
                  alt="blog"
                  className="w-16 h-16 p-1 mr-4 rounded-full border border-gray-600"
                />
                <div>
                  <div className="flex -mb-2 ">
                    <strong className="text-gray-500 text-base font- dark:text-gray-500 text-center">
                     By: {author.name}, {publishedAt}
                    </strong>
                  </div>
                
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
