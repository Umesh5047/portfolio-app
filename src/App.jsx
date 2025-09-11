import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<Home />
<About />
<Projects />
<Contact />
</main>
<Footer />
</div>
)
}
