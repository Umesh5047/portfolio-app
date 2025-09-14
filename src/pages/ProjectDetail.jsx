import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/sampleProjects' // make sure path is correct

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => String(p.id) === id)

  if (!project) return <div className="text-center mt-6">Project not found</div>

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <img
        src={project.image || '/placeholder.png'}
        alt={project.title}
        className="w-full h-64 object-cover rounded mt-4"
      />
      <p className="mt-4">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 mt-4 inline-block"
        >
          Open Live
        </a>
      )}
    </div>
  )
}
