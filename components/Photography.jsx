import Image from "next/image";
import projects from "../assets/pattern.png";

export default function Photography() {
    return (

<div className="container mx-auto w-full mt-2 rounded-lg">
<div className="pt-8 mb-8 px-4 text-gray-600">
  <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
    Designs, Illustrations & Photography
  </p>
  <p className="text-sm  text-gray-400 mt-3">
    {" "}
    Drawings, designs I created and photographs I took
  </p>
</div>
<div className="flex flex-wrap -m-4 text-center p-4">
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
    <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <a href="#!">
          <Image
            src={projects}
            alt="Projects Image"
            width="350px"
            height="400px"
        
            className="opacity-30 rounded-t-lg"
            
          />
        </a>
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
    <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <a href="#!">
          <Image
            src={projects}
            alt="Projects Image"
            width="350px"
            height="400px"
        
            className="opacity-30 rounded-t-lg"
            
          />
        </a>
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
    <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <a href="#!">
          <Image
            src={projects}
            alt="Projects Image"
            width="350px"
            height="400px"
        
            className="opacity-30 rounded-t-lg"
            
          />
        </a>
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="flex justify-center">
    <div className="rounded max-w-sm bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
        <a href="#!">
          <Image
            src={projects}
            alt="Projects Image"
            width="350px"
            height="400px"
        
            className="opacity-30 rounded-t-lg"
            
          />
        </a>
        <div className=" pt-3 ">
          <h5 className="text-gray-500 text-lg font-medium ">
            Card title
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    )
}