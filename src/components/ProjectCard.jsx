import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="mb-3">{project.description}</p>
      <Link
        to={project.link}
        className="text-blue-500 hover:underline"
      >
        View Project
      </Link>
    </div>
  );
}

export default ProjectCard;
