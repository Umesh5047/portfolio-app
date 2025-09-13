import { useParams } from 'react-router-dom'
import { projects } from '../sample-data/data'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id.toString() === id)

  if (!project) return <p>Project not found</p>

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded my-4" />
      <p>{project.description}</p>
    </div>
  )
}
