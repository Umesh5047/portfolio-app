import React from 'react'
import { motion } from 'framer-motion'


export default function Home(){
return (
<section id="home" className="py-20">
<div className="container-center grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<motion.div initial={{x:-40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.6}}>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hello — I’m <span className="text-accent">YourName</span></h1>
<p className="mt-4 text-slate-300 max-w-xl">I build beautiful, accessible and responsive frontends with React. I focus on clean code, performance and a polished user experience.</p>
<div className="mt-6 flex gap-4">
<a href="#projects" className="inline-block px-5 py-3 bg-accent/90 rounded-lg font-medium hover:scale-105 transition">View projects</a>
<a href="#contact" className="inline-block px-5 py-3 border border-slate-700 rounded-lg">Contact</a>
</div>
</motion.div>
<motion.div initial={{x:40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.6}} className="flex justify-center">
<div className="w-72 h-72 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 p-1 shadow-xl">
<div className="w-full h-full rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
<div className="text-center">
<div className="w-28 h-28 rounded-full bg-slate-700/40 flex items-center justify-center text-3xl">👋</div>
<p className="mt-4 text-slate-300">Developer • UI/UX Enthusiast</p>
</div>
</div>
</div>
</motion.div>
</div>
</section>
)
}
