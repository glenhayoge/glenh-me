

import { useTimeAgo } from "next-time-ago";
import Subscribe from "../components/Subscribe";
import { useEffect } from "react";
import ProfileBadge from "../components/ProfileBadge";
export default function IndexPage() {
  useEffect(() => {}, []);
  return (
    <>
      <section className="py-24 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto ">
          <div className="flex flex-wrap items-stretch ">
            <div className="w-full lg:w-8/12 lg:pr-8 -mt-4">
              <div className=" rounded-lg overflow-hidden ">
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className=" mb-4 block text-left text-4xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    Blogs
                  </h1>
                </div>
                <div className="w-full h-full overflow-y-auto">
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Apart from books, I've listed out usefull blogs, websites & media sources that I've gotten most value from below.
                  </p>
               
                </div>
           
              
                <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Blogs on Software Development - Python JS
                </p>
                <div className="w-full h-full overflow-y-auto">
                  <ul className="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>   
                      TestDriven.io
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                      SimpleisBetterthancomplex
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                   joshwcomeau.com
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                   https://delba.dev/
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                   freecodecamp.org
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                   https://dev.to
                    </li>
                  </ul>

                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Blogs on Software Development - Strategic Thinking
                  </p>
                  <ul className="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-book-open mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'></i>
               
                  
                      Deep Work by Cal Newport
                    </li>
                    <li className="flex items-center">
                      <i className='bx bx-book-open mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'></i>
                      A Mind for Numbers by Barbara Oakley
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx-book-open mr-1.5 text-green-500 dark:text-green-400 flex-shrink-02'></i>
                    Systems Thinking: Managing Chaos and Complexity by Jamshid Gharajedaghi
                    </li>
                  </ul>
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Blogs on Software Development - Business, Entreprenuship
                  </p>
                  <ul className="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-play-circle mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                      Wantoea: Small biz management FOSS
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx-play-circle mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                      ChicknUp: Poultry marketplace app
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx-play-circle mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                      Marketini: Farmers & Artisans-marketplace app
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx-play-circle mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                      Lidabase: Leaders performance leatherboard
                    </li>
                  </ul>
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Also checkout related list of Books, Courses and Videos sources I found useful in my learning journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 p-4 ">
             <ProfileBadge/>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
