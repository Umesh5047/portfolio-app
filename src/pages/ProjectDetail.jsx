import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../sample-data/data';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) return <div className="p-6">Project not found</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
