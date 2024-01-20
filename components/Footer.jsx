import Image from "next/image";
import Link from 'next/link'

export default function Footer() {

  return (
    <section >
      {/* <p className="flex flex-wrap dark:text-gray-600 text-gray-400  justify-center mb-4 mt-10">
        You've Reached the Bottom of the Page 👋
      </p> */}

      <div className=" px-2 py-12 mx-auto space-y-8 overflow-hidden sm:px-2 lg:px-4 border-t dark:border-gray-700 border-gray-200 ">
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GlenGH Logo</span>
            <svg
              className="w-16 h-16  border-2 bg-gray-400 dark:bg-yellow-400 border-gray-500 rounded-full dark:border-yellow-400 hover:bg-gray-900"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 233.08 233.08"
            >
              <circle cx="116.54" cy="116.54" r="116.54" fill="currentColor" className="text-gray-200 dark:text-black bg-gray-400 dark:bg-yellow-400" />

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
          </Link>
        </div>
        <p className="flex flex-wrap text-center dark:text-gray-600 text-gray-400 justify-center text-xs mb-4 mt-10">
          Crafted by GlenH with 🔥 using
          <span> <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
           

          >
            <path d="M13.785 11.245 A1.785 1.785 0 0 1 12 13.03 A1.785 1.785 0 0 1 10.215 11.245 A1.785 1.785 0 0 1 13.785 11.245 z" />
            <path d="M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 001.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 01-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 00-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 01-.987 2.542z" />
            <path d="M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 00-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 00-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 011.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 002.021-2.477l.112-.16.194-.019a19.473 19.473 0 003.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 01-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 01-1.71 2.124z" />
            <path d="M17.58 8.695l-.395-.099a19.477 19.477 0 00-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0011.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 01-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 01-1.713-2.123 20.692 20.692 0 01-2.696-.419z" />
            <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 01-1.126-1.769 26.028 26.028 0 01-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 014.198 0l.194.019.113.16a25.136 25.136 0 012.1 3.628l.083.179-.083.177a24.742 24.742 0 01-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 001.832-3.168 23.916 23.916 0 00-1.832-3.168 23.877 23.877 0 00-3.667 0 23.743 23.743 0 00-1.832 3.168 24.82 24.82 0 001.832 3.168z" />
          </svg> </span> &nbsp;React &nbsp;
         
         
          <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em">
            <path
              fill="currentColor"
              d="M4.5 4.5l.405-.293A.5.5 0 004 4.5h.5zm3 9.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM5 12V4.5H4V12h1zm-.905-7.207l6.5 9 .81-.586-6.5-9-.81.586zM10 4v6h1V4h-1z"
            />
          </svg> &nbsp;
          NextJS, &nbsp;<svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"

          >
            <path d="M.79 7.12h22.42c.436 0 .79.355.79.792v8.176a.79.79 0 01-.79.79H.79a.79.79 0 01-.79-.79V7.912a.79.79 0 01.79-.791V7.12zm2.507 7.605v-3.122l1.89 1.89L7.12 11.56v3.122h1.055v-5.67l-2.99 2.99L2.24 9.056v5.67h1.055v-.001zm8.44-1.845l-1.474-1.473-.746.746 2.747 2.747 2.745-2.747-.746-.746-1.473 1.473v-4h-1.054v4zm10.041.987l-2.175-2.175 2.22-2.22-.746-.746-2.22 2.22-2.22-2.22-.747.746 2.22 2.22-2.176 2.177.746.746 2.177-2.177 2.176 2.175.745-.746z" />
          </svg> &nbsp;
          MDX, Tailwind CSS &nbsp;
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"

          >
            <path d="M18.5 9.51a4.22 4.22 0 01-1.91-1.34A5.77 5.77 0 0012 6a4.72 4.72 0 00-5 4 3.23 3.23 0 013.5-1.49 4.32 4.32 0 011.91 1.35A5.77 5.77 0 0017 12a4.72 4.72 0 005-4 3.2 3.2 0 01-3.5 1.51zm-13 4.98a4.22 4.22 0 011.91 1.34A5.77 5.77 0 0012 18a4.72 4.72 0 005-4 3.23 3.23 0 01-3.5 1.49 4.32 4.32 0 01-1.91-1.35A5.8 5.8 0 007 12a4.72 4.72 0 00-5 4 3.2 3.2 0 013.5-1.51z" />
          </svg> &nbsp;
          & ContentLayer. 
          Hosted on Netlify &nbsp;
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"

          >
            <path d="M17.13 9.68L22 11.8v-.11c-.07-.24-.28-.45-.7-.87l-2-2-2.07.87zM12.2 7.24a1.31 1.31 0 01.16.47l3 1.29a1.11 1.11 0 01.29-.14l.48-3-2-2-1.95 3.3s0 .05.02.08zM10.61 7a1.1 1.1 0 011-.2h.05l2.16-3.34-.66-.66c-.42-.42-.63-.63-.87-.7a1 1 0 00-.63 0c-.24.07-.45.28-.87.7l-3 3c.31.14 2.5 1.06 2.78 1.19zm-3.12 5.29h.27a1.45 1.45 0 01.29 0l2.38-3.68v-.06a1 1 0 01-.27-.95L9 7l-1.7-.73L5 8.61l2.51 3.66zm7.62-2.44v-.08a.59.59 0 010-.14l-2.86-1.27h-.05a1.05 1.05 0 01-.88.47h-.17s-.05 0-.06.05L8.73 12.5v.05l6.33-2.7s.05.02.05 0zm1.36-.91a.83.83 0 01.26.19l2-.84-1.89-1.87-.4 2.47zm-2.29 5.54A.91.91 0 0115 14v-.05l.54-3.37-.09-.08L9 13.15a2.76 2.76 0 01.08.27zM2 11.95zm12.14 3.18L8.92 14v.06L13.47 21l.42-.43c.15-.92.71-4.33.78-4.72a.9.9 0 01-.53-.72zm1.65.32a.88.88 0 01-.36.27l-.64 3.94L18.43 16zm1.07-5.13a.07.07 0 00-.06 0 .92.92 0 01-.61.34v.06l-.55 3.4a.88.88 0 01.34.62h.06l2.95.61 2.28-2.28a4.22 4.22 0 00.65-.74zM8.3 14.59a1.27 1.27 0 01-.86 0l-1.22 1.9 4.69 4.68a2.68 2.68 0 00.87.71 1 1 0 00.63 0 1.86 1.86 0 00.7-.54l-4.69-6.8zm4.71 6.82zm-6.62-7.82s.06 0 .06-.05 0 0-.06 0l-4.14-.86a7.07 7.07 0 00.51.54l1.36 1.36 2.27-1zm.28-.66a1.05 1.05 0 01.2-.27v-.06C6.1 11.4 5.3 10.24 4.5 9.07l-1.75 1.75c-.42.42-.63.63-.7.87A.75.75 0 002 12l4.67 1zm.17 1.33a.61.61 0 01-.07-.1L4.59 15l1.08 1.1 1.17-1.82s.01-.02 0-.02z" />
          </svg>
        </p>

        <div className="flex justify-center mt-8 space-x-6">
          <Link
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
          </Link>
          <Link
            href="https://www.linkedin.com/in/glen-g-hayoge-089935104/"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-linkedin w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Link>
          <Link
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
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-twitter w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">RSS</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-rss-fill w-5 h-5" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </Link>
        </div>
        <div className="text-center text-xs dark:text-gray-600 text-gray-400  ">
          &copy; GlenH.me Contents from 2018 - {new Date().getFullYear()}. <Link href="https://github.com/glenhayoge/glensea.com/" target="_blank">Open Source</Link>
        </div>
      </div>
    </section>
  );
}
