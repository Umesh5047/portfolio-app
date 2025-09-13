import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(email, password)) {
      navigate('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" />
      <button type="submit" className="w-full bg-accent text-white py-2 rounded">Login</button>
    </form>
  )
}
