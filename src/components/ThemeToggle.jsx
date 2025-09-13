import { useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 bg-accent rounded text-white"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}
