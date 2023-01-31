
import Image from "next/image";
import WebApps from "../components/WebApps";
import DataViz from "../components/DataViz";

import projects from "../assets/pattern.png";

// import CDNcard from "../component/CDNcard";
import { useEffect } from "react";
import Photography from "../components/Photography";

export default function IndexPage() {
  useEffect(() => { }, []);
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
              <div className="flex flex-wrap items-center ">
                <div className="w-full lg:w-2/3 px-4">
                  <h2 className="mb-4 block text-left text-4xl font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    Projects
                  </h2>
                  {/* <p class="text-dark-500">
                      We have prepared the most frequently asked questions for
                      you
                    </p> */}
                </div>
                <div className="w-full lg:w-1/3 px-4 flex items-center">
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
             {/* web apps */}
             <WebApps />
             <DataViz />
             <Photography />
          
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
