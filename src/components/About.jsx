import React from 'react'
import { motion } from 'framer-motion'


export default function About(){
return (
<section id="about" className="py-16">
<div className="container-center">
<motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl font-bold">About me</motion.h2>
<motion.div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>
<div className="md:col-span-2 bg-slate-800/60 rounded-2xl p-6">
<p className="text-slate-300">I am a frontend developer with experience building modern responsive applications using React. I like turning complex problems into intuitive interfaces. I pay attention to accessibility, performance and polish.</p>
<ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
<li>• React & Hooks</li>
<li>• Tailwind CSS</li>
<li>• JavaScript (ES6+)</li>
<li>• Framer Motion</li>
</ul>
</div>
<div className="bg-slate-800/60 rounded-2xl p-6 flex flex-col gap-3">
<div>
<h3 className="font-semibold">Contact</h3>
<p className="text-slate-300 text-sm">saiumesh2003@gmail.com</p>
</div>
<div>
<h3 className="font-semibold">NLB Nagar</h3>
<p className="text-slate-300 text-sm">Hyderabad, India</p>
</div>
<div>
<h3 className="font-semibold">Available for</h3>
<p className="text-slate-300 text-sm">Freelance / Full-time</p>
</div>
</div>
</motion.div>
</div>
</section>
)
}
