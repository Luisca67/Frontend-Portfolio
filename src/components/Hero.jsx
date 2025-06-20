import React from 'react';
import profilePicture from '../assets/Profile-picture.jpeg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-transparent">
      {/* Botón Download CV */}
      <a
        href="https://drive.google.com/file/d/1Q9clxStY_S0QMrfFeEQ8gm4jlteV00BK/view?usp=drive_link" // Cambia esto por el enlace real de tu CV
        className="absolute top-8 left-8 bg-[#3C3A6E] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#5B57A6] transition-colors text-sm"
      >
        Download CV
      </a>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-16">
        {/* Texto a la izquierda */}
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