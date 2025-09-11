import React from 'react'
import { motion } from 'framer-motion'


export default function Contact(){
return (
<section id="contact" className="py-16">
<div className="container-center grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<motion.div initial={{x:-20, opacity:0}} whileInView={{x:0, opacity:1}} className="bg-slate-800/60 rounded-2xl p-6">
<h2 className="text-2xl font-bold">Get in touch</h2>
<p className="text-slate-300 mt-2">I’m open to new opportunities — feel free to reach out!</p>
<div className="mt-4">
<p className="text-slate-300">Email: <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a></p>
</div>
</motion.div>


<motion.form initial={{x:20, opacity:0}} whileInView={{x:0, opacity:1}} className="bg-slate-800/60 rounded-2xl p-6" onSubmit={(e)=>{e.preventDefault(); alert('Form submitted — replace with real handler')}}>
<div className="grid grid-cols-1 gap-3">
<input className="bg-slate-900/40 rounded-md p-3 placeholder:text-slate-400" placeholder="Your name" />
<input className="bg-slate-900/40 rounded-md p-3 placeholder:text-slate-400" placeholder="Email" />
<textarea className="bg-slate-900/40 rounded-md p-3 placeholder:text-slate-400" rows="5" placeholder="Message" />
<button type="submit" className="mt-2 px-4 py-2 bg-accent/90 rounded-md font-medium">Send message</button>
</div>
</motion.form>
</div>
</section>
)
}
