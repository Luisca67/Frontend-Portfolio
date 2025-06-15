import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Luis Cabrera</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Start</a></li>
          <li><a href="#about" className="hover:text-gray-300">About me</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 