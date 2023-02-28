import Image from "next/image";
import styles from "../styles/header.module.css"
// import faustina from '../assets/patterns.png';
import tribalPattern from '../assets/tribal-pattern.jpg';

const { heroContent, heroWrapper, imageWrapper } = styles;
const subTitle = { 
  fontFamily: 'Nanum Pen Script, cursive',
  fontSize: '30px',
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
          className="opacity-10 absolute bg-gray-800 bg-blend-color opacity-50 top-0 left-0 w-full h-80 object-cover"
        />
      </div>

      <div className={heroContent}>
      <div className="flex justify-center md:mt-15 space-y-6 my-8 items-center">
          <a href="#" className="text-gray-400 hover:text-gray-500 ">
            <span className="sr-only">GlenGH Logo</span>

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
          </a>
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
      </div>
    </div>
  );
}
export default Header;