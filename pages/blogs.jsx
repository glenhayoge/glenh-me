import { useTimeAgo } from "next-time-ago";
import Link from "next/link";
import Subscribe from "../components/Subscribe";
import { useEffect } from "react";
import ProfileBadge from "../components/ProfileBadge";
import { BsReverseLayoutTextSidebarReverse, BsBook } from "react-icons/bs";
export default function IndexPage() {
  useEffect(() => {}, []);
  return (
    <>
      <section className="py-24 ">
      <div className="container px-4 lg:px-10 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-4">
            <div className="w-full lg:w-8/12  lg:pl-20 md:px-8 ">
              <div className=" overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className=" mb-4 block text-left text-4xl font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    Blogs
                  </h1>
                </div>
                <div className="w-full h-full overflow-y-auto">
                  <p className=" py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Apart from books, I've listed out usefull blogs, websites & media sources that I've gotten most value from below.
                  </p>
               
                </div>
           
              
                <p className=" py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                Software Development - Python/JS
                </p>
                <div className="w-full h-full overflow-y-auto">
                  <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>   
                      <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                          href="https://testdriven.io/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                          TestDriven.io
                        </Link>{" "}
                      
                      </p>
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                       <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                        href="https://simpleisbetterthancomplex.com/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                           SimpleIsBetterThanComplex.com
                        </Link>
                      
                      </p>
                    </li>
                    
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                       <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                     href="https://www.joshwcomeau.com/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                           JoshWComeau.com
                        </Link>
                      
                      </p>
                      
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                        <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                   href="https://delba.dev/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                               Delba.dev
                        </Link>
                      
                      </p>
                    </li>
                  
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                               <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                href="https://www.freecodecamp.org/" 
                          target="_blank"
                          className="text-cyan-600 "
                        >
                               FreeCodeCamp.org
                        </Link>
                      
                      </p>
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                                            <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
         href="https://dev.to"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                              Dev.to
                        </Link>
                      
                      </p>
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                                            <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
         href="https://www.geeksforgeeks.org/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                             GeeksforGeeks.org
                        </Link>
                      
                      </p>
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                                            <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
         href=" https://realpython.com/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                             RealPython.com
                        </Link>
                      
                      </p>
                    </li>
                   
                  </ul>

                  <p className="py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Strategic Thinking
                  </p>
                  <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>   
                      <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                          href="https://www.strategyskills.com/blog/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                        StrategySkills.com
                        </Link>{" "}
                      
                      </p>
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                       <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                        href="https://www.focusedmomentum.com/blog/topic/strategic-thinking"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                          Focusedmomentum.com
                        </Link>
                      
                      </p>
                    </li>
                  </ul>
                  <p className="py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Business, Entrepreneurship 
                  </p>
                  <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>   
                      <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                          href="https://www.youngupstarts.com/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                          YoungUpstarts.com
                        </Link>{" "}
                      
                      </p>
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>

                       <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                        href="https://thetotalentrepreneurs.com/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                           TheTotalEntrepreneurs.com
                        </Link>
                      
                      </p>
                    </li>
                    
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                       <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                     href="https://socialtriggers.com/blog/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                       SocialTriggers.com
                        </Link>
                      
                      </p>
                      
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                        <BsReverseLayoutTextSidebarReverse className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p ><Link
                   href="https://thedankoe.com/"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                              TheDanKoe.com
                        </Link>
                      
                      </p>
                    </li>
                  


                   
                  </ul>
                  <p className="py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Also checkout related list of 
                  <Link href="https://www.glenh.me/books" target="_parent" className="text-cyan-600 "
                        > Books, </Link><Link href="https://www.glenh.me/courses" target="_parent" className="text-cyan-600 "
                        >
                          Courses
                        </Link> and  <Link href="https://www.glenh.me/videos" target="_parent" className="text-cyan-600 "
                        >
                          Videos </Link>sources I found useful in my learning journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12  lg:pr-20 md:px-8 ">
             <ProfileBadge/>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
