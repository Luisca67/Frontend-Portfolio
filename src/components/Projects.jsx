import React from 'react';
import ProjectCard from './ProjectCard';
import chatbotXyra from '../assets/Chatbot-Xyra.jpeg';
import agenteInteligente from '../assets/Agente-inteligente.jpeg';
import plataformaWeb from '../assets/Plataforma-web-UNEG.jpeg';

const projects = [
  {
    id: 1,
    title: 'Chatbot Xyra',
    description: 'Chatbot that answers questions based on the document you provide. Currently in use by UNEG Chilemex',
    image: chatbotXyra,
    github_url: 'https://colab.research.google.com/drive/1JaX8__AiwfSMf0NeWM2wpyZEDUDfyYk1#scrollTo=jA3KSpXUK1iY',
    live_url: null,
    technologies: ['CSS3', 'Python', 'VS Code', 'HTML5'],
  },
  {
    id: 2,
    title: 'Intelligent agent that transcribes routine images into text',
    description: 'Creation of an intelligent agent that, when you show it images of healthy morning activities, describes the routine you provided based on the images.',
    image: agenteInteligente,
    github_url: 'https://colab.research.google.com/drive/10NRLnBtCnDix_pHrvaExu8Y9Z2clwyS_',
    live_url: null,
    technologies: ['Python'],
  },
  {
    id: 3,
    title: 'Web platform for UNEG',
    description: 'A web platform where students can upload their projects and use it as a portfolio. Teachers can also submit and grade assessments from there.',
    image: plataformaWeb,
    github_url: 'https://github.com/Desarrollo-Web-UNEG/projects-app-backend',
    live_url: 'https://projects-app-frontend.onrender.com/',
    technologies: ['NestJS', 'PostgreSQL', 'Git', 'GitHub', 'VS Code', 'Postman', 'JavaScript', 'Node.js'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 