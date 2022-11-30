import Link from "next/link";

// import pink from "../imges/pink.jpg";

// import CDNcard from "../component/CDNcard";
import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="navgationCard">
        <Link href="/">
          Back
        </Link>
      </div>
   
    </>
  );
}