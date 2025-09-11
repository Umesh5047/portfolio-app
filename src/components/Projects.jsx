import React from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'


export default function Projects(){
return (
<section id="projects" className="py-16">
<div className="container-center">
<h2 className="text-2xl font-bold">Projects</h2>
<p className="text-slate-300 mt-2">Selected works — clean UI, responsive, and production friendly.</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
{projects.map(p => <ProjectCard key={p.id} project={p} />)}
</div>
</div>
</section>
)
}
