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
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>My digital commonplace on the internet  for logic based art & creativity</title>
        <meta name="viewport" content="width=device-width,   initial-scale=1"/>
        <meta name="title" content="My digital commonplace on the internet  for logic based art & creativity"/>
        <meta name="description" content="TL;DR : A digest of a perpetual work in progress"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.glenh.me/"/>
        <meta property="og:title" content="My digital commonplace on the internet  for logic based art & creativity"/>
        <meta property="og:description" content="TL;DR : A digest of a perpetual work in progress"/>
        <meta property="og:image" type="image/jpeg" content="https://glenh.me/assets/ggh-meta-image.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.glenh.me/"/>
        <meta property="twitter:title" content="My digital commonplace on the internet  for logic based art & creativity"/>
        <meta property="twitter:description" content="TL;DR : A digest of a perpetual work in progress"/>
        <meta property="twitter:image"type="image/jpeg" content="https://glenh.me/assets/ggh-meta-image.jpg"/>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component className="dark-main" {...pageProps} />
        <Footer />
        <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
      </ThemeProvider>
    </>
  )
}
