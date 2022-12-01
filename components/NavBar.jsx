import { useEffect, useState } from 'react';
import Logo from '../components/logo';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-black transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter  `}
    >
      {/* <div className="flex pl-3 items-left  justify-left filter shadow-lg shadow-yellow-400/50 bg-gray-200  dark:bg-gray-800/25 h-20">
       
        <Logo />
      </div> */}
       <div className="w-3/12 flex items-left flex -mt-12 mb-16 pl-12  justify-left bg-white dark:bg-black h-20">
        <Logo />
      </div>
      <div className="flex flex-col ml-4 pl-8">
        <a
          className="text-xl font-medium my-4"
          href="/articles"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Articles
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/projects"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Projects
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
      </div>
      <div className="border-b mt-10 pb-4 pl-10">
        <h1 className="py-2">STAY IN TOUCH</h1>
      </div>
      <div className="flex justify-left mt-10 space-x-6 pl-8">
        <a
          href="https://github.com/glenhayoge"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-github w-6 h-6"
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
            className="bi bi-linkedin w-6 h-6"
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
            className="bi bi-stack-overflow w-6 h-6"
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
            className="bi bi-twitter w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
// main navbar
export default function Navbar() {

    // dark light mode feature
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="text-xl  xl:grid place-items-center w-8 h-8 text-yellow-500 bg-gray-200 dark:bg-dark-third  rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="text-xl  xl:grid place-items-center w-8 h-8 text-gray-500 bg-gray-200 dark:bg-dark-third  rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

//   sticky transparent navbar
const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);


  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter lg:px-32 px-9 py-4 h-20 items-center bg-gray-200 dark:bg-gray-800/25 navbar"
    style={{
        background: `${backgroundTransparacy}`,
        boxShadow: `${boxShadow} 0px 0px 20px 6px`,
      }}
    >{" "}
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-left ">
        <Logo />
      </div>
      <div className="w-9/12 flex justify-end items-center ">
        <span className="mr-4 md:hidden"> {renderThemeChanger()}</span>

        <div
          className=" z-50 flex relative w-5 h-5 flex-col justify-between items-right md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-gray-800 dark:bg-gray-500 rounded transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-800 dark:bg-gray-500  rounded  transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-800 dark:bg-gray-500  rounded  transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex text-gray-600 items-center dark:text-gray-400">
          <NavLink to="/articles">Blog</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/snippets">Snippets</NavLink>
          <NavLink to="/about">About</NavLink>
          <span className="ml-4">{renderThemeChanger()} </span>
          {/* <span className="text-xl place-item-center xl:grid place-items-center w-8 h-8 text-gray-500 bg-gray-200 dark:bg-dark-third rounded-full  cursor-pointer hover:bg-gray-300 relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:text p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
</svg>
          </span> */}
        </div>
      </div>
    </nav>
  );
}
