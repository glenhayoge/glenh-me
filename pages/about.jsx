import Link from "next/link";
import Image from "next/image";
import { useTimeAgo } from "next-time-ago";
import Subscribe from "../components/Subscribe";
// import 'boxicons'

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

import { useEffect } from "react";
import propic from "../assets/profile2.png";

export default function IndexPage() {
  const { TimeAgo } = useTimeAgo();
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
                    About Me
                  </h1>
                </div>
                <div className="w-full h-full overflow-y-auto">
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    I am Glen, a software developer from Papua New Guinea. I use
                    this space on the internet to create and share contents on
                    software projects, articles, tutorials, guides, issues,
                    musings, and lots more. I love building things and have a
                    long list of abandoned side projects and some stale piles of
                    code that I hope to keep adding to.
                  </p>
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    The <Link href="/projects"><strong className="text-cyan-600">projects page</strong></Link> has highlights of my work. Read tutorials
                    and other stuffs on the <Link href="/articles"><strong className="text-cyan-600">blog page</strong></Link> .
                  </p>
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    My site has no ads, no affiliate links, no tracking or
                    analytics, no sponsored posts, and no paywall. My only
                    motivation for this site is to share what I've learned with
                    the world.
                  </p>
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    This is a pint of my contribution to making the internet
                    a better place for everyone and I hope others will be
                    inspired to be creative out there
                    as well.
                  </p>
                  <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    Say hi to me by sending an email to <strong className="text-cyan-600">gghayoge at gmail.com </strong> if
                    you like what I am doing.
                  </p>
                </div>
                {/* what im doing */}
                <div className="flex py-8 justify-left text-left items-center   ">
                  <h2 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl ">
                    What I'm doing now
                  </h2>
                </div>
                <p className="px-4 py-6 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Projects I am currently working on.
                </p>
                <div className="w-full h-full overflow-y-auto">
                  <ul className="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                      Wantoea: Small biz management FOSS
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                  
                      ChicknUp: Poultry advisory &amp; marketplace app
                    </li>
                    <li class="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                  
                      Marketini: Farmers &amp; Artisans marketplace app
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                  
                      Lidabase: Leaders performance leatherboard
                    </li>
                    <li className="flex items-center">
                   <i className='bx bx-code-alt mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                  
                      RaitStart: PNGSME Digital Resources Toolkit
                    </li>
                  </ul>

                  <p className="px-4 py-6 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    What I am Reading:
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
                  <p className="px-4 py-6 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    What I am watching:
                  </p>
                  <ul class="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx-play-circle mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
                      Not seriously watching at the moment
                    </li>
                  </ul>
                </div>
                 {/* my dev tools */}
                 <div className="flex my-12 justify-left text-left items-center  ">
                  <h5 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl">
                    My Dev Tools
                  </h5>
                </div>
                <p className="px-4 py-6 text-base text-left leading-normal text-gray-500 dark:text-gray-400">
                  Software
                </p>
                <ul className="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx bx-cog mr-1.5 text-green-500 dark:text-green-400 flex-shrink-05'></i>
                      This site - React/NextJS - is hosted on <Link href="https://vercel.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">Vercel</strong></Link>.
                    </li>
                    
                    <li className="flex items-center">
                      <i className='bx bx-cog mr-1.5 text-green-500 dark:text-green-400 flex-shrink-02'></i>
                     Coding: <Link href="https://code.visualstudio.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">Visual Studio Code</strong></Link>
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx bx-cog  mr-1.5 text-green-500 dark:text-green-400 flex-shrink-02'></i>
                      Terminal: <Link href="https://iterm2.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">iTerm2</strong></Link>
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx bx-cog  mr-1.5 text-green-500 dark:text-green-400 flex-shrink-02'></i>
                      Notes: <Link href="https://keep.google.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">Google Keep</strong></Link>&nbsp;&amp;<Link href="https://obsidian.md/" target='_blank'> &nbsp;<strong className="text-cyan-600">Obsidian</strong></Link>
                    </li>
                
                  </ul>
                  <p className="px-4 py-6 text-base text-left leading-normal text-gray-500 dark:text-gray-400">
                 Hardware
                </p>
                <ul className="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                    <i className='bx bx bx-cog mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'></i>
                      Coding Computer: Apple Macbook Pro 13" 2016
                    </li>
                    <li className="flex items-center">
                      <i className='bx bx-cog mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'></i>
                      Headphone: Logitec
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx bx-cog  mr-1.5 text-green-500 dark:text-green-400 flex-shrink-02'></i>
                    Desktop: Apple iMac / Dell AIO
                    </li>
                
                  </ul>
                {/* what im reading */}
                <div className="flex my-12 justify-left text-left items-center">
                  <h2 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl">
                    Reach out to me 
                  </h2>
                  
         
                </div>
                <p className="px-4 pb-8 text-base text-left leading-normal text-gray-500 dark:text-gray-400">
                  Channels you can use to reach out to me
                </p>
                <div className="w-full h-full overflow-y-auto">
                <ul className="space-y-1 max-w-md px-8 list-inside text-gray-500 dark:text-gray-400">
                    <li className=" flex items-center">
                    <i className='bx bxl-github text-cyan-600 text-xl mr-1.5' ></i>
                    <Link href="https://github.com/glenhayoge" target='_blank'> &nbsp;<strong className="text-cyan-600">Github</strong></Link>
                    </li>
                    <li className="flex items-center">
                    <i className='bx bxl-twitter text-cyan-600 text-xl mr-1.5' ></i>
                    <Link href="https://twitter.com/ghayoge" target='_blank'> &nbsp;<strong className="text-cyan-600">Twitter</strong></Link>
                    </li>
                    <li className="flex items-center">
                    <i class='text-cyan-600 text-xl mr-1.5 bx bxl-linkedin-square' ></i>
                    <Link href="https://www.linkedin.com/in/glen-g-hayoge-089935104/" target='_blank'> &nbsp;<strong className="text-cyan-600">LinkedIn</strong></Link>
                    </li>
                    <li className="flex items-center">
                    <i className='text-cyan-600 text-xl mr-1.5 bx bxl-stack-overflow' ></i>
                    <Link href="https://stackoverflow.com/users/12071488/glenh" target='_blank'> &nbsp;<strong className="text-cyan-600">StackOverFlow</strong></Link>
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx-globe text-cyan-600 text-xl mr-1.5' ></i>
                     Website: <Link href="https://glenh.me" > &nbsp;<strong className="text-cyan-600">You are looking at it!</strong></Link>
                    </li>
                    <li className="flex items-center">
                    <i className='bx bx-envelope text-cyan-600 text-xl mr-1.5' ></i>
                     Email: &nbsp;<strong className="text-cyan-600">gghayoge at gmail.com</strong>
                    </li>
      
                  </ul>
                </div>

               
               
              </div>
            </div>
            <div class="w-full lg:w-4/12 p-4 ">
              <div class="p-0 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden   shadow-md rounded-lg dark:bg-gray-800/25">
                <div class="relative pt-10 pb-20 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                  <div class="flex justify-center  px-4">
                    <div class="flex items-center">
                      <Image
                        placeholder="blur"
                        src={propic}
                        width={100}
                        height={100}
                        alt="blog"
                        className="w-48 h-54 p-1 justify-center "
                      />
                    </div>
                  </div>
                  <div class="px-6 text-center pt-8">
                    <h5 className="signature text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      GlenGHayoge
                    </h5>
                    <p class="mb-6 text-sm text-gray-500">
                      Software Developer, Designer &amp; Creator
                    </p>
                  </div>

                  <div class="px-4 text-center">
                    <div className="flex justify-center space-x-4 my-8">
                      <a
                        href="https://github.com/glenhayoge"
                        className="text-xl  xl:grid place-item-center p-1 w-8 h-8 text-gray-500  cursor-pointer hover:bg-gray-800 relative"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          class="bi bi-github w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/glen-g-hayoge-089935104/"
                        className="text-xl xl:grid place-item-center p-1 w-8 h-8 text-gray-500  cursor-pointer hover:bg-gray-800 relative"
                      >
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-linkedin w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a
                        href="https://stackoverflow.com/users/12071488/glenh"
                        className="text-xl  p-1 xl:grid place-item-center w-8 h-8 text-gray-500   cursor-pointer hover:bg-gray-800 relative"
                      >
                        <span className="sr-only">StackOverFlow</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-stack-overflow w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z" />
                          <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-xl p-1 xl:grid place-item-center w-8 h-8 text-gray-500    cursor-pointer hover:bg-gray-800 relative"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-twitter w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-xl p-1 xl:grid place-item-center w-8 h-8 text-gray-500 cursor-pointer hover:bg-gray-800 relative"
                      >
                        <span className="sr-only">RSS</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </a>
                    </div>

                    <div class="mb-2 pb-8 border-b dark:border-gray-600 border-dashed border-gray-200 ">
                      <a
                        class="py-1 px-2 mr-2 text-xs text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-600"
                        href="#"
                      >
                        Front-End
                      </a>
                      <a
                        class="py-1 px-2 mr-2 text-xs text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-600"
                        href="#"
                      >
                        Design
                      </a>
                      <a
                        class="py-1 px-2 text-xs text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-600"
                        href="#"
                      >
                        Software Dev
                      </a>
                    </div>
                    <div class=" px-6 text-xs italic text-gray-500">
                      Updated:{" "}
                      <TimeAgo date="November 29, 2022 7:00 am" locale="pg" />
                    </div>
                  </div>
                  <img
                    class="absolute bg-gray-800 bg-blend-color opacity-50 bottom-0 left-0 w-full h-16 object-cover"
                    src="https://previews.123rf.com/images/balabolka/balabolka1404/balabolka140400814/27930119-r%C3%A9sum%C3%A9-vecteur-de-fond-ethnique-tribal-seamless.jpg"
                  />
                </div>
              </div>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
