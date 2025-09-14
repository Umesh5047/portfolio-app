import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/sampleProjects' // update path if needed

export default function Projects() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
