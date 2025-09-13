import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null)

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setUser(savedUser)
      return true
    }
    return false
  }

  const signup = (email, password) => {
    const newUser = { email, password }
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
