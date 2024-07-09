import Image from "next/image";
import styles from "../styles/header.module.css"
import tribalPattern from '../assets/topography.svg';
import Head from "next/head";
import Link from 'next/link'
import { motion } from "framer-motion";
import propic from "../assets/glens_color_avatar.png";

const { heroContent, heroWrapper, imageWrapper } = styles;
const subTitle = { 
  fontFamily: 'Nanum Pen Script, cursive',
  fontSize: '30px',
  textAlign: 'center',
 }; 
 const signature = { 
  fontFamily: 'Mrs Saint Delafield, cursive',
  fontSize: '40px',
  textAlign: 'center',
 };
const Header = () => {
  return (
    <div className={heroWrapper}>
      <div className={imageWrapper}>
        <Image
          priority
          src={tribalPattern}
          object-position="center"
          alt="background hero"
          className="opacity-5 z-1 dark:opacity-10 absolute bg-blend-color top-0 left-0 w-full lg:px-12 md:px-0 h-[520px] object-cover"
        />

      </div>
   
      <section className="dark:bg-black w-full ">
    <div class="grid px-2 w-full md:px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className=" z-20 place-self-center lg:pl-36 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-gray-600 leading-none md:text-5xl xl:text-6xl dark:text-white"><span class="text-yellow-400">d</span>eveloper &#x2022; <span class="text-yellow-400">d</span>esigner &#x2022; <span class="text-yellow-400">c</span>reator</h1>
            <p className="max-w-2xl tracking-loose mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">a digest of a perpetual work in progress</p>
            <div className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center dark:text-white text-gray-500 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Hire My Service
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </div>
            <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Know About Me
            </a> 
        </div>
        <div className="lg:mt-0 lg:col-span-4 lg:flex text-center flex-col items-center">

            <Image 
                  width={360}
                  height={240}
                  src={propic}
            className="z-10 cursor-pointer pl-8 filter grayscale hover:grayscale-0"
            />
            {/* <p className="mt-2 text-center">Your caption here</p> */}
            <h5 style={signature} className="lg:-mt-16 pl-12 -mt-6 z-40 text-gray-400 dark:text-gray-400 text-center text-md mb-2">
              GlenGHayoge
            </h5>
        </div>                
    </div>
</section>

      {/* <div className={heroContent}>
      <div className="flex justify-center md:mt-15 space-y-6 my-8 items-center">
      <Link href="#" className="text-gray-400 hover:text-gray-500 ">
            <span className="sr-only">GlenGH Logo</span>
            <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }} >
            <svg
              className="w-20 h-20  shadow shadow-2xl shadow-gray-800 dark:shadow-yellow-400 border-2 bg-gray-400 dark:bg-yellow-400 border-gray-500 rounded-full dark:border-yellow-400 hover:bg-gray-900"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 233.08 233.08"
            >
              <circle cx="116.54" cy="116.54" r="116.54" fill="currentColor"className="text-gray-200 dark:text-black bg-gray-400 dark:bg-yellow-400" />
              <polygon
                points="122.1 27.11 200.36 66.64 186.08 72.49 121.24 38.08 54.66 61.05 104.12 93.08 135.66 81.07 114.2 67.8 128.14 63.09 159.93 82.29 101.63 106.97 29.54 58.97 122.1 27.11"
                fill="currentColor"
                stroke="currentColor"
                className="text-black dark:text-yellow-400"
           
                strokeMiterlimit="10"
                strokeWidth="3"
              />
              <polygon
                points="90.04 122.38 93.71 210 82.13 200.93 79.62 127.81 32.4 94.96 35.3 150.93 54.16 164.88 52.54 141.06 61.02 146.75 63.3 187.37 27.32 159.2 23.42 78 90.04 122.38"
                fill="currentColor"
                stroke="currentColor"
                className="text-black dark:text-yellow-400"
                strokeMiterlimit="10"
                strokeWidth="3"
              />
              <polygon
                points="111.3 121.58 127.32 115.29 129.09 150.6 192.87 126.54 191.66 90.03 205.84 84.46 207.34 172.15 195.43 178.38 194.21 141.87 129.87 167.13 131.69 203.09 115.85 210 111.3 121.58"
                fill="currentColor"
                stroke="currentColor"
                className="text-black dark:text-yellow-400"
                strokeMiterlimit="10"
                strokeWidth="3"
              />
            </svg>
            </motion.div>
            </Link>
        </div>
       <div className="pb-8">
        <h2 className=" text-gray-800 text-center pt-8 px-4 tracking-wide sm:text-xl font-bold dark:text-gray-400 
        font-extrabold  bg-clip-text 
        ">
          A Digest of a Perpetual Work in Progress
        </h2>
        <p style={subTitle}className="text-xl sm:text-md text-center text-gray-500 dark:text-yellow-400 px-8 py-4">
        by a developer, designer & creator.
        </p>
        </div>
      </div> */}
    </div>
    
  );
}
export default Header;