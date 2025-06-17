import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import Script from "next/script";
import "../styles/globals.css";
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* SEO Meta Tags */}
          <meta name="description" content="Glensea is a modern and innovative website offering creative and web design solutions, focusing on high-quality content and development using the latest technology." />
          <meta name="keywords" content="Glensea, web design, creative solutions, technology, development" />
          <meta name="author" content="Glensea" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Glensea - Creative Web Solutions" />
          <meta property="og:description" content="Glensea provides modern, cutting-edge web design and development services for businesses of all sizes." />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://glensea.com" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Glensea - Creative Web Solutions" />
          <meta name="twitter:description" content="Providing innovative and creative web design solutions for businesses using the latest technology." />
          <meta name="twitter:image" content="/twitter-image.png" />
          <meta name="twitter:url" content="https://glensea.com" />

          <title>Glensea - Creative Web Solutions</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </div>
    </ThemeProvider>
  );
}
