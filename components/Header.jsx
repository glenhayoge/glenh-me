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
        <div className="grid px-2 w-full md:px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className=" z-20 place-self-center lg:col-span-7 mb-8">
            <h1 className="max-w-xl mb-4 md:my-12 text-4xl lg:pl-6 font-extrabold tracking-tight text-gray-600 leading-none md:text-5xl xl:text-6xl dark:text-white"><span className="text-yellow-400">d</span>eveloper &#x2022; <span className="text-yellow-400">d</span>esigner &#x2022; <span className="text-yellow-400">c</span>reator</h1>
            <p className="max-w-2xl tracking-loose mb-6 font-light text-gray-500 lg:pl-5 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">a digest of a perpetual work in progress</p>
            <div className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center dark:text-white text-gray-500 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Hire My Service
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>

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
              className="z-10 cursor-pointer lg:pl-2 filter grayscale   hover:grayscale-0"
              alt="Profile Picture"
            />
            {/* <p className="mt-2 text-center">Your caption here</p> */}
            <h5 style={signature} className=" relative pl-6 lg:-mt-16 lg:pl-12 -mt-16 z-[100] lg:mb-2 text-gray-400 dark:text-gray-400 text-center text-md mb-2">
              GlenGHayoge
            </h5>
          </div>
        </div>
      </section>
    </div>

  );
}
export default Header;