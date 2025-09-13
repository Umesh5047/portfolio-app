import { useParams } from 'react-router-dom'
import projects from '../sample-data/projects.json'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === id)

  if (!project) return <p>Project not found</p>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer" className="text-accent hover:underline">
        Visit Project →
      </a>
    </div>
  )
}
