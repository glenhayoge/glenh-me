import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "next-themes";
// import Head from "next/head";
import "../styles/globals.css";
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
// import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }) {
  return (
    <>
     {/* <Head> 
     <Link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></Link>
     <Link rel="stylesheet"href="https://unpkg.com/browse/boxicons@2.0.9/css/boxicons.min.css"></Link>
     <Link href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap" rel="stylesheet"></Link>
    </Head> */}
    <ThemeProvider enableSystem={true} attribute="class">  
    <Navbar/>
    <Component className="dark-main" {...pageProps} />
    <Footer/>
    {/* <Script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js" ></Script> */}
  </ThemeProvider>
  </>
  )
}
