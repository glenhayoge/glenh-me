import { Head, Html, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
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
        <meta property="og:image" content="https://glenh.me/assets/ggh-meta-image.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.glenh.me/"/>
        <meta property="twitter:title" content="My digital commonplace on the internet  for logic based art & creativity"/>
        <meta property="twitter:description" content="TL;DR : A digest of a perpetual work in progress"/>
        <meta property="twitter:image" content="https://glenh.me/assets/ggh-meta-image.jpg"/>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
     <link rel="stylesheet"href="https://unpkg.com/browse/boxicons@2.0.9/css/boxicons.min.css"/>
     {/* <Link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/> */}
     </Head>
      <body className="overflow-x-hidden bg-white text-black antialiased transition-colors dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
     
    </Html>
  );
}

export default MyDocument;