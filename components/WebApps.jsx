import { ProjectGrid } from "./project-grid";
import Link from "next/link"

const TechIcons = {
  React: <i className="devicon-react-original colored" />,
  NextJS: <i class="devicon-nextjs-plain colored"></i>,
  Tailwind: <i className="devicon-tailwindcss-plain colored" />,
  GitHub: <i className="devicon-github-original" />,
  JavaScript: <i className="devicon-javascript-plain colored" />,
  PHP: <i className="devicon-php-plain colored" />,
  CSS3: <i className="devicon-css3-plain colored" />,
  Bulma: <i className="devicon-bulma-plain colored" />,
  Django: <i className="devicon-django-plain colored" />,
  Docker: <i className="devicon-docker-plain colored" />,
  Python: <i className="devicon-python-plain colored" />,
  Angular: <i className="devicon-angularjs-plain colored" />,
  Ionic: <i className="devicon-ionic-original colored" />,
  AWS: <i className="devicon-amazonwebservices-plain colored" />,
  Expo:<i class="devicon-expo-original"></i>,
  Android: <i class="devicon-android-plain colored"></i>,
  Apple: <i class="devicon-apple-original colored"></i>,
  Netlify: <i class="devicon-netlify-plain colored"></i>


}

const projects = [

  {
    name: "FPDA Website",
    description: "FPDA's official company website - https://fpda.com.pg",
    techStack: [
      { name: "Bulma", icon: TechIcons.Bulma },
      { name: "Django", icon: TechIcons.Django },
      { name: "Docker", icon: TechIcons.Docker },
      { name: "Python", icon: TechIcons.Python },
      { name: "JavaScript", icon: TechIcons.JavaScript },
      { name: "GitHub", icon: TechIcons.GitHub },
    ],
    demoUrl: "https://fpda.com.pg",
  },
  {
    name: "FARMIS",
    description: "FARMIS is a digital agriculture ecosystem connectivity platform for Papua New Guinea",
    techStack: [
      { name: "Expo", icon: TechIcons.Expo },
      { name: "React", icon: TechIcons.React },
      { name: "Django", icon: TechIcons.Django },
      { name: "Python", icon: TechIcons.Python },
      { name: "Android", icon: TechIcons.Android },
      { name: "Docker", icon: TechIcons.Docker },
      { name: "GitHub", icon: TechIcons.GitHub },
      { name: "AWS", icon: TechIcons.AWS },
      
    ],
    demoUrl: "https://farmis.ai",
  },
  {
    name: "MVF Project MIS",
    description: "IFAD's funded Market for Village Farmers Project MIS & Website",
    techStack: [
      { name: "Django", icon: TechIcons.Django },
      { name: "Python", icon: TechIcons.Python },
      { name: "JavaScript", icon: TechIcons.JavaScript },
      { name: "Tailwind", icon: TechIcons.Tailwind },
      { name: "GitHub", icon: TechIcons.GitHub },
      { name: "AWS", icon: TechIcons.AWS },
      { name: "Docker", icon: TechIcons.Docker },
    ],
    demoUrl: "https://fpdamvfproject.org",
  },
  {
    name: "Glensea.com",
    description: "The source code for this website - https://glensea.com",
    techStack: [
      { name: "React", icon: TechIcons.React },
      { name: "Next.js", icon: TechIcons.NextJS },
      { name: "Tailwind", icon: TechIcons.Tailwind },
      { name: "Netlify", icon: TechIcons.Netlify },
      { name: "GitHub", icon: TechIcons.GitHub },
    ],
    githubUrl: "https://github.com/glenhayoge/glenh-me",
  },
  {
    name: "Dzagoo",
    description: "A digital solutions business website - https://dzagoo.com",
    techStack: [
      { name: "JavaScript", icon: TechIcons.JavaScript },
      { name: "PHP", icon: TechIcons.PHP },
      { name: "CSS3", icon: TechIcons.CSS3 },
      { name: "Tailwind", icon: TechIcons.Tailwind },
      { name: "GitHub", icon: TechIcons.GitHub },
      { name: "Netlify", icon: TechIcons.Netlify },
    ],
    demoUrl: "https://dzagoo.com",
  },
  {
    name: "Wantoea",
    description: "A Small Business Invoice Management & Essential Accounting App",
    techStack: [
      { name: "Django", icon: TechIcons.Django },
      { name: "Docker", icon: TechIcons.Docker },
      { name: "Python", icon: TechIcons.Python },
      { name: "JavaScript", icon: TechIcons.JavaScript },
      { name: "Tailwind", icon: TechIcons.Tailwind },
      { name: "GitHub", icon: TechIcons.GitHub },
    ],
    demoUrl: "https://wantoea.com",
  },
  {
    name: "RaitStart",
    description: "PNG's Small Business Guides, Digital Tools and Resources Portal",
    techStack: [
      { name: "Next.js", icon: TechIcons.NextJS },
      { name: "React", icon: TechIcons.React },
      { name: "JavaScript", icon: TechIcons.JavaScript },
      { name: "Tailwind", icon: TechIcons.Tailwind },
      { name: "GitHub", icon: TechIcons.GitHub },
      { name: "AWS", icon: TechIcons.AWS },
    ],
    demoUrl: "https://raitstart.com",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-neutral-900 dark:text-neutral-50">
            Mobile & Web Apps
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Here are selected web and mobile applications I crafted over the years. From personal projects to open
            source contributions to professional work.
          </p>
        </div>

        <ProjectGrid projects={projects} />

        <div className="mt-12 flex justify-start">
          <Link
            href="https://github.com/glenhayoge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-transparent px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </main>
  )
}
