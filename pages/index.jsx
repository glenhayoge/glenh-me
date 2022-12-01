import Head from "next/head";
import ArticleCard from "../components/ArticleCard";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Header from "../components/header";
import Image from "next/image";
import propic from "../assets/glens_1.png";
import Newsletter from "../components/newsletter";
import { useTimeAgo } from "next-time-ago";
import Subscribe from "../components/Subscribe";

export default function Home({ articles }) {
  const { TimeAgo } = useTimeAgo();

  return (
    <div>
      <Head>
        <title>Glenh.me | Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&family=Nanum+Pen+Script&display=swap');
        </style>       
      </Head>
      <Header />
      <section className="py-24 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-4">
            <div className="w-full lg:w-8/12 p-4">
              <div className=" overflow-hidden">
                <div className="pt-1 pb-1 px-6 ">
                  <div className="flex mb-4 justify-between items-center">
                    <div class="pt-2 px-3  text-gray-600">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-600 dark:text-gray-400">
                        Recent Posts
                      </p>
                      <p className="text-sm  text-gray-400 mt-3">
                    {" "}
                    Checkout selected books, blogs, videos and other learning
                    resources for software and personal development.
                  </p>
                    </div>
                  </div>
                </div>
          
                <main>
                  {articles.map(
                    ({
                      title,
                      description,
                      slug,
                      image,
                      category,
                      publishedAt,
                      readingTime,
                    }) => (
                      <ArticleCard
                        key={slug}
                        title={title}
                        description={description}
                        slug={slug}
                        image={image}
                        category={category}
                        dateTime={publishedAt}
                        date={publishedAt}
                        readingTime={readingTime.text}
                      />
                    )
                  )}
                </main>

                <div class="ml-4 p-6 flex items-center justify-between ">
                  <a
                    class=" py-2 px-3  text-gray-500 outline outline-1  font-bold hover:outline-2 rounded-full text-xs "
                    href="/articles"
                  >
                    View All Posts
                  </a>
                </div>
              </div>

             
              <div class="container px-4 mx-auto mt-4">
                <div class="pt-8 mb-8 px-4 text-gray-600">
               
                  <p className="text-3xl font-black tracking-tight sm:text-4xl  font-bold text-gray-500 dark:text-gray-400">
                    Side Projects
                  </p>
                  <p className="text-sm  text-gray-400 mt-3">
                    {" "}
                    Selected projects I've worked on
                  </p>
                </div>
                
                <div class="flex flex-wrap -m-4 text-center p-4">
                <div class="w-full md:w-1/2 lg:w-1/3 p-4">
                    {/* <div class="flex justify-center"> */}
                      <div class="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                        <div class="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                          <div class="flex mb-2 justify-between text-left items-left">
                            <p class=" text-gray-500 text-xs">2022</p>

                            <div>
                              <p class="block text-right text-xs ">1231 ⭐</p>
                            </div>
                          </div>
                          Glenh.me
                        </div>
                        <div class="p-4 items-left flex-left">
                          <p class="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
                            The source code of this website. Glenh.me
                          </p>
                          <button class="bg-gray-300/25 outline ouline-1 hover:oultine-2 outline-gray-400 text-gray-400 text-sm py-1 px-2 rounded-lg inline-flex items-center">
                            <span>Source</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1 dark:text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="py-3 text-2xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
                          <span>
                            {" "}
                            <i class="devicon-react-original p-1"></i>
                          </span>
                          <span>
                            {" "}
                            <i class="devicon-nextjs-original p-1"></i>
                          </span>
                          <span>
                          <i class="devicon-tailwindcss-plain p-1"></i>
                          </span>
                         
                        </div>
                      </div>
                    {/* </div> */}
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/3 p-4">
                   
                      <div class="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                        <div class="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                          <div class="flex mb-2 justify-between text-left items-left">
                            <p class=" text-gray-500 text-xs">2022</p>

                            <div>
                              <p class="block text-right text-xs ">1231 ⭐</p>
                            </div>
                          </div>
                          Dzagoo Website
                        </div>
                        <div class="p-4 items-left flex-left">
                          <p class="text-gray-500 text-center mb-4 text-sm tracking-tight leading-tight ">
                            A digital solutions business website. Dzagoo.com
                          
                          </p>
                          <button class="bg-gray-300/25 outline ouline-1 hover:bg-grey outline-gray-400 text-gray-400 text-sm py-1 px-2 rounded-lg inline-flex items-center">
                            <span>Live site</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1 dark:text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="py-3 text-2xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
                          <span>
                            {" "}
                            <i class="devicon-javascript-plain p-1"></i>
                          </span>
                          <span>
                            {" "}
                            <i class="devicon-php-plain p-1"></i>
                          </span>
                          <span>
                          <i class="devicon-css3-plain p-1"></i>
                          </span>
                          <span>
                            {" "}
                            <i class="devicon-tailwindcss-plain p-1"></i>
                          </span>
                        
                        </div>
                      </div>
                   
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/3 p-4">
                   
                      <div class="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                        <div class="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                          <div class="flex mb-2 justify-between text-left items-left">
                            <p class=" text-gray-500 text-xs">2022</p>

                            <div>
                              <p class="block text-right text-xs ">1231 ⭐</p>
                            </div>
                          </div>
                          FPDA Webapp
                        </div>
                        <div class="p-4 items-left flex-left">
                          <p class="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
                            FPDA's official website. Fpda.com.pg
                          </p>
                          <button class="bg-gray-300/25 outline ouline-1 hover:bg-grey outline-gray-400 text-gray-400 text-sm py-1 px-2 rounded-lg inline-flex items-center">
                            <span>Live site</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1 dark:text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="py-3 text-2xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
                          <span>
                            {" "}
                            <i class="devicon-bulma-plain p-1"></i>
                          </span>
                          <span>
                            {" "}
                            <i className="devicon-django-plain p-1"></i>
                          </span>
                          <span>
                            <i className="devicon-docker-plain p-1"></i>
                          </span>
                          <span>
                          <i class="devicon-python-plain p-1"></i>
                          </span>
                          <span>
                          <i class="devicon-javascript-plain p-1"></i>
                          </span>
                        </div>
                      </div>
                 
                  </div>
                </div>
                <div class=" p-6 flex items-center justify-between ">
                  <a
                    class=" py-2 px-3  text-gray-500 outline outline-1  font-bold hover:outline-2 rounded-full text-xs "
                    href="/projects"
                  >
                    View Projects
                  </a>
                </div>
              </div>

            
              <div class="container px-4 mx-auto bg-gray-200 dark:bg-gray-800/25 mt-8 rounded-lg">
                <div class="pt-8 mb-8 px-4 text-gray-600">
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-500 dark:text-gray-400">
                    Learning Resources
                  </p>
                  <p className="text-sm  text-gray-400 mt-3">
                    {" "}
                    Checkout selected books, blogs, videos and other learning
                    resources for software and personal development.
                  </p>
                </div>
                <div class="flex flex-wrap -m-4 text-center p-4">
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="p-6 rounded text-gray-200 bg-gray-500 hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-gray-600 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
                      <span class="text-xs ">
                        <span class="inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-book w-6 h-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                          </svg>
                        </span>
                      </span>
                      <h2 class="mb-2 text-m uppercase tracking-widest ">
                        Books
                      </h2>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="p-6 rounded text-gray-200 bg-gray-500 hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-gray-600 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
                      <span class="text-xs ">
                        <span class="inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-card-heading w-6 h-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                          </svg>
                        </span>
                      </span>
                      <h2 class="mb-2 text-m uppercase tracking-widest">
                        Blogs
                      </h2>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="p-6 rounded text-gray-200 bg-gray-500 hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-gray-600 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
                      <span class="text-xs ">
                        <span class="inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-briefcase w-6 h-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                        </span>
                      </span>
                      <h2 class="mb-2 text-m uppercase tracking-widest">
                        Courses
                      </h2>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="p-6 rounded text-gray-200 bg-gray-500 hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-gray-600 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
                      <span class="text-xs">
                        <span class="inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-collection-play w-6 h-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                            <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
                          </svg>
                        </span>
                      </span>
                      <h2 class="mb-2 text-m uppercase tracking-widest">
                        Videos
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-4/12 p-4 ">
              <div class="p-0 dark:text-gray-500 relative shadow rounded text-center overflow-auto border-amber-400 border-1 shadow-md rounded-lg ">
                <div class="relative pt-10 pb-20 bg-gray-200/25 rounded-xl dark:bg-gray-800/25 shadow rounded overflow-hidden">
                  <img
                    className="absolute bg-gray-800 bg-blend-color opacity-50 top-0 left-0 w-full h-24 object-cover"
                    src="https://previews.123rf.com/images/balabolka/balabolka1404/balabolka140400814/27930119-r%C3%A9sum%C3%A9-vecteur-de-fond-ethnique-tribal-seamless.jpg"
                  />
                  <Image
                    src={propic}
                    placeholder="blur"
                    alt="Picture of the Glen"
                    className="bg-white relative w-24 h-24 mb-2 mx-auto rounded-full object-cover object-right"
                    width={140}
                    height={140}
                  />
                  <div class="px-6 text-center py-6">
                    <h5 className="signature text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      GlenGHayoge
                    </h5>
                    <p class="mb-6 text-sm text-gray-500">
                      Software Developer, Designer &amp; Creator
                    </p>
                    <div class="flex items-center justify-center mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Hi, my name is Glen. I'm a software developer, designer
                        & creator in Papua New Guinea. I use this space on
                        internet to document & share snippets of my perpertual
                        learning & self improvement oddeseys.
                      </p>
                    </div>
                    <a href="/about">
                    <button
                      type="button"
                      class=" inline-block px-6 py-2.5 outline outline-1 font-bold hover:outline-2 rounded-full text-xs leading-tight uppercase rounded-lg hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                      Read More About Me...
                    </button>
                    </a>
                    <div className="flex justify-center space-x-6 my-6">
                      <a
                        href="https://github.com/glenhayoge"
                        className="text-gray-400 hover:text-gray-500"
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
                        className="text-gray-400 hover:text-gray-500"
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
                        className="text-gray-400 hover:text-gray-500"
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
                      <a href="#" className="text-gray-400 hover:text-gray-500">
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

                      <a href="#" className="text-gray-400 hover:text-gray-500">
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
                    <div class="py-1 px-6 text-xs italic text-gray-500">
                      Updated:{" "}
                      <TimeAgo date="November 29, 2022 7:00 am" locale="pg" />
                    </div>
                  </div>
                  <img
                    class="absolute bg-gray-800 bg-blend-color opacity-50 bottom-0 left-0 w-full h-24 object-cover"
                    src="https://previews.123rf.com/images/balabolka/balabolka1404/balabolka140400814/27930119-r%C3%A9sum%C3%A9-vecteur-de-fond-ethnique-tribal-seamless.jpg"
                  />
                </div>
              </div>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function getStaticProps() {
  const articles = allArticles
    .map((article) =>
      select(article, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "readingTime",
        "author",
        "category",
        "image",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
