import Link from "next/link";
import Button from '../components/Button';
import { SiNextdotjs,SiTailwindcss,SiReact, SiNetlify, SiBulma,SiDjango,SiPython,SiDocker,SiJavascript } from "react-icons/si";
// import Button from "components"
export default function IProjects() {
    return (

        <div className="container px-8 mx-auto mt-2 ">
        <div className="pt-12 mb-8  text-gray-600">
       
          <p className="text-3xl font-black tracking-tight sm:text-4xl  font-bold text-gray-500 dark:text-gray-400">
            Work Samples
          </p>
          <p className="text-sm  text-gray-400 my-6">
            {" "}
            Selected open-source and proprietary projects I crafted
          </p>
        </div>
        
        <div className="flex flex-wrap -m-4 text-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
           
              <div className="block rounded outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                <div className="py-3 px-2 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                  {/* <div className="flex mb-2 justify-between text-left items-left">
                    <p className=" text-gray-500 text-xs">2022</p>

                    <div>
                      <p className="block text-right text-xs ">⭐</p>
                    </div>
                  </div> */}
                  <div className="text-center">
                        glensea.com Website
                        </div>
                </div>
                <div className="p-2 items-left flex-left">
                  <p className="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
                    The source code of this website.
                  </p>
                  <Link href="https://github.com/glenhayoge/glenh-me" target="_blank">
                  <button className="bg-gray-500/25 hover:scale-[1.02]  text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
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
                <div className=" flex space-x-4 py-2 text-xl justify-center items-center border-t border-gray-300 dark:border-gray-500 text-gray-400">
                  <span>
                  <SiNextdotjs className=""/>
                  </span>
                  <span>
                  <SiTailwindcss className=""/>
                  </span>
                  <span>
                  <SiReact className=""/>
                  </span>
                  <span>
                  <SiNetlify className="h-4 w-4"/>
                  </span>
                </div>
              </div>
           
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
           
              <div className="block rounded outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                <div className="py-3 px-2 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                  {/* <div className="flex mb-2 justify-between text-left items-left">
                    <p className=" text-gray-500 text-xs">2022</p>

                    <div>
                      <p className="block text-right text-xs ">⭐</p>
                    </div>
                  </div> */}
                  <div className="text-center">
                        Dzagoo Website
                        </div>
                </div>
                <div className="p-2 items-left flex-left">
                  <p className="text-gray-500 text-center mb-4 text-sm tracking-tight leading-tight ">
                    A business website. Dzagoo.com
                  
                  </p>
                  <Link href="https://dzagoo.com" target="_blank">
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
                <div className=" flex space-x-4 py-2 text-xl justify-center items-center border-t border-gray-300 dark:border-gray-500 text-gray-400">
                  <span>
                  <SiNextdotjs className=""/>
                  </span>
                  <span>
                  <SiTailwindcss className=""/>
                  </span>
                  <span>
                  <SiReact className=""/>
                  </span>
                  <span>
                  <SiNetlify className="h-4 w-4"/>
                  </span>
                </div>
              </div>
           
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
           
              <div className="block rounded outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
                
                <div className="py-3 px-2 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                  <div className="text-center">
                        FPDA Website
                        </div>
                </div>
                <div className="p-2 items-left flex-left">
                  <p className="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
                    New FPDA's Website. Fpda.com.pg
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
                <div className=" flex space-x-4 py-2 text-xl justify-center items-center border-t border-gray-300 dark:border-gray-500 text-gray-400">
                  <span>
                  <SiDjango className=""/>
                  </span>
                  <span>
                  <SiPython className=""/>
                  </span>
                  <span>
                  <SiBulma className=""/>
                  </span>
                  <span>
                  <SiDocker className="h-4 w-4"/>
                  </span>
                  <span>
                  <SiJavascript className="h-4 w-4"/>
                  </span>
                </div>
              </div>
          </div>
        </div>
          <div className="pt-6 flex items-center">
                    <Button  href="/projects" label="More Samples"/>
        </div>
      </div>


    )
}