import React from 'react';
import ProjectCard from './ProjectCard';
import chatbotXyra from '../assets/Chatbot-Xyra.jpeg';
import agenteInteligente from '../assets/Agente-inteligente.jpeg';
import plataformaWeb from '../assets/Plataforma-web-UNEG.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'Chatbot Xyra',
      description: 'Chatbot que responde preguntas en base al documento que le proporciones. Actualmente en uso por la UNEG de Chilemex',
      image: chatbotXyra,
      link: 'https://colab.research.google.com/drive/1JaX8__AiwfSMf0NeWM2wpyZEDUDfyYk1#scrollTo=jA3KSpXUK1iY'
    },
    {
      title: 'Agente inteligente que transcribe imagenes de rutinas a texto',
      description: 'Creacion de un agente inteligente que al pasarle imagenes de actividades saludables en la mañana, te describe la rutina que le proporcionaste de acuerdo a las imagenes',
      image: agenteInteligente,
      link: 'https://colab.research.google.com/drive/10NRLnBtCnDix_pHrvaExu8Y9Z2clwyS_'
    },
    {
      title: 'Plataforma web para la UNEG',
      description: 'Plataforma web para que los estudiantes puedan subir sus proyectos y les sirva como portafolio. Ademas, los profesores pueden enviar evaluaciones y corregirlas desde ahi',
      image: plataformaWeb,
      link: 'https://github.com/Desarrollo-Web-UNEG'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 