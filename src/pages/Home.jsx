import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/sampleProjects' // make sure this path is correct

export default function Home() {
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
