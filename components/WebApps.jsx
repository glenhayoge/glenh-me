import Link from "next/link";

const projects = [
  {
    name: "glensea.com Website",
    description: "The source code of this website - https://glensea.com",
    link: "https://github.com/glenhayoge/glenh-me",
    linkText: "Source",
    techStack: [
      "devicon-react-original",
      "devicon-nextjs-original",
      "devicon-tailwindcss-plain",
      "devicon-github-original",
    ],
  },
  {
    name: "Dzagoo.com Website",
    description: "A digital solutions business website - https://dzagoo.com",
    link: "https://dzagoo.com",
    linkText: "Live site",
    techStack: [
      "devicon-javascript-plain",
      "devicon-php-plain",
      "devicon-css3-plain",
      "devicon-tailwindcss-plain",
      "devicon-github-original",
    ],
  },
  {
    name: "FPDA Website",
    description: "FPDA's official company website - https://fpda.com.pg",
    link: "https://fpda.com.pg",
    linkText: "Live Site",
    techStack: [
      "devicon-bulma-plain", 
      "devicon-django-plain", 
      "devicon-docker-plain", 
      "devicon-python-plain", 
      "devicon-javascript-plain", 
      "devicon-github-original"
    ]
  },
  {
    name: "FARMIS App",
    description: "FARMIS agri-advisory mobile application",
    link: "https://farmis.ai",
    linkText: "Live Site",
    techStack: [
      "devicon-angularjs-plain", 
      "devicon-django-plain", 
      "devicon-ionic-original", 
      "devicon-python-plain", 
      "devicon-docker-plain", 
      "devicon-github-original"
    ]
  },
  {
    name: "Penros Website",
    description: "A commissioned company website",
    link: "https://penroslogistics.com",
    linkText: "Live Site",
    techStack: [
      "devicon-react-original", 
      "devicon-nextjs-original", 
      "devicon-tailwindcss-plain", 
      "devicon-github-original"
    ]
  },
  {
    name: "Wantoea App",
    description: "Small Business Essential Accounting Tool",
    link: "https://wantoea.com",
    linkText: "Live Site",
    techStack: [
      "devicon-django-plain", 
      "devicon-docker-plain", 
      "devicon-python-plain", 
      "devicon-javascript-plain", 
      "devicon-tailwindcss-plain", 
      "devicon-github-original"
    ]
  },
  {
    name: "RaitStart Web App",
    description: "Small Business Guides & Digital Tools",
    link: "https://raitstart.com",
    linkText: "Live Site",
    techStack: [
      "devicon-django-plain", 
      "devicon-python-plain", 
      "devicon-javascript-plain", 
      "devicon-tailwindcss-plain", 
      "devicon-github-original", 
      "devicon-amazonwebservices-plain"
    ]
  }
];

export default function WebApps() {
  return (
    <div className="container mx-auto w-full mt-8 rounded-lg">
      <div className="pt-8 mb-8 px-4 text-gray-600">
        <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
          Mobile & Web apps
        </p>
        <p className="text-sm text-gray-400 mt-3">
          Here are selected web and mobile applications I crafted over the years. From personal projects to open source contributions to professional work.
        </p>
      </div>

      <div className="flex flex-wrap -m-4 text-center p-4">
        {projects.map((project, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="block rounded-lg outline outline-1 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600 max-w-sm text-center">
              <div className="py-3 px-6 font-bold border-b text-left border-gray-300 dark:border-gray-500 text-gray-500">
                <div className="text-center">{project.name}</div>
              </div>
              <div className="p-6 items-left flex-left">
                <p className="text-gray-500 text-center text-sm tracking-tight leading-tight mb-4">
                  {project.description}
                </p>
                <Link href={project.link} target="_blank">
                  <button className="bg-gray-500/25 hover:scale-[1.02] text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-xl inline-flex items-center">
                    <span>{project.linkText}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="py-3 text-xl px-6 border-t border-gray-300 dark:border-gray-500 text-gray-400">
                {project.techStack.map((tech, i) => (
                  <span key={i}>
                    <i className={`${tech} p-1`}></i>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href="https://github.com/glenhayoge">
        <button className="text-sm button text-gray-400 mx-3 mt-3 p-2 border rounded border-gray-500">
          View More Projects
        </button>
      </Link>
    </div>
  );
}


