import React from 'react'
import { motion } from 'framer-motion'


export default function ProjectCard({project}){
return (
<motion.a href={project.url} target="_blank" rel="noreferrer" whileHover={{scale:1.02}} className="block">
<div className="bg-slate-800/60 rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-lg transition">
<div>
<h3 className="font-semibold text-lg">{project.title}</h3>
<p className="text-slate-300 mt-2 text-sm">{project.description}</p>
</div>
<div className="mt-4 flex flex-wrap gap-2">
{project.tags.map(t => (
<span key={t} className="text-xs border border-slate-600 px-2 py-1 rounded">{t}</span>
))}
</div>
</div>
</motion.a>
)
}
