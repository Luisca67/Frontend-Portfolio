import React from 'react';
import chatbotXyra from '../assets/Chatbot-Xyra.jpeg';
import agenteInteligente from '../assets/Agente-inteligente.jpeg';
import plataformaWeb from '../assets/Plataforma-web-UNEG.jpeg';
import defaultImage from '../assets/image-projects.png';
import html from '../assets/tech/html.svg';
import css from '../assets/tech/css.svg';
import javascript from '../assets/tech/javascript.svg';
import git from '../assets/tech/git.svg';
import github from '../assets/tech/github-logo.svg';
import nodejs from '../assets/tech/nodejs.svg';
import laravel from '../assets/tech/laravel.svg';
import postgresql from '../assets/tech/postgresql.svg';
import python from '../assets/tech/python.svg';
import postman from '../assets/tech/postman.svg';
import mariadb from '../assets/tech/mariadb.svg';
import vscode from '../assets/tech/vscode.svg';
import nestjs from '../assets/tech/nestjs.svg';

const imageMap = {
  'Chatbot Xyra': chatbotXyra,
  'Agente inteligente que transcribe imagenes de rutinas a texto': agenteInteligente,
  'Plataforma web para la UNEG': plataformaWeb,
};

const techIcons = {
  'HTML5': html,
  'CSS3': css,
  'JavaScript': javascript,
  'Git': git,
  'GitHub': github,
  'Node.js': nodejs,
  'Laravel': laravel,
  'PostgreSQL': postgresql,
  'Python': python,
  'Postman': postman,
  'MariaDB': mariadb,
  'VS Code': vscode,
  'NestJS': nestjs,
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
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies && project.technologies.map((tech) => (
            <span key={tech} className="flex items-center gap-1 bg-white bg-opacity-20 rounded px-2 py-1 text-xs text-white">
              {techIcons[tech] && <img src={techIcons[tech]} alt={tech} className="w-5 h-5" />} {tech}
            </span>
          ))}
        </div>
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mr-4">Code</a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Live</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 