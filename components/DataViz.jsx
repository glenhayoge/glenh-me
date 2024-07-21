import Link from "next/link";
import Image from "next/image";
import projects from "../assets/pattern.png";

export default function DataViz() {
    return (

<div className="container mx-auto w-full mt-2 rounded-lg">
<div className="pt-8 mb-8 px-4 text-gray-600">
  <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
    Data Visualisation & Analytics
  </p>
  <p className="text-sm  text-gray-400 mt-3">
    {" "}
    Selected Data Analysis & Visualisation Projects
  </p>
</div>
<div className="flex flex-wrap -m-4 text-center p-4">
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
      <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <Link href="#!">
          <Image
            src={projects}
            alt="Projects Image"
            width="350px"
            height="300px"
            layout="responsive"
            className="opacity-30"
          />
        </Link>
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
        <div className="pt-2 pb-3">
          <Link href="https://farmis.fpda.com.pg" target="_blank">
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
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
      <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <Link href="#!">
          <Image
            src={projects}
            alt="Projects Image"
            width="350px"
            height="300px"
            layout="responsive"
            className="opacity-30"
          />
        </Link>
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
        <div className="pt-2 pb-3">
          <Link href="https://farmis.fpda.com.pg" target="_blank">
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
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
      <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <Link href="#!">
        
          <Image
            src={projects}
            alt="Projects Image"
            width="350px"
            height="300px"
            layout="responsive"
            className="opacity-30"
          />
        </Link>
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
        <div className="pt-2 pb-3">
          <Link href="https://farmis.fpda.com.pg" target="_blank">
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
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
      <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <Image
          src={projects}
          alt="Projects Image"
          width="350px"
          height="300px"
          className="opacity-30"
        />
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
        <div className="pt-2 pb-3">
          <Link href="https://farmis.fpda.com.pg" target="_blank">
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
</div>
  )
}