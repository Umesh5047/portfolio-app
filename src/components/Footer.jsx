import React from 'react'


export default function Footer(){
return (
<footer className="py-6 text-center text-sm text-slate-400">
<div className="container-center">
<div>© {new Date().getFullYear()} YourName — Built with React & Tailwind</div>
</div>
</footer>
)
}
