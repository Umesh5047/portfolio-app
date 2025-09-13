import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { storage } from '../utils/storage'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const saved = storage.get('authUser')
    if (saved) setUser(saved)
  }, [])

  const signup = (username, email, password) => {
    const newUser = { username, email, password }
    storage.set('authUser', newUser)
    setUser(newUser)
    navigate('/portfolio')
  }

  const login = (email, password) => {
    const saved = storage.get('authUser')
    if (saved && saved.email === email && saved.password === password) {
      setUser(saved)
      navigate('/portfolio')
    } else {
      alert('Invalid credentials')
    }
  }

  const logout = () => {
    setUser(null)
    storage.remove('authUser')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
