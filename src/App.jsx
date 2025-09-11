import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Inject Google Font (Poppins)
    const id = 'gfont-poppins';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap';
      document.head.appendChild(link);
    }
    // set body font-family
    document.documentElement.style.setProperty('--app-font', "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial");
  }, []);

  const projects = [
    { id: 1, title: 'Portfolio Website', desc: 'Responsive portfolio with animations and contact form.', tech: ['React', 'Tailwind', 'Vercel'] },
    { id: 2, title: 'TaskForge', desc: 'CLI task manager with JSON persistence.', tech: ['Python', 'OOP', 'SQLite'] },
    { id: 3, title: 'Screen Recorder', desc: 'Browser screen recorder with effects and timer.', tech: ['JS', 'MediaRecorder', 'Canvas'] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800" style={{ fontFamily: 'var(--app-font)' }}>
      <header className="bg-white/70 backdrop-blur sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">BS</div>
            <div>
              <div className="text-lg font-semibold">B Sai Umesh</div>
              <div className="text-xs text-gray-500">Frontend Developer</div>
            </div>
          </a>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-sm hover:text-indigo-600">Home</a>
            <a href="#about" className="text-sm hover:text-indigo-600">About</a>
            <a href="#projects" className="text-sm hover:text-indigo-600">Projects</a>
            <a href="#contact" className="text-sm hover:text-indigo-600">Contact</a>
            <a href="#" className="inline-flex items-center gap-2 text-sm bg-indigo-600 text-white px-3 py-2 rounded-md shadow-sm hover:shadow-lg">Resume</a>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Clean, usable UI — crafted with care.</h1>
            <p className="mt-4 text-gray-600 max-w-xl">I build minimal, accessible, and responsive frontend interfaces for web apps and portfolios. My focus is performance, clarity, and delightful micro-interactions.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:scale-[1.02] transform transition">See Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100">Contact Me</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2">
                <strong className="text-gray-800">Role:</strong> Frontend Developer
              </div>
              <div className="inline-flex items-center gap-2">
                <strong className="text-gray-800">Location:</strong> India
              </div>
              <div className="inline-flex items-center gap-2">
                <strong className="text-gray-800">Availability:</strong> Open to work
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-lg">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-50">
                {/* Placeholder illustration - replace with actual hero image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 3v4M8 3v4M3 11h18" />
                </svg>
              </div>
              <div className="mt-4 text-sm text-gray-600">Clean UI mockup preview. Replace this with a screenshot or illustration from your actual project for stronger impact.</div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16">
          <h2 className="text-2xl font-semibold">About me</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">I'm a frontend developer focused on building accessible, performant, and easy-to-use interfaces. I prefer clear information hierarchy, consistent spacing, and components that feel predictable to users. I value testing, semantic HTML, and responsive design that works across devices.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard title="Experience" value="3+ yrs" />
            <StatCard title="Projects" value="12" />
            <StatCard title="Clients" value="5+" />
          </div>
        </section>

        <section id="projects" className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected projects</h2>
            <a href="#" className="text-sm text-indigo-600 hover:underline">View all</a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <article key={p.id} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 border rounded-full text-gray-600">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a href="#" className="text-sm text-indigo-600 hover:underline">Live</a>
                  <a href="#" className="text-sm text-gray-500 hover:underline">Code</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-gray-600">Have a project or just want to say hi? Send a message — I try to reply within 48 hours.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! This demo form does not send messages — integrate your API or email handler.')}}>
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-sm">
                    <div className="text-gray-700">Name</div>
                    <input required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                  </label>

                  <label className="text-sm">
                    <div className="text-gray-700">Email</div>
                    <input type="email" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                  </label>

                  <label className="text-sm">
                    <div className="text-gray-700">Message</div>
                    <textarea required rows={5} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                  </label>

                  <div>
                    <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:scale-[1.01] transition">Send message</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-4">
              <ContactCard title="Email" subtitle="bsa@example.com" />
              <ContactCard title="Location" subtitle="India" />
              <ContactCard title="Social" subtitle="Github / LinkedIn" />
            </div>
          </div>
        </section>

        <footer className="mt-16 py-8 border-t pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            <div>© {new Date().getFullYear()} B Sai Umesh. Built with care.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function StatCard({ title, value }){
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 font-semibold text-lg">{value}</div>
    </div>
  );
}

function ContactCard({ title, subtitle }){
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-1 font-medium">{subtitle}</div>
    </div>
  );
}

function MobileMenu(){
  // Simple client-side toggled menu
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label="Open menu" className="p-2 rounded-md border">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-3">
          <a href="#home" className="block py-2 text-sm">Home</a>
          <a href="#about" className="block py-2 text-sm">About</a>
          <a href="#projects" className="block py-2 text-sm">Projects</a>
          <a href="#contact" className="block py-2 text-sm">Contact</a>
        </div>
      )}
    </div>
  );
}
