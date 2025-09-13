import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-primary text-white px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-accent">MyPortfolio</Link>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-accent">Home</Link>
        {user && <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>}
        {user && <Link to="/projects" className="hover:text-accent">Projects</Link>}
        <ThemeToggle />
        {user ? (
          <>
            <span className="text-sm">{user.username}</span>
            <button
              onClick={logout}
              className="bg-accent text-primary px-3 py-1 rounded-lg hover:bg-cyan-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-accent">Login</Link>
            <Link to="/signup" className="hover:text-accent">Signup</Link>
          </>
        )}
      </div>
    </nav>
  )
}
