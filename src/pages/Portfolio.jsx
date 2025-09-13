import ContactForm from '../components/ContactForm'
import ProjectCard from '../components/ProjectCard'
import projects from '../sample-data/projects.json'

export default function Portfolio() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        <div className="grid gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  )
}
