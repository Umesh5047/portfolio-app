import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-slate-400">
      <div className="container mx-auto px-4">
        <div>
          © {new Date().getFullYear()} YourName — Built with React & Tailwind
        </div>
      </div>
    </footer>
  )
}
