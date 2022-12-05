import Link from "next/link";
import Image from "next/image";

import projects from "../assets/pattern.png";

// import CDNcard from "../component/CDNcard";
import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {}, []);
  return (
    <>
      <section className="py-24 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className=" w-full items-stretch">
            <div className=" rounded-lg overflow-hidden ">
              {/* <div className="flex mt-4 justify-left text-left items-center">
                <h1 className=" mb-4 block text-left text-4xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                  Projects
                </h1>
              </div> */}
              {/* <div class="mb-8 p-8 rounded"> */}
              <div class="flex flex-wrap items-center ">
                <div class="w-full lg:w-2/3 px-4">
                  <h2 class="mb-4 block text-left text-4xl font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    Projects
                  </h2>
                  {/* <p class="text-dark-500">
                      We have prepared the most frequently asked questions for
                      you
                    </p> */}
                </div>
                <div class="w-full lg:w-1/3 px-4 flex items-center">
                  {/* <img src="artemis-assets/images/office.png" alt=""/> */}
                  <Image
                    src={projects}
                    alt="Projects Image"
                    width="350px"
                    height="300px"
                    layout="responsive"
                    className="opacity-30"
                  />
                </div>
              </div>
              {/* </div> */}
              <div class="container mx-auto w-full mt-8 rounded-lg">
                <div class="pt-8 mb-8 px-4 text-gray-600">
                  <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                    Mobile & Web apps
                  </p>
                  <p className="text-sm  text-gray-400 mt-3">
                    {" "}
                    Here are selected web and mobile applications I crafted
                  </p>
                </div>
                <div class="flex flex-wrap -m-4 text-center p-4">
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
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
                      <div class="p-6 items-left flex-left">
                        <p class="text-gray-500 text-center text-base mb-4">
                          The source code of this website. https://glenh.me
                        </p>
                        <button class="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
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
                      <div class="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
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
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                      <div class="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                        <div class="flex mb-2 justify-between text-left items-left">
                          <p class=" text-gray-500 text-xs">2022</p>

                          <div>
                            <p class="block text-right text-xs ">1231 ⭐</p>
                          </div>
                        </div>
                        Dzagoo.com
                      </div>
                      <div class="p-6 items-left flex-left">
                        <p class="text-gray-500 text-center text-base mb-4">
                          A digital solutions business website.
                          https://dzagoo.com
                        </p>
                        <button class="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
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
                      <div class="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
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
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                      <div class="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                        <div class="flex mb-2 justify-between text-left items-left">
                          <p class=" text-gray-500 text-xs">2022</p>

                          <div>
                            <p class="block text-right text-xs ">1231 ⭐</p>
                          </div>
                        </div>
                        FPDA Website
                      </div>
                      <div class="p-6 items-left flex-left">
                        <p class="text-gray-500 text-center text-base mb-4">
                          FPDA's official company website.
                        </p>
                        <button class="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
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
                      <div class="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
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
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                      <div class="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                        <div class="flex mb-2 justify-between text-left items-left">
                          <p class=" text-gray-500 text-xs">2022</p>

                          <div>
                            <p class="block text-right text-xs ">1231 ⭐</p>
                          </div>
                        </div>
                        FARMIS-App
                      </div>
                      <div class="p-6 items-left flex-left">
                        <p class="text-gray-500 text-center text-base mb-4">
                          FARMIS agri-advisory mobile application
                        </p>
                        <button class="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
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
                      <div class="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
                        <span>
                          {" "}
                          <i className="devicon-angularjs-plain p-1"></i>
                        </span>
                        <span>
                          {" "}
                          <i className="devicon-django-plain p-1"></i>
                        </span>

                        <span>
                          {" "}
                          <i className="devicon-ionic-original p-1"></i>
                        </span>
                        <span>
                          {" "}
                          <i class="devicon-python-plain p-1"></i>
                        </span>
                        <span>
                          <i className="devicon-docker-plain p-1"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container mx-auto w-full mt-2 rounded-lg">
                <div class="pt-8 mb-8 px-4 text-gray-600">
                  <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                    Designs, Illustrations & Photography
                  </p>
                  <p className="text-sm  text-gray-400 mt-3">
                    {" "}
                    Here are selected web and mobile applications I crafted
                  </p>
                </div>
                <div class="flex flex-wrap -m-4 text-center p-4">
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div class="flex justify-center">
                      <div class="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
                        <a href="#!">
                          <img
                            class="rounded-t-lg"
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            alt=""
                          />
                        </a>
                        <div class="p-2 ">
                          <h5 class="text-gray-500 text-lg font-medium ">
                            Card title
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                  <div class="flex justify-center">
                      <div class="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
                        <a href="#!">
                          <img
                            class="rounded-t-lg"
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            alt=""
                          />
                        </a>
                        <div class="p-2 ">
                          <h5 class="text-gray-500 text-lg font-medium ">
                            Card title
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                  <div class="flex justify-center">
                      <div class="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
                        <a href="#!">
                          <img
                            class="rounded-t-lg"
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            alt=""
                          />
                        </a>
                        <div class="p-2 ">
                          <h5 class="text-gray-500 text-lg font-medium ">
                            Card title
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
                  <div class="flex justify-center">
                      <div class="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
                        <a href="#!">
                          <img
                            class="rounded-t-lg"
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            alt=""
                          />
                        </a>
                        <div class="p-2 ">
                          <h5 class="text-gray-500 text-lg font-medium ">
                            Card title
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
