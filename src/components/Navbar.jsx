import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary text-white">
      <Link to="/" className="font-bold text-xl">MyPortfolio</Link>
      <div className="flex gap-4">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
