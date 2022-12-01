import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head> 
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
    </Head>
    <ThemeProvider enableSystem={true} attribute="class">  
    <Navbar/>
    <Component className="dark-main" {...pageProps} />
    <Footer/>
  </ThemeProvider>
  </>
  )
}
