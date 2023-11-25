import { Head, Html, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
     <link rel="stylesheet"href="https://unpkg.com/browse/boxicons@2.0.9/css/boxicons.min.css"/>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
     </Head>
      <body className="overflow-x-hidden bg-white text-black antialiased transition-colors dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
     
    </Html>
  );
}

export default MyDocument;