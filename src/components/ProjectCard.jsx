import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.description}</p>
      <Link to={project.link} className="text-accent mt-2 inline-block">View Details</Link>
    </div>
  )
}
