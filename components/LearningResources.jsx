import Link from 'next/link'

export default function ILearningResources() {
    return (
        <div className="container px-6  mx-auto  mb-12 mt-16 rounded-lg">
        <div className=" mb-8  ">
          <p className="text-3xl font-bold tracking-tight sm:text-4xl ">
            Learning Resources
          </p>
          <p className="text-sm   mt-3">
            {" "}
          Selected books, blogs, videos and other learning
            resources for software development and self-improvement.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center ">
        
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <Link href="/books">
            <div className="p-6 rounded  hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-cyan-700 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
              <span className="text-xs ">
                <span className="inline-block">
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
              <h2 className="mb-2 text-m uppercase tracking-widest ">
                Books
              </h2>
            </div>
            </Link>
          </div>
         
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            
          <Link href="/blogs">
            
            <div className="p-6 rounded  hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-cyan-700 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
              <span className="text-xs ">
                <span className="inline-block ">
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
              <h2 className="mb-2 text-m uppercase tracking-widest">
                Blogs
              </h2>
            </div>
            </Link>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <Link href="/courses">
            <div className="p-6 rounded  hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-cyan-700 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
              <span className="text-xs ">
                <span className="inline-block ">
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
              <h2 className="mb-2 text-m uppercase tracking-widest">
                Courses
              </h2>
            </div>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <Link href="/videos">
            <div className="p-6 rounded  hover:text-yellow-400 dark:hover:text-yellow-400 border-gray-500 dark:hover:text-yellow-400 dark:border-gray-900 hover:bg-cyan-700 dark:bg-gray-900 hover:scale-[1.01] hover:border-gray-900  dark:hover:border-yellow-400 border dark:hover:bg-gray-800">
              <span className="text-xs">
                <span className="inline-block ">
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
              <h2 className="mb-2 text-m uppercase tracking-widest">
                Videos
              </h2>
            </div>
            </Link>
          </div>
        </div>
      </div>
        
    )
}
