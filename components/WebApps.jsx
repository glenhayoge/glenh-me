import Link from "next/link";
import Image from "next/image";
import projects from "../assets/pattern.png";

export default function WebApps() {
    return (
<div className="container mx-auto w-full mt-8 rounded-lg">
<div className="pt-8 mb-8 px-4 text-gray-600">
  <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
    Mobile & Web apps
  </p>
  <p className="text-sm  text-gray-400 mt-3">
    {" "}
    Here are selected web and mobile applications I crafted
  </p>
</div>
<div className="flex flex-wrap -m-4 text-center p-4">
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
      <div className="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
        <div className="flex mb-2 justify-between text-left items-left">
          <p className=" text-gray-500 text-xs">2022</p>

          <div>
            <p className="block text-right text-xs ">1231 ⭐</p>
          </div>
        </div>
        <div className="text-center">


          Glenh.me Website

        </div>

      </div>
      <div className="p-6 items-left flex-left">
        <p className="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
          The source code of this website. https://glenh.me
        </p>
        <Link href="https://github.com" target="_blank">
          <button class="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
            <span>Source</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
        <span>
          {" "}
          <i className="devicon-react-original p-1"></i>
        </span>
        <span>
          {" "}
          <i className="devicon-nextjs-original p-1"></i>
        </span>
        <span>
          <i className="devicon-tailwindcss-plain p-1"></i>
        </span>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
      <div className="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
        <div className="flex mb-2 justify-between text-left items-left">
          <p className=" text-gray-500 text-xs">2022</p>

          <div>
            <p className="block text-right text-xs ">1231 ⭐</p>
          </div>
        </div>
        <div className="text-center">


          Dzagoo.com Website

        </div>
      </div>
      <div className="p-6 items-left flex-left">
        <p className="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
          A digital solutions business website.
          https://dzagoo.com
        </p>
        <Link href="https://dzagoo.com" target="_blank">
          <button class="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
            <span>Live site</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
        <span>
          {" "}
          <i className="devicon-javascript-plain p-1"></i>
        </span>
        <span>
          {" "}
          <i className="devicon-php-plain p-1"></i>
        </span>
        <span>
          <i className="devicon-css3-plain p-1"></i>
        </span>
        <span>
          {" "}
          <i className="devicon-tailwindcss-plain p-1"></i>
        </span>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
      <div className="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
        <div className="flex mb-2 justify-between text-left items-left">
          <p className=" text-gray-500 text-xs">2022</p>

          <div>
            <p className="block text-right text-xs ">1231 ⭐</p>
          </div>
        </div>
        <div className="text-center">


          FPDA Website

        </div>
      </div>
      <div className="p-6 items-left flex-left">
        <p className="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
          FPDA's official company website. https://fpda.com.pg
        </p>
        <Link href="https://fpda.com.pg" target="_blank">
          <button className="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
            <span>Live site</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
        <span>
          {" "}
          <i className="devicon-bulma-plain p-1"></i>
        </span>
        <span>
          {" "}
          <i className="devicon-django-plain p-1"></i>
        </span>
        <span>
          <i className="devicon-docker-plain p-1"></i>
        </span>
        <span>
          <i className="devicon-python-plain p-1"></i>
        </span>
        <span>
          <i className="devicon-javascript-plain p-1"></i>
        </span>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
      <div className="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
        <div className="flex mb-2 justify-between text-left items-left">
          <p className=" text-gray-500 text-xs">2022</p>

          <div>
            <p className="block text-right text-xs ">1231 ⭐</p>
          </div>
        </div>
        <div className="text-center">
          FARMIS
        </div>
      </div>
      <div className="p-6 items-left flex-left">
        <p className="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
          FARMIS agri-advisory mobile application
        </p>
        <Link href="https://farmis.fpda.com.pg" target="_blank">
          <button class="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
            <span>Live site</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
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
          <i className="devicon-python-plain p-1"></i>
        </span>
        <span>
          <i className="devicon-docker-plain p-1"></i>
        </span>
      </div>
    </div>
  </div>
</div>
</div>

  )
}
