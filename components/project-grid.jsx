import { ProjectCard } from "./project-card"

export function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
