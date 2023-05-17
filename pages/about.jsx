import Link from "next/link";
import ProfileBadge from "../components/ProfileBadge";
import Subscribe from "../components/Subscribe";
import { MdEmail } from "react-icons/md";
import { BsCodeSquare, BsBook } from "react-icons/bs";
import { FaStackOverflow,FaGithub,FaTwitter,FaLinkedin,FaGlobe,FaCog} from 'react-icons/fa';
import { useEffect } from "react";

export default function IndexPage() {
  const signature = { 
    fontFamily: 'Mrs Saint Delafield, cursive',
    fontSize: '40px',
    textAlign: 'center',
   };

  const patternUrl='https://previews.123rf.com/images/balabolka/balabolka1404/balabolka140400814/27930119-r%C3%A9sum%C3%A9-vecteur-de-fond-ethnique-tribal-seamless.jpg'
  
  useEffect(() => {}, []);
  return (
    <>
   
      <section className="py-24 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto ">
          <div className="flex flex-wrap items-stretch ">
            <div className="w-full lg:w-8/12 lg:pr-8 -mt-4">
              <div className=" rounded-lg overflow-hidden ">
                <div className="flex mt-4 justify-left text-left items-center">
                  <h1 className=" mb-4 block text-left text-4xl px-4 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl ">
                    About Me
                  </h1>
                </div>
                <div className="w-full h-full overflow-y-auto">
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    I am Glen, a software developer from Papua New Guinea. I use this digital commonplace
                    on the internet to express what I have captured, organised and distilled. I love building things and have a
                    long list of abandoned side projects and some stale piles of
                    code that I hope to keep adding to.
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    The <Link href="/projects"><strong className="text-cyan-600">projects page</strong></Link> has highlights of my work. Read tutorials
                    and other stuffs on the <Link href="/articles"><strong className="text-cyan-600">blog page</strong></Link> .
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  This website is free from ads, affiliate links, tracking or analytics, sponsored posts, and paywalls. My sole motivation for creating and maintaining this site is to share my knowledge and express my ideas with the world.
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  I see my contribution as a small step towards making the internet a better place for everyone, and I hope to inspire others to unleash their creativity and make their own positive impact.
                  </p>
                  <p className="px-4 py-2 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  If you spot an error, or have any comments, suggestions or questions about what I've written or if you basically want to say hi to me, shoot an email to <strong className="text-cyan-600"> <Link href="mailto:gghayoge@gmail.com">gghayoge at gmail.com</Link></strong> 
                 
                 
                  </p>
                </div>
                {/* what im doing */}
                <div className="flex py-8 justify-left text-left items-center   ">
                  <h2 className=" ml-4 border-l-2 dark:border-gray-300 border-dashed border-gray-500 mb-4 block text-left text-3xl tracking-tight font-bold text-3xl lg:text-3xl px-4  dark:text-gray-300 text-gray-600 sm:text-3xl ">
                    What I'm doing now
                  </h2>
                </div>
                <p className="px-4 pb-4 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                  Current Projects
                </p>
                <div className="w-full h-full overflow-y-auto">
                <ul class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex items-center px-8  px-8 ">
                <BsCodeSquare className='mr-1.5  text-green-500 dark:text-green-400 flex-shrink-0' />
                <Link href="https://wantoea.com" target="_blank" class="text-cyan-600 ">Wantoea</Link> : Small biz management FOSS here and there  📖 
                </li>
                <li class="flex items-center px-8  px-8">
                <BsCodeSquare className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' />
                <Link href="https://fyntree.com" target="_blank" class="text-cyan-600 ">Fyntree</Link>: Farmers &amp; Artisans marketplace app📈 
                </li>
                <li class="flex items-center px-8  px-8">
                <BsCodeSquare className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' />
                <Link href="https://raitstart.com" target="_blank" class="text-cyan-600  class">RaitStart</Link>: Small Business Resources Webapp  ⚒️ 
                </li>
              </ul>

               

                  <p className="px-4 py-6 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    What I am Reading:
                  </p>
                  <ul class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex items-center px-8  px-8 ">
                <BsBook className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' />
                    Deep Work by Cal Newport
                </li>
                <li class="flex items-center px-8  px-8">
                <BsBook className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' />
                  A Mind for Numbers by Barbara Oakley
                </li>
                <li class="flex items-center px-8  px-8">
  <BsBook className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' />
                    Systems Thinking: Managing Chaos and Complexity by Jamshid Gharajedaghi
                </li>
              </ul>
                  <p className="px-4 py-6 text-base text-left leading-normal  text-gray-500 dark:text-gray-400">
                    What I am watching:
                  </p>
                  <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center px-8 ">
                    <i className='bx bx-play-circle mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0' ></i>
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
                <p className="px-4 pb-4  text-base leading-normal text-gray-500 dark:text-gray-400">
                  Software
                </p>
                <ul class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex items-center px-8  px-8 ">
                <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>
                      This site - React/NextJS - is hosted on <Link href="https://netlify.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">Netlify</strong></Link>.
                </li>
                <li class="flex items-center px-8  px-8">
                <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>
                     Coding: <Link href="https://code.visualstudio.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">Visual Studio Code</strong></Link>
                </li>
                <li class="flex items-center px-8  px-8">
                <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>
                      Terminal: <Link href="https://iterm2.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">iTerm2</strong></Link>&nbsp;&&nbsp;<Link href="https://hyper.is/" target='_blank'> &nbsp;<strong className="text-cyan-600">Hyper</strong></Link>
                </li>
                <li class="flex items-center px-8  px-8">
                <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>
                      Notes: <Link href="https://keep.google.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">Google Keep</strong></Link>&nbsp;&amp;<Link href="https://obsidian.md/" target='_blank'> &nbsp;<strong className="text-cyan-600">Obsidian</strong></Link>
                </li>
                <li class="flex items-center px-8  px-8">
                <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>
                      Browser: <Link href="https://keep.google.com/" target='_blank'> &nbsp;<strong className="text-cyan-600">Brave</strong></Link>&nbsp;&amp;<Link href="https://obsidian.md/" target='_blank'> &nbsp;<strong className="text-cyan-600">Google Chrome</strong></Link>
                </li>
  
              </ul>
                  <p className="px-4 py-6 text-base text-left leading-normal text-gray-500 dark:text-gray-400">
                 Hardware
                </p>
                <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center px-8  px-8 ">
                    <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>
                      Coding Computer: Apple Macbook Pro 13" 2016
                    </li>
                    <li className="flex items-center px-8  px-8 ">
                    <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>

                      Headphone: Logitec
                    </li>
                    <li className="flex items-center px-8  px-8 ">
                    <FaCog  className='mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0'/>
                    Desktop: Apple iMac / Dell AIO
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
                <div className="w-full h-full overflow-y-auto">
                <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                    <li className=" flex items-center px-8 ">
                    <FaGithub className='text-cyan-600 text-xl mr-1.5'/>
                    <Link href="https://github.com/glenhayoge" target='_blank'> &nbsp;<strong className="text-cyan-600">Github</strong></Link>
                    </li>
                    <li className="flex items-center px-8 ">
                    <FaTwitter className='text-cyan-600 text-xl mr-1.5'/>
                    <Link href="https://twitter.com/ghayoge" target='_blank'> &nbsp;<strong className="text-cyan-600">Twitter</strong></Link>
                    </li>
                    <li className="flex items-center px-8 ">
                    <FaLinkedin className='text-cyan-600 text-xl mr-1.5'/>
                    <Link href="https://www.linkedin.com/in/glen-g-hayoge-089935104/" target='_blank'> &nbsp;<strong className="text-cyan-600">LinkedIn</strong></Link>
                    </li>
                    <li className="flex items-center px-8 ">
                    <FaStackOverflow className='text-cyan-600 text-xl mr-1.5'/>
                    <Link href="https://stackoverflow.com/users/12071488/glenh" target='_blank'> &nbsp;<strong className="text-cyan-600">
                   
                    StackOverFlow</strong></Link>
                    </li>
                    <li className="flex items-center px-8 ">
                    <FaGlobe className='text-cyan-600 text-xl mr-1.5'/>
                     Website: <Link href="https://glenh.me" > &nbsp;<strong className="text-cyan-600">You are looking at it!</strong></Link>
                    </li>
                    <li className="flex items-center px-8 ">
                    <MdEmail className='text-cyan-600 text-xl mr-1.5'/>
                     Email: &nbsp;<strong className="text-cyan-600"><Link href="mailto:gghayoge@gmail.com">gghayoge at gmail.com</Link></strong>
                    </li>
      
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 p-4 ">
            <ProfileBadge />
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
