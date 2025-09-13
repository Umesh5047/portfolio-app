import ContactForm from '../components/ContactForm'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../sample-data/data'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
      <ContactForm />
    </div>
  )
}
