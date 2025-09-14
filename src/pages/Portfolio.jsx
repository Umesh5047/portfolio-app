import React from 'react';
import { projects } from '../sample-data/data';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  return (
    <div className="grid gap-4 p-6 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}

export default Portfolio;
