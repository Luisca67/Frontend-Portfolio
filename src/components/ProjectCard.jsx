import React from 'react';
import chatbotXyra from '../assets/Chatbot-Xyra.jpeg';
import agenteInteligente from '../assets/Agente-inteligente.jpeg';
import plataformaWeb from '../assets/Plataforma-web-UNEG.jpeg';
import defaultImage from '../assets/image-projects.png';

const imageMap = {
  'Chatbot Xyra': chatbotXyra,
  'Agente inteligente que transcribe imagenes de rutinas a texto': agenteInteligente,
  'Plataforma web para la UNEG': plataformaWeb,
};

const ProjectCard = ({ project }) => {
  // Selecciona la imagen según el título, o usa la imagen por defecto
  const image = imageMap[project.title] || defaultImage;

  return (
    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm">
      <img src={image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mr-4">GitHub</a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Live</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 