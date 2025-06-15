import React from 'react';
import profilePicture from '../assets/Profile-picture.jpeg';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <img src={profilePicture} alt="Luis Cabrera" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
        <h1 className="text-4xl font-bold mb-2">Luis Cabrera</h1>
        <p className="text-xl">Full stack developer</p>
      </div>
    </div>
  );
};

export default Hero; 