import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuth } from './context/AuthContext'

function App() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={user ? <Portfolio /> : <Navigate to="/login" />}
          />
          <Route
            path="/projects"
            element={user ? <Projects /> : <Navigate to="/login" />}
          />
          <Route
            path="/projects/:id"
            element={user ? <ProjectDetail /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
