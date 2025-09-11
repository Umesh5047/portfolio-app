import React from 'react'
{label: 'Home', to: '#home'},
{label: 'About', to: '#about'},
{label: 'Projects', to: '#projects'},
{label: 'Contact', to: '#contact'}
]


export default function Navbar(){
return (
<motion.header initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className="backdrop-blur-md bg-black/30 sticky top-0 z-40">
<div className="container-center flex items-center justify-between h-16">
<a href="#home" className="font-bold text-xl tracking-tight">YourName</a>
<nav className="hidden md:flex gap-6 items-center">
{links.map(l=> (
<a key={l.to} href={l.to} className="text-slate-200 hover:text-white transition">{l.label}</a>
))}
<a href="#contact" className="ml-4 inline-block px-3 py-1 rounded-md border border-slate-700 hover:bg-slate-700 transition">Hire me</a>
</nav>
<MobileMenu />
</div>
</motion.header>
)
}


function MobileMenu(){
const [open,setOpen] = React.useState(false)
return (
<div className="md:hidden">
<button onClick={()=>setOpen(v=>!v)} aria-label="menu" className="p-2">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-200">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
{open && (
<div className="absolute right-4 mt-2 w-40 bg-slate-900/80 rounded-md p-3 shadow-lg">
{links.map(l=> <a key={l.to} href={l.to} className="block py-2">{l.label}</a>)}
<a href="#contact" className="block py-2">Hire me</a>
</div>
)}
</div>
)
}
