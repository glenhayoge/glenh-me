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
          className="opacity-5 z-1 dark:opacity-10 absolute top-0 left-0 w-full h-[520px] object-cover"
        />
      </div>
    <section className="pb-8 pt-24 ">
        <div className="container px-4 md:px-10 sm:px-4 mx-auto ">
          <div className="flex flex-wrap items-stretch -m-8">
            <div className="w-full lg:w-8/12 lg:pl-20 md:px-8">
              <div className="md:px-2 px-4 overflow-hidden">
            <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-yellow-500">•</span>developer
                <br />
                <span className="text-yellow-500">•</span>designer <span className="text-yellow-500">•</span>creator
              </h1>

              <div className="space-y-4 text-muted-foreground">
              <p className="mt-3 pl-5 text-base sm:mx-auto sm:mt-5  sm:text-lg md:mt-5 md:text-xl">
              Bringing ideas to life through code and creativity. Passionate
              about building beautiful, functional, and user-friendly digital
              experiences.
            </p>
              </div>
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
