import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm mb-3">{project.description}</p>
      <Link
        to={`/projects/${project.id}`}
        className="text-accent hover:underline"
      >
        View Details →
      </Link>
    </div>
  )
}
