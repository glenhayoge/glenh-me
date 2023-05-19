import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Mobilenav from "../components/MobileNav";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
//MobileNav
<Mobilenav />;
// main navbar
export default function Navbar() {
  // dark light mode feature
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="text-xl  xl:grid place-items-center w-8 h-8 text-yellow-500 bg-gray-200 dark:bg-dark-third  rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="text-xl  xl:grid place-items-center w-8 h-8 text-gray-500 bg-gray-200 dark:bg-dark-third  rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  //   sticky transparent navbar
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding,setPadding] = useState(30);
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
    <nav
      className="flex filter lg:px-32 px-9 py-4 h-20 items-center bg-gray-200 dark:bg-gray-800/25 navbar"
      style={{
        background: `${backgroundTransparacy}`,
        boxShadow: `${boxShadow} 0px 0px 20px 6px`,
      }}
    >
      {" "}
      <Mobilenav open={open} setOpen={setOpen} />
      <div className="w-4/12 lg:pl-44 md:px-8 flex items-left ">
        <Logo/>
        {/* h-48 md:h-48 w-48 mt-4  */}
      </div>
      <div className="w-8/12 lg:pr-44 md:px-8 flex justify-end items-center ">
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
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-800 dark:bg-gray-500  rounded  transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-800 dark:bg-gray-500  rounded  transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
        <div className="hidden md:flex text-gray-600 items-center dark:text-gray-400">
          <NavLink to="/articles">Blog</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/snippets">Snippets</NavLink>
          <NavLink to="/about">About</NavLink>
          <span className="ml-4">{renderThemeChanger()} </span>
        </div>
      </div>
    </nav>
  );
}
