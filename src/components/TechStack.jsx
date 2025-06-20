import React from 'react';
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

const TechStack = () => {
  const techs = [
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: css },
    { name: 'JavaScript', logo: javascript },
    { name: 'Git', logo: git },
    { name: 'GitHub', logo: github },
    { name: 'Node.js', logo: nodejs },
    { name: 'Laravel', logo: laravel },
    { name: 'PostgreSQL', logo: postgresql },
    { name: 'Python', logo: python },
    { name: 'Postman', logo: postman },
    { name: 'MariaDB', logo: mariadb },
    { name: 'VSCode', logo: vscode }
  ];

  return (
    <section className="pt-6 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">My Tech Stack</h2>
        <p className="text-lg text-center max-w-2xl mx-auto text-gray-300">
        Technologies I've been working with recently.
        </p>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
              <span className="text-sm text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 