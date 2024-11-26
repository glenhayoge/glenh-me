import Link from "next/link";
import ProfileBadge from "../components/ProfileBadge";
import Subscribe from "../components/Subscribe";
import AnimatedCards from "../components/AnimatedCards";

import { MdEmail } from "react-icons/md";
import { BsCodeSquare, BsBook } from "react-icons/bs";
import {
  FaStackOverflow,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaCog,
} from "react-icons/fa";
import { useEffect } from "react";

export default function IndexPage() {
  const signature = {
    fontFamily: "Mrs Saint Delafield, cursive",
    fontSize: "40px",
    textAlign: "center",
  };

  const patternUrl =
    "https://previews.123rf.com/images/balabolka/balabolka1404/balabolka140400814/27930119-r%C3%A9sum%C3%A9-vecteur-de-fond-ethnique-tribal-seamless.jpg";

  useEffect(() => { }, []);
  return (
    <>
      <section className="py-24 ">
        <div className="container lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6">
            <div className="w-full lg:w-8/12 px-8 lg:pl-20 md:px-8 ">
              <div className=" overflow-hidden">
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className=" mb-4 block text-left text-4xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    About Me.
                  </h1>
                </div>
                <div className="w-full h-full overflow-y-auto">
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    I am Glen, a software developer from Papua New Guinea. I use
                    this digital commonplace on the internet to express what I
                    have captured, organised and distilled. I love building
                    things and have a long list of abandoned side projects and
                    some stale piles of code that I hope to keep adding to.
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    The{" "}
                    <Link href="/projects">
                      <strong className="text-cyan-600">projects page</strong>
                    </Link>{" "}
                    highlights samples of my work. Read tutorials and other stuffs
                    on the{" "}
                    <Link href="/articles">
                      <strong className="text-cyan-600">articles page</strong>
                    </Link>.
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    This website is free from ads, affiliate links, tracking or
                    analytics, sponsored posts and paywalls. My sole motivation
                    for creating and maintaining this site is to share my
                    knowledge and express my ideas with the world. The open-sourced code for this website is available on github 👉🏽 <strong className="text-cyan-600">
                      <Link href="https://github.com/glenhayoge/glenh-me" target="_blank">
                        Link.
                      </Link>
                    </strong>
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    I see my contribution as a small step towards making the
                    internet a better place for everyone, and I hope to inspire
                    others to unleash their creativity and make their own
                    positive impact.
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    If you spot an error, or have any comments, suggestions or
                    questions about what I've written or if you basically want
                    to say hi to me, shoot an email to <strong className="text-cyan-600">
                      <Link href="mailto:gghayoge@gmail.com">
                        gghayoge at gmail.com
                      </Link>
                    </strong>
                  </p>
                </div>
                {/* what im doing */}
                <div className="flex py-8 justify-left text-left items-center   ">
                  <h2 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl ">
                    What I'm doing now
                  </h2>
                </div>
                <p className="px-4 pb-4 font-bold text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Current Projects
                </p>
                <div className="w-full h-full overflow-y-auto">
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex pl-4 ">
                      <BsCodeSquare className='mr-1.5 mt-1  text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p >
                        <Link
                          href="https://wantoea.com"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                          Wantoea
                        </Link>{" "}
                        : Small business management FOSS
                      </p>
                    </li>
                    <li className="flex pl-4">
                      <BsCodeSquare className='mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p>
                        <Link
                          href="https://fyntree.com"
                          target="_blank"
                          className="text-cyan-600 "
                        >
                          Fyntree
                        </Link>
                        : Farmers &amp; Artisans Marketplace
                      </p>
                    </li>
                    <li className="flex pl-4 ">
                      <BsCodeSquare className='mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0' />
                      <p>
                        <Link
                          href="https://raitstart.com"
                          target="_blank"
                          className="text-cyan-600"
                        >
                          RaitStart
                        </Link>: Small Business Resources Tools & Guides for PNG
                      </p>
                    </li>
                  </ul>
                  <p className="px-4 py-6 font-bold text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    Reading:
                  </p>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex pl-4 ">
                      <BsBook className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                      <p>The Girl with No Name-An Incredible Story of a Child Raised by Monkeys by Marina Chapman</p>
                    </li>
                    <li className="flex pl-4">
                      <BsBook className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                      <p> A Mind for Numbers by Barbara Oakley</p>
                    </li>
                    <li className="flex pl-4 ">
                      <BsBook className="mr-1.5  mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                      <p>Systems Thinking: Managing Chaos and Complexity by Jamshid
                        Gharajedaghi</p>
                    </li>
                  </ul>
                  <p className="px-4 py-6 text-base text-left leading-normal font-bold text-gray-500 dark:text-gray-400">
                    Learning:
                  </p>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex pl-4">
                      <i className="bx bx-play-circle mr-1.5  text-green-500 dark:text-green-400 flex-shrink-0"></i>
                       Flutter/Dart
                    </li>
                  </ul>
                  <p className="px-4 py-6 text-base text-left font-bold leading-normal  text-gray-500 dark:text-gray-400">
                    Watching:
                  </p>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex pl-4">
                      <i className="bx bx-play-circle mr-1.5  text-green-500 dark:text-green-400 flex-shrink-0"></i>
                      📺 Not Seriously watching movies at the moment
                    </li>
                  </ul>
                </div>
                {/* my dev tools */}
                <div className="flex my-12 justify-left text-left items-center  ">
                  <h5 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl">
                    My Dev Tools
                  </h5>
                </div>
                <p className="px-4 pb-4 font-bold text-base leading-normal text-gray-500 dark:text-gray-400">
                  Software
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex pl-4 ">
                    <FaCog className="mr-1.5 mt-1 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>
                      This site - React/NextJS - is hosted on
                      <Link href="https://netlify.com/" target="_blank">
                        &nbsp;<strong className="text-cyan-600">Netlify</strong>
                      </Link>
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <FaCog className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>
                      Coding:{" "}
                      <Link href="https://code.visualstudio.com/" target="_blank">
                        &nbsp;
                        <strong className="text-cyan-600">
                          Visual Studio Code
                        </strong>
                      </Link>
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <FaCog className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>
                      Terminal:
                      <Link href="https://iterm2.com/" target="_blank">

                        &nbsp;<strong className="text-cyan-600">iTerm2</strong>
                      </Link>
                      &nbsp;&&nbsp;
                      <Link href="https://hyper.is/" target="_blank">

                        &nbsp;<strong className="text-cyan-600">Hyper</strong>
                      </Link>
                    </p>
                  </li>
                  <li className="flex pl-4">

                    <FaCog className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>
                      Notes:
                      <Link href="https://keep.google.com/" target="_blank">

                        &nbsp;
                        <strong className="text-cyan-600">Google Keep</strong>
                      </Link>
                      &nbsp;&amp;
                      <Link href="https://obsidian.md/" target="_blank">

                        &nbsp;<strong className="text-cyan-600">Obsidian</strong>
                      </Link>
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <FaCog className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>
                      Browser:
                      <Link href="https://keep.google.com/" target="_blank">
                        &nbsp;<strong className="text-cyan-600">Brave</strong>
                      </Link>
                      &nbsp;&amp;
                      <Link href="https://obsidian.md/" target="_blank">
                        &nbsp;
                        <strong className="text-cyan-600">Google Chrome</strong>
                      </Link>
                    </p>
                  </li>
                </ul>
                <p className="px-4 py-6 font-bold text-base text-left leading-normal text-gray-500 dark:text-gray-400">
                  Hardware
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex pl-4">

                    <FaCog className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>
                      Coding Computer: Apple Macbook Pro M2 13" 2022
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <FaCog className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>Headphone: Logitec</p>
                  </li>
                  <li className="flex pl-4">
                    <FaCog className="mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <p>Desktop: Apple iMac / Dell AIO</p>
                  </li>
                </ul>
                {/* what im reading */}
                <div className="flex my-12 justify-left text-left items-center">
                  <h2 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl">
                    Reach out to me
                  </h2>
                </div>
                <p className="px-4 pb-8 text-base text-left leading-normal text-gray-500 dark:text-gray-400">
                  Channels you can use to reach out to me
                </p>
     
                <AnimatedCards/>
                {/* <div className="w-full h-full overflow-y-auto">
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className=" flex pl-4 ">
                      <FaGithub className="text-cyan-600 mt-1 mr-1.5" />
                      <Link
                        href="https://github.com/glenhayoge"
                        target="_blank"
                      >
                        {" "}
                        &nbsp;<strong className="text-cyan-600">Github</strong>
                      </Link>
                    </li>
                    <li className="flex pl-4 ">
                      <FaTwitter className="text-cyan-600 mt-1 mr-1.5" />
                      <Link href="https://twitter.com/ghayoge" target="_blank">
                        &nbsp;<strong className="text-cyan-600">Twitter</strong>
                      </Link>
                    </li>
                    <li className="flex pl-4 ">
                      <FaLinkedin className="text-cyan-600 mt-1 mr-1.5" />
                      <Link
                        href="https://www.linkedin.com/in/glen-g-hayoge-089935104/"
                        target="_blank"
                      >
                        {" "}
                        &nbsp;
                        <strong className="text-cyan-600">LinkedIn</strong>
                      </Link>
                    </li>
                    <li className="flex pl-4 ">
                      <FaStackOverflow className="text-cyan-600 mt-1   mr-1.5" />
                      <Link
                        href="https://stackoverflow.com/users/12071488/glenh"
                        target="_blank"
                      >
                        {" "}
                        &nbsp;
                        <strong className="text-cyan-600">StackOverFlow</strong>
                      </Link>
                    </li>
                    <li className="flex pl-4">
                      <FaGlobe className="text-cyan-600 mt-1 mr-1.5" />
                      Website:{" "}
                      <Link href="https://glensea.com">
                        {" "}
                        &nbsp;
                        <strong className="text-cyan-600">
                          You are looking at it!
                        </strong>
                      </Link>
                    </li>
                    <li className="flex pl-4">
                      <MdEmail className="text-cyan-600 mt-1 mr-1.5" />
                      Email: &nbsp;
                      <strong className="text-cyan-600">
                        <Link href="mailto:gghayoge@gmail.com">
                          gghayoge at gmail.com
                        </Link>
                      </strong>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="w-full lg:w-4/12  lg:pr-20 md:px-4 ">
              <ProfileBadge />
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
