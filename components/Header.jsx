import React from "react";
import Image from "next/image";
import propic from "../assets/glens_color_avatar.png";
import styles from "../styles/header.module.css";
import Head from "next/head";
import tribalPattern from "../assets/topography.svg";
import Link from "next/link";
import Button from "../components/Button";

const subTitle = {
  fontFamily: "Nanum Pen Script, cursive",
  fontSize: "30px",
  textAlign: "center",
};
const signature = {
  fontFamily: "Mrs Saint Delafield, cursive",
  fontSize: "40px",
  textAlign: "center",
};

export default function Header() {
  return (
    <header className={styles.heroWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          priority
          src={tribalPattern}
          alt="Abstract tribal pattern background"
          style={{ objectPosition: "center" }}
<<<<<<< HEAD
          className="opacity-5 z-1 absolute top-0 left-0 w-full h-[520px] object-cover border border-b border-gray-700 dark:border-gray-800"
=======
          className="opacity-5 z-1 dark:opacity-10 absolute top-0 left-0 w-full h-[520px] object-cover border-b-4 border-gray-900 dark:border-gray-600"
>>>>>>> working-commit
        />
      </div>
    <section className="pb-8 pt-24 ">
        <div className="container px-4 md:px-10 sm:px-4 mx-auto ">
          <div className="flex flex-wrap items-stretch -m-8">
            <div className="w-full lg:w-8/12 lg:pl-20 md:px-8">
              <div className="md:px-2 px-4 overflow-hidden">
            <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl px-4 sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-yellow-500">•</span>developer
                <br />
                <span className="text-yellow-500">•</span>designer <span className="text-yellow-500">•</span>creator
              </h1>

              <div className="space-y-4 text-muted-foreground">
              <p className="mt-3 px-4 text-accent font-bold sm:mx-auto sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
              Bringing ideas to life through code and creativity. Passionate
              about building beautiful, functional and user-friendly digital
              experiences.
            </p>
              </div>
              <div className="inline-flex mt-8 sm:mt-10 gap-4">
              <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium dark:text-white bg-primary-700 hover:bg-yellow-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-lg">
                Hire My Service
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              <Link
                href="/about"
                className="inline-flex pointer-cursor z-10 items-center justify-center px-5 py-3 text-base font-medium border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-yellow-400 dark:focus:ring-gray-800 dark:hover:text-gray-800"
              >
                Know About Me
              </Link>
            </div>
            <div className="flex px-4 space-x-6 pt-8 mb-6 z-100 relative items-center mx-auto md:justify-none">
              <Link
                href="https://github.com/glenhayoge" target="_blank"
                 className="text-gray-100 hover bg-gray-500 p-2 rounded-full"
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
                className="text-gray-100 hover bg-gray-500 p-2 rounded-full"
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
                 className="text-gray-100 hover bg-gray-500 p-2 rounded-full"
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
              <Link href="https://twitter.com/ghayoge" target="_blank"  className="text-gray-100 hover bg-gray-500 p-2 rounded-full"
              >
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

              <Link href="#"  className="text-gray-100 hover bg-gray-500 p-2 rounded-full">
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
            </div> 
            </div>
            </div>
            </div>
            <div className="w-full lg:w-4/12 lg:pr-20 md:px-4 ">
            {/* Right Column - Image and Info */}
            <div className="relative">
            <Image
                src={propic}
                alt="Glen Hayoge"
                width={350}
                height={400}
                className="filter grayscale hover:grayscale-0 transition-all duration-300 z-10 rounded-2xl mx-auto"
                priority
              />
               <div className="absolute bottom-4 w-full flex items-center justify-center z-20">
                <span
                  style={signature}
                  className="text-white px-4 mx-auto py-1 text-3xl font-medium drop-shadow-lg"
                >
                  GlenGHayoge
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
     
       
   
      </section>
      {/* <div className={styles.imageWrapper}>
        <Image
          priority
          src={tribalPattern}
          alt="Abstract tribal pattern background"
          style={{ objectPosition: "center" }}
          className="opacity-5 z-1 dark:opacity-10 absolute top-0 left-0 w-full h-[520px] object-cover"
        />
      </div>
      <div className=" px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-6xl container mx-auto lg:ml-56">
            <h1 className="mb-4 md:my-12 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="block inline">
                {" "}
                <span className="text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  &#x2022;d
                </span>
                eveloper
              </span>
              <span className="block inline">
                {" "}
                <span className="text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  &#x2022;d
                </span>
                esigner{" "}
              </span>
              <span className="block  inline">
                {" "}
                <span className="text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  &#x2022;c
                </span>
                reator
              </span>
            </h1>
            <p className="mt-3 pl-5 text-base sm:mx-auto sm:mt-5  sm:text-lg md:mt-5 md:text-xl">
              Bringing ideas to life through code and creativity. Passionate
              about building beautiful, functional, and user-friendly digital
              experiences.
            </p>
            <div className="inline-flex mt-8 sm:mt-10 gap-4">
              <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium dark:text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-lg">
                Hire My Service
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              <Link
                href="/about"
                className="inline-flex pointer-cursor z-10 items-center justify-center px-5 py-3 text-base font-medium border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Know About Me
              </Link>
            </div>
          </div>
          <div className="mt-10 mb-4 lg:mt-0 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center max-w-xs md:max-w-sm">
              <Image
                src={propic}
                alt="Portfolio owner"
                width={350}
                height={400}
                className="filter grayscale hover:grayscale-0 transition-all duration-300 z-10"
                priority
              />
              <div className="absolute bottom-4 w-full flex items-center justify-center z-20">
                <span
                  style={signature}
                  className="text-white px-4 py-1 text-3xl font-medium drop-shadow-lg"
                >
                  GlenGHayoge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}
