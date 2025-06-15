import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Proyectos</h2>
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