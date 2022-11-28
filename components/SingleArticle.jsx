import Image from "next/image";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export const SingleArticle = ({
  author,
  image,
  category,
  title,
  publishedAt,
  readingTime,
  children,
}) => {
  return (
    <div className=" ">
      {/* additional layout */}
      <div class="pt-10 lg:flex">
        <div className="w-full h-full overflow-y-auto">
          <div className="flex items-center justify-center ">
            <div className="mx-auto prose prose-xl px-4 md:px-8 py-8 max-w-3xl sm:px-6 xl:max-w-5xl xl:px-4  rounded-t">
              <p className="block text-center text-base uppercase text-sm tracking-wide text-gray-600 dark:text-gray-200">
                {category}
              </p>
              <h1 className="mt-2 block text-center text-4xl font-black leading-8 tracking-tight dark:text-yellow-400 text-gray-900 sm:text-5xl ">
                {title}
              </h1>
              <p className="px-4 block text-center  text- tracking-normal italic text-gray-500 dark:text-gray-200">
                This is a dummy text for inserting a short description of the article
              </p>
              <div class="flex justify-between -mt-8 px-8">
                <div class="flex items-center">
                  <Image
                    src={author.image}
                    width={50}
                    height={50}
                    alt="blog"
                    className="w-16 h-16 p-1 mr-4 rounded-full border border-indigo-50"
                  />
                  <div>
                    <div class="flex -mb-3 ">
                      <strong className="text-gray-500 text-base font- dark:text-gray-500 text-center">
                        {author.name}
                      </strong>
                    </div>
                    <div>
                      <span class="text-sm text-gray-500">
                        {publishedAt} <b>&#8226;</b> 2 min read
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                 
                  <span className="p-1">
                    <LinkedinShareButton url={"https://github.com/next-share"}>
                      <LinkedinIcon size={24} round />
                    </LinkedinShareButton>
                  </span>
                  <span className="p-1">
                    <FacebookShareButton
                      url={"https://github.com/next-share"}
                      quote={
                        "next-share is a social share buttons for your next React apps."
                      }
                      hashtag={"#nextshare"}
                    >
                      <FacebookIcon size={24} round />
                    </FacebookShareButton>
                  </span>
                  <span className="p-1">
                    <TwitterShareButton
                      url={"https://github.com/next-share"}
                      title={
                        "next-share is a social share buttons for your next React apps."
                      }
                    >
                      <TwitterIcon size={24} round />
                    </TwitterShareButton>
                  </span>
                  <span className="p-1">
                    <WhatsappShareButton
                      url={"https://github.com/next-share"}
                      title={
                        "next-share is a social share buttons for your next React apps."
                      }
                      separator=":: "
                    >
                      <WhatsappIcon size={24} round />
                    </WhatsappShareButton>
                  </span>
                </div>
              </div>
              <Image
                className="rounded-t lg:h-96 md:h-48 w-full object-cover -mt-4 object-center px-8"
                src={image}
                width={720}
                height={400}
                alt="blog"
              />
              {/* <hr /> */}
              {/* <br /> */}

              <article className="mx-auto text-gray-500 dark:text-gray-200 prose-md prose prose-indigo  lg:prose-lg max-w-3xl px-12 mx-auto sm:px-6 xl:max-w-5xl xl:px-8">
                {children}
              </article>
            </div>
          </div>
          
        </div>
        {/* aside bar */}
        <div class="flex flex-col w-full -ml-12 pr-8 pt-48 overflow-y-auto lg:h-screen lg:w-1/6">
          <div class="flex flex-col justify-between mt-6 ">
            <aside>
            
             
              <div class="w-full text-center items-center flex-justify-center p-4">
                    <div class="p-6 rounded text-gray-200 bg-gray-500 hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-gray-600 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
                      <span class="text-xs ">
                        <span class="mr-2">
                        <svg
                    className="mr-2 items-center "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
               
                        </span>
                      </span>
                      <h2 class="mb-2 text-center text-m  tracking-normal ">
                      100 views
                      </h2>
                    </div>
                  </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
