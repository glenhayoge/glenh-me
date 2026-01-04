import { ExternalLink, Github, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function ProjectCard({ name, description, techStack, demoUrl, githubUrl, blogUrl }) {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className="group relative overflow-hidden rounded-lg border border-neutral-100  transition-all hover:border-neutral-300 dark:border-neutral-800  dark:hover:border-neutral-700">
            <div className="space-y-2 p-6">
                <h3 className="text-xl font-semibold text-balance text-neutral-900 dark:text-neutral-50">{name}</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
            </div>

            <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 py-2 pt-2">
                    {demoUrl && (
                        <Link
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >

                            Demo
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    )}

                    {githubUrl && (
                        <Link
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900"
                        >

                            Source
                            <Github className="h-4 w-4" />
                        </Link>
                    )}

                    {blogUrl && (
                        <Link
                            href={blogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900"
                        >

                            Article
                            <FileText className="h-4 w-4" />
                        </Link>
                    )}
                </div>
                {/* <div className="flex flex-wrap items-center gap-3">
                    <div className="w-full">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full flex justify-between items-center p-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                        >
                            <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-50">Tech Stack</span>
                            <svg
                                className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-3 pt-2">
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1.5 rounded-sm bg-neutral-100 px-1.5 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                                            title={tech.name}
                                        >
                                            <span className="text-base">{tech.icon}</span>
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
