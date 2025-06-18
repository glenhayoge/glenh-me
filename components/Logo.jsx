// import { LightningBoltIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Logo = () => {
  const subTitle = {
    fontFamily: "Nanum Pen Script, cursive",
    fontSize: "30px",
    textAlign: "center",
  };
  return (
    <Link href="/">
      <div className="my-10 flex items-center space-x-1">
        <p
          style={subTitle}
          className="-ml-10  text-xl sm:text-md text-center px-8 py-4 dark:text-yellow-400"
        >
          Glensea.com
        </p>
      </div>
    </Link>
  );
};
export default Logo;
