import ProjectCard from '../components/ProjectCard'
import { projects } from '../sample-data/data'

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
