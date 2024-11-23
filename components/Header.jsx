import React from 'react'
import Image from 'next/image'
import propic from "../assets/glens_color_avatar.png";
import styles from "../styles/header.module.css";
import Head from "next/head";
import tribalPattern from '../assets/topography.svg';
import Link from 'next/link';

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

export default function Header() {
  return (
    <header className={styles.heroWrapper} >
            <div className={styles.imageWrapper}>
        <Image
          priority
          src={tribalPattern}
          alt="Abstract tribal pattern background"
          style={{ objectPosition: 'center' }}
          className="opacity-5 z-1 dark:opacity-10 absolute top-0 left-0 w-full h-[520px] object-cover"
        />
      </div>
      <div className="container max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-lg">
            {/* <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Developer, </span>
              <span className="block text-primary xl:inline">Designer, </span>
              <span className="block xl:inline">Creator</span>
             
            </h1> */}
            <h1 className="max-w-2xl mb-4 md:my-12 text-3xl font-extrabold tracking-tight text-gray-600 leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="block inline"> <span className='text-yellow-400'>&#x2022;d</span>eveloper</span>
              <span className="block inline"> <span className='text-yellow-400'>&#x2022;d</span>esigner </span>
              <span className="block  inline"> <span className='text-yellow-400'>&#x2022;c</span>reator</span>
            </h1>
            <p className="mt-3 pl-5 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
              Bringing ideas to life through code and creativity. Passionate about building beautiful, functional, and user-friendly digital experiences.
            </p>
            {/* <div className="mt-8 sm:mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-150 ease-in-out"
              >
                Get in touch
              </a>
            </div> */}
            <div className="inline-flex mt-8 sm:mt-10 gap-4">
              <button
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-500 dark:text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-lg"
              >
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
  className="inline-flex pointer-cursor z-10 items-center justify-center px-5 py-3 text-base font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
>
  Know About Me
</Link>


            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex lg:justify-end hidden">
            <div className="relative w-full max-w-xs lg:max-w-xs xl:max-w-xs">
              <Image
                src={propic}
                alt="Portfolio owner"
                width={500}
                height={600}
                className="filter grayscale hover:grayscale-0"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4">
                <span style={signature} className="text-white px-4 py-2 rounded-full text-sm font-medium">
                  GlenGHayoge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


// import Image from "next/image";
// import styles from "../styles/header.module.css";
// import tribalPattern from '../assets/topography.svg';
// import Head from "next/head";
// import Link from 'next/link';
// import propic from "../assets/glens_color_avatar.png";

// const subTitle = {
//   fontFamily: 'Nanum Pen Script, cursive',
//   fontSize: '30px',
//   textAlign: 'center',
// };
// const signature = {
//   fontFamily: 'Mrs Saint Delafield, cursive',
//   fontSize: '40px',
//   textAlign: 'center',
// };

// const Header = () => {
//   return (
//     <div className={styles.heroWrapper}>
//       {/* Background Image Section */}
      // <div className={styles.imageWrapper}>
      //   <Image
      //     priority
      //     src={tribalPattern}
      //     alt="Abstract tribal pattern background"
      //     style={{ objectPosition: 'center' }}
      //     className="opacity-5 z-1 dark:opacity-10 absolute top-0 left-0 w-full h-[520px] object-cover"
      //   />
      // </div>

//       {/* Main Content Section */}
//       <section className="dark:bg-black w-full py-24">
//         <div className="grid w-full mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
//           {/* Text Content */}
//           <div className="z-20 place-self-center px-4 lg:col-span-7 mb-8 lg:py-24">
            // <h1 className="max-w-2xl mb-4 md:my-12 text-3xl font-extrabold tracking-tight text-gray-600 leading-none md:text-5xl xl:text-6xl dark:text-white">
            //   <span className="text-yellow-400"> &#x2022; d</span>eveloper
            //   <span className="text-yellow-400"> &#x2022; d</span>esigner <br />
            //   <span className="text-yellow-400"> &#x2022; c</span>reator
            // </h1>
//             <p className="max-w-2xl tracking-loose mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
//               Here's a digest of a perpetual work in progress
//             </p>

//             {/* Buttons */}
            // <div className="inline-flex flex-wrap gap-4">
            //   <button
            //     className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-500 dark:text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-lg"
            //   >
            //     Hire My Service
            //     <svg
            //       className="w-5 h-5 ml-2 -mr-1"
            //       fill="currentColor"
            //       viewBox="0 0 20 20"
            //       xmlns="http://www.w3.org/2000/svg"
            //     >
            //       <path
            //         fillRule="evenodd"
            //         clipRule="evenodd"
            //         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            //       />
            //     </svg>
            //   </button>
            //   <Link
            //     href="/about"
            //     className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            //   >
            //     Know About Me
            //   </Link>
            // </div>
//           </div>

//           {/* Profile Section */}
//           <div className="mt-0 col-span-4 flex flex-col items-center text-center mx-auto">
//             <Image
//               width={360}
//               height={240}
//               src={propic}
//               className="z-10 cursor-pointer filter grayscale hover:grayscale-0"
//               alt="Profile Picture of Glen G Hayoge"
//             />
//             <h5
//               style={signature}
//               className="relative -mt-16 z-20 mb-2 text-gray-400 dark:text-gray-400 text-md"
//             >
//               GlenGHayoge
//             </h5>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Header;
