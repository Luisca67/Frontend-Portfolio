import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">Luis Cabrera</Link>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Start</a></li>
          <li><a href="#about" className="hover:text-gray-300">About me</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          {isAuthenticated && <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>}
          {!isAuthenticated ? (
            <>
              <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
              <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
            </>
          ) : (
            <li><button onClick={logout} className="hover:text-gray-300">Logout</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 