import React from 'react';
import profilePicture from '../assets/Profile-picture.jpeg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github-gray.svg';

const Hero = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center bg-transparent">
      {/* Botón Download CV */}
      <a
        href="https://drive.google.com/file/d/1_48i4IrjL-wyu7LRXCHt62fdPBiCdpFk/view?usp=sharing" 
        className="absolute top-8 left-8 bg-[#3C3A6E] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#5B57A6] transition-colors text-sm"
      >
        Download CV
      </a>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-16">
        <div className="flex-1 flex flex-col justify-center items-start text-left mt-24 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-2">
            Hi <span className="text-2xl">👋</span>,
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            My name is <br />
            <span>
              <span className="text-[#1EC6FF]">Luis</span>{' '}
              <span className="text-[#A259FF]">Cabrera</span>
            </span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            I build things for web
          </h3>
          
          {/* Redes Sociales */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://www.linkedin.com/in/luis-cabrera-0944092aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
            
            <a
              href="mailto:cabrerasluis67@gmail.com"
              className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-white font-medium">Gmail</span>
            </a>
            
            <a
              href="https://github.com/Luisca67"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
            >
              <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              <span className="text-white font-medium">GitHub</span>
            </a>
          </div>
        </div>
        {/* Foto de perfil a la derecha */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-12 md:mt-0">
          <div className="rounded-full p-2 bg-gradient-to-tr from-[#A259FF] to-[#1EC6FF] shadow-lg" style={{ boxShadow: '0 0 0 6px #181824' }}>
            <img
              src={profilePicture}
              alt="Luis Cabrera"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#181824]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 