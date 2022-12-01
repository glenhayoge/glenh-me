import Link from "next/link";
import Image from "next/image";


import { useEffect } from "react";
import propic from "../assets/profile2.png";

export default function IndexPage() {

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
                       Snippets
                      </h1>
                    </div>
                    <div className="w-full h-full overflow-y-auto">
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        I am Glen, a software developer from Papua New Guinea. I
                        use this space on the internet to create and share
                        contents on software projects, articles, tutorials,
                        guides, issues, musings, and lots more... I love
                        building things and have a long list of abandoned side
                        projects and some stale piles of code that I hope to
                        keep adding to.
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        Check out the projects page to see a highlight of my
                        open-source work, and the blog for my tutorials and
                        more. 
                        
                       
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      My site has no ads, no affiliate links, no
                        tracking or analytics, no sponsored posts, and no
                        paywall. My only motivation for this site is to share
                        what I've learned with the world. 
                        
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      Although the tide is
                        against me, I want to make the internet a better place.
                        Even if it's just right here. I hope I will inspire
                        others to make their own creative corner on the web as
                        well. 
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                            
                      You can contact me by email at hello at
                        taniarascia.com to say hi! I always appreciate meeting
                        new people.
                      </p>
                     
                       
                    
                    </div>
                    {/* what im doing */}
                    <div className="flex mt-4 justify-left text-left items-center   ">
                      <h2 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl ">
                      What I'm doing now
                      </h2>
                    </div>
                    <div className="w-full h-full overflow-y-auto">
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        I am Glen, a software developer from Papua New Guinea. I
                        use this space on the internet to create and share
                        contents on software projects, articles, tutorials,
                        guides, issues, musings, and lots more... I love
                        building things and have a long list of abandoned side
                        projects and some stale piles of code that I hope to
                        keep adding to.
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        Check out the projects page to see a highlight of my
                        open-source work, and the blog for my tutorials and
                        more. 
                        
                       
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      My site has no ads, no affiliate links, no
                        tracking or analytics, no sponsored posts, and no
                        paywall. My only motivation for this site is to share
                        what I've learned with the world. 
                        
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      Although the tide is
                        against me, I want to make the internet a better place.
                        Even if it's just right here. I hope I will inspire
                        others to make their own creative corner on the web as
                        well. 
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                            
                      You can contact me by email at hello at
                        taniarascia.com to say hi! I always appreciate meeting
                        new people.
                      </p>
                     
                       
                    
                    </div>
               {/* what im reading */}
               <div className="flex mt-4 justify-left text-left items-center">
                      <h2 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl">
                      What I'm Watching
                      </h2>
                    </div>
                    <div className="w-full h-full overflow-y-auto">
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        I am Glen, a software developer from Papua New Guinea. I
                        use this space on the internet to create and share
                        contents on software projects, articles, tutorials,
                        guides, issues, musings, and lots more... I love
                        building things and have a long list of abandoned side
                        projects and some stale piles of code that I hope to
                        keep adding to.
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        Check out the projects page to see a highlight of my
                        open-source work, and the blog for my tutorials and
                        more. 
                        
                       
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      My site has no ads, no affiliate links, no
                        tracking or analytics, no sponsored posts, and no
                        paywall. My only motivation for this site is to share
                        what I've learned with the world. 
                        
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      Although the tide is
                        against me, I want to make the internet a better place.
                        Even if it's just right here. I hope I will inspire
                        others to make their own creative corner on the web as
                        well. 
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                            
                      You can contact me by email at hello at
                        taniarascia.com to say hi! I always appreciate meeting
                        new people.
                      </p>
                     
                       
                    
                    </div>

                       {/* my dev tools */}
               <div className="flex mt-4 justify-left text-left items-center  ">
                      <h5 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl">
                      What I'm Reading
                      </h5>
                    </div>
                    <div className="w-full h-full overflow-y-auto">
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        I am Glen, a software developer from Papua New Guinea. I
                        use this space on the internet to create and share
                        contents on software projects, articles, tutorials,
                        guides, issues, musings, and lots more... I love
                        building things and have a long list of abandoned side
                        projects and some stale piles of code that I hope to
                        keep adding to.
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                        Check out the projects page to see a highlight of my
                        open-source work, and the blog for my tutorials and
                        more. 
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      My site has no ads, no affiliate links, no
                        tracking or analytics, no sponsored posts, and no
                        paywall. My only motivation for this site is to share
                        what I've learned with the world. 
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                      Although the tide is
                        against me, I want to make the internet a better place.
                        Even if it's just right here. I hope I will inspire
                        others to make their own creative corner on the web as
                        well. 
                      </p>
                      <p className="px-4 py-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                            
                      You can contact me by email at hello at
                        taniarascia.com to say hi! I always appreciate meeting
                        new people.
                      </p>
                    </div>
                </div>
              </div>
              <div class="w-full lg:w-4/12 p-4 ">
                <div class="p-0 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden   shadow-md rounded-lg dark:bg-gray-800/25">
                  <div class="relative pt-10 pb-20 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                    <div class="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      Categories
                    </h5>
                    <p class="mb-6 text-sm text-gray-500">
                      Software Developer, Designer &amp; Creator
                    </p>
                    </div>
                  </div>
                </div>
                <div class="mt-8 dark:text-gray-500 bg-gray-200/25 rounded text-center overflow-hidden   shadow-md rounded-lg dark:bg-gray-800/25">
                  <div class="relative pt-10 pb-20 z-60 dark:bg-gray-800/25  rounded overflow-hidden">
                    <div class="px-6 text-center pt-2">
                    <h5 className=" text-gray-600 dark:text-yellow-400 text-xl mb-4">
                      Tags
                    </h5>
                    <p class="mb-6 text-sm text-gray-500">
                      Software Developer, Designer &amp; Creator
                    </p>
                    </div>
                  </div>
                </div>
                <div class="p-6 mt-8 bg-gray-200/25 dark:text-gray-500  shadow rounded text-center overflow-hidden border-amber-400 border-1 shadow-md rounded dark:bg-gray-800/25">
                <h3 class="mb-2 text-xl font-bold dark:text-yellow-400 text-gray-500 sm:text-3xl">Newsletter</h3>
                <p class="mb-6 text-gray-500">Sign up & be notified when new articles & stuff are posted here. I won't spam or publish your email addresses. Unsubscribe anytime.
      </p>
                <div href="/about" class="mb-10">
                    <button
                      type="button"
                      class=" inline-block px-6 py-2.5 outline outline-1  font-bold hover:outline-2 rounded-full text-xs leading-tight uppercase rounded-lg hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0   transition duration-150 ease-in-out"
                    >
                      Subscribe to Newsletter
                    </button>
                    </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
}
