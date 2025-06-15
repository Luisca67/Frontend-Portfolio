import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-400 hover:text-blue-300">Ver Proyecto</a>
      </div>
    </div>
  );
};

export default ProjectCard; 