import { ExternalLink, Github, FileText } from "lucide-react"
import Link from "next/link"

export function ProjectCard({ name, description, techStack, demoUrl, githubUrl, blogUrl }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-neutral-200  transition-all hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800  dark:hover:border-neutral-700">
      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold text-balance text-neutral-900 dark:text-neutral-50">{name}</h3>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>

      <div className="px-6 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Tech Stack:</span>
          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                title={tech.name}
              >
                <span className="text-base">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 p-6 pt-2">
        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            <Github className="h-4 w-4" />
            Source
          </Link>
        )}

        {blogUrl && (
          <Link
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            <FileText className="h-4 w-4" />
            Article
          </Link>
        )}
      </div>
    </div>
  )
}
