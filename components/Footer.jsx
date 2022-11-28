export default function Footer() {
  return (
    <section class="dark:bg-dark ">
      <p className="flex flex-wrap dark:text-gray-600 text-gray-400  justify-center mb-4 mt-10">
        You've Reached the Bottom of the Page 👋
      </p>
      
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 border-t dark:border-gray-600 border-gray-200 ">
        <div class="flex justify-center mt-8 space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">GlenGH Logo</span>
            {/* <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg> */}
            <svg
              class="w-16 h-16 fill-current text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 233.08 233.08"
            >
              <circle cx="116.54" cy="116.54" r="116.54" fill="#facd18" />
              <polygon
                points="122.1 27.11 200.36 66.64 186.08 72.49 121.24 38.08 54.66 61.05 104.12 93.08 135.66 81.07 114.2 67.8 128.14 63.09 159.93 82.29 101.63 106.97 29.54 58.97 122.1 27.11"
                fill="#363636"
                stroke="#363636"
                stroke-miterlimit="10"
                stroke-width="3"
              />
              <polygon
                points="90.04 122.38 93.71 210 82.13 200.93 79.62 127.81 32.4 94.96 35.3 150.93 54.16 164.88 52.54 141.06 61.02 146.75 63.3 187.37 27.32 159.2 23.42 78 90.04 122.38"
                fill="#363636"
                stroke="#363636"
                stroke-miterlimit="10"
                stroke-width="3"
              />
              <polygon
                points="111.3 121.58 127.32 115.29 129.09 150.6 192.87 126.54 191.66 90.03 205.84 84.46 207.34 172.15 195.43 178.38 194.21 141.87 129.87 167.13 131.69 203.09 115.85 210 111.3 121.58"
                fill="#363636"
                stroke="#363636"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </svg>
          </a>
        </div>
        <p className="flex flex-wrap text-center dark:text-gray-600 text-gray-400 justify-center text-xs mb-4 mt-10">
          Crafted by GlenH with 🔥 using React, NextJS, MDX, ContentLayer & Tailwind
          CSS. Hosted on Vercel
        </p>

        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://github.com/glenhayoge"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-github w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/glen-g-hayoge-089935104/"
            className="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-linkedin w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a
            href="https://stackoverflow.com/users/12071488/glenh"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">StackOverFlow</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-stack-overflow w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z" />
              <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-twitter w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">RSS</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-rss-fill w-5 h-5" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
          </a>

        </div>

        <div className="text-center text-xs dark:text-gray-600 text-gray-400  ">
          &copy; GlenH.me Contents from 2018 - {new Date().getFullYear()}. All
          Rights Reserved.
        </div>
      </div>
    </section>

    //   <footer className="px-4 sm:px-6 py-6 mt-24">
    //     <div className="text-center text-sm text-gray-500">
    //       <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> Glens Dev</span>   &copy; {new Date().getFullYear()}   All Rights Reserved
    //     </div>
    //   </footer>
  );
}
