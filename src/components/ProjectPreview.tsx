import { sitePath } from '../paths'
import type { Project } from '../types/project'

type ProjectPreviewProps = {
  projects: Project[]
  hoveredProject: Project | null
}

export function ProjectPreview({ projects, hoveredProject }: ProjectPreviewProps) {
  // Keep the layers mounted so leaving a row can finish fading its image out.
  return (
    <div className="project-preview" aria-hidden="true">
      {projects.map((project) => (
        <img
          key={project.id}
          className={`project-preview-image${hoveredProject?.id === project.id ? ' is-visible' : ''}`}
          src={sitePath(project.imageUrl)}
          alt=""
          width="128"
          height="128"
          decoding="async"
        />
      ))}
    </div>
  )
}
