
import Image from "next/image";
import WebApps from "../components/WebApps";
import projects from "../assets/pattern.png";
import { useEffect } from "react";
import Photography from "../components/Photography";

export default function IndexPage() {
  useEffect(() => { }, []);
  return (
    <>
      <section className="py-24 ">
      <div className="container px-2 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6">
            <div className="w-full  lg:w-max-screen-3xl lg:px-20 md:px-8 ">
              <div className=" overflow-hidden">

              <div className="flex flex-wrap items-center ">
                <div className="w-full mx-4 lg:mx-0 lg:w-2/3 px-4">
                  <h2 className="mb-4 block text-left text-5xl font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-5xl ">
                    Work Samples.
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          Personal work samples and projects I have created
        </p>
                </div>
                <div className="w-full mx-4 lg:mx-0 lg:w-1/3 px-4 flex items-center">
                  <Image
                    src={projects}
                    alt="Projects Image"
                    width="350px"
                    height="300px"
                   
                    className="opacity-30"
                  />
                </div>
              </div>
             <WebApps />
             <Photography />
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
