// import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import Link from "next/link";
import Script from "next/script";

import "../styles/globals.css";
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import "@fontsource/mrs-saint-delafield";
import "@fontsource/nanum-pen-script";
// import 'boxicons';


// import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
     {/* <link rel="stylesheet"href="https://unpkg.com/browse/boxicons@2.0.9/css/boxicons.min.css"/> */}
     {/* <Link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/> */}
     </Head>
    <ThemeProvider enableSystem={true} attribute="class">  
    <Navbar/>
    <Component className="dark-main" {...pageProps} />
    <Footer/>
    <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
  </ThemeProvider>
  </>
  )
}
