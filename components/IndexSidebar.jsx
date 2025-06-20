import Subscribe from "./Subscribe";
import React from "react";
import Image from "next/image";
import propic from "../assets/glens_color_avatar.png";
import GitHubCalendar from 'react-github-calendar';
import TimeAgoComponent from "../components/TimeAgo";
import Link from 'next/link'

const ISideBar = () => {
  const imageUrl = "https://previews.123rf.com/images/balabolka/balabolka1404/balabolka140400814/27930119-r%C3%A9sum%C3%A9-vecteur-de-fond-ethnique-tribal-seamless.jpg"
  const signature = {
    fontFamily: 'Mrs Saint Delafield, cursive',
    fontSize: '40px',
    textAlign: 'center',
  };
  return (
    <>
      <div className=" relative shadow text-center border border-gray-200 dark:border-gray-700 overflow-auto border-amber-400 border-1 shadow-md">
      <div className="relative pt-10 pb-16 shadow overflow-hidden">
          <Image
            className="absolute bg-gray-800 bg-blend-color top-2 opacity-50 lg:top-0 lg:left-0 w-full h-[84px] object-cover"
            src={imageUrl}
            width={500}
            height={200}
            alt="tribal-pattern"
          />
            <div className="px-4 py-12">
            <div className="flex mb-6 mt-4">
              <p className="text-sm text-primary tracking-wide">
                Hi, my name is Glen. I am a software developer, designer &amp;
                creator from Papua New Guinea. I work in the nexus of the tech & rural development. This is my tiny space on the internet where I
                document &amp; share snippets of my perpertual learning &amp; self
                improvement journey.
              </p>
            </div>
            <Link href="/about">
              <button
                type="button"
                className=" py-2 px-6  outline outline-1  font-bold hover:outline-2 rounded-full text-xs hover:text-cyan-700 dark:hover:text-cyan-700"
              >
                More About Me...
              </button>
            </Link>
            <div className="mb-2 mt-6 pb-8 border-b dark:border-gray-600 border-dashed border-gray-200 ">
              <p className="pb-3 text-sm ">My Github Heatmap</p>
              <GitHubCalendar className="text-xs" username="glenhayoge" />
              <div className="pt-4">
                <p className="text-sm pb-4">Tech Skills and Competencies</p>
                <p className="text-xs border tracking-loose border-gray-500 p-3">Python, JavaScript/TypeScript, Flutter, Tailwind, Bulma, Bootstrap, NodeJs, ReactJS, Angular, Expo, NextJS, Astro, Django, MongoDB, Flask, Superbase, Vite, AWS, Serverless Infrastructures, PostGreSQL, SQL, Firebase, Redis, GCP, Git, Github, Github Actions, Docker and everything else in between 🚀</p>

              </div>
              <div className="mt-8">
                <p className="mb-6 text-sm text-cyan-700">
                  <strong className="italic">
                    “Really good software is never finished; it continues to
                    grow. If it doesn’t grow, it decays.”
                  </strong>
                  <br />
                  <span className="text-xs">— Melinda Varian, Software Engineer</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-6 my-6">
              <Link
                href="https://github.com/glenhayoge" target="_blank"
                className="text-gray-400 hover"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-github w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/glen-g-hayoge-089935104/" target="_blank"
                className="text-gray-400 hover"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-linkedin w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
              <Link
                href="https://stackoverflow.com/users/12071488/glenh" target="_blank"
                className="text-gray-400 hover"
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
              </Link>
              <Link href="https://twitter.com/ghayoge" target="_blank" className="text-gray-400 hover">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-twitter w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Link>

              <Link href="#" className="text-gray-400 hover">
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
              </Link>
            </div>
            <TimeAgoComponent />
          </div>
          <Image
            width={300} height={500}
            className="absolute bg-gray-800 bg-blend-color opacity-50 bottom-0 left-0 w-full h-16 object-cover"
            src={'https://previews.123rf.com/images/balabolka/balabolka1404/balabolka140400814/27930119-r%C3%A9sum%C3%A9-vecteur-de-fond-ethnique-tribal-seamless.jpg'}
            alt="tribal-pattern-2"
          />
          <Subscribe />
        </div>
        
      </div>

     
    </>
  );
}
ISideBar.displayName = "Newsletter"; // Adding the display name

export default ISideBar; // Exporting the component after assigning it to a variable
