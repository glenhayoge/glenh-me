import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">  
    <Navbar/>
    <Component className="dark-main" {...pageProps} />
    <Footer/>
  </ThemeProvider>
  
  )
}
