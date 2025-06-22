import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Contact = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el mensaje
    console.log('Mensaje enviado:', {
      name: `${currentUser.first_name} ${currentUser.last_name}`,
      email: currentUser.email,
      message: message
    });
    setMessage('');
    alert('Mensaje enviado correctamente!');
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={`${currentUser.first_name} ${currentUser.last_name}`}
              className="w-full p-2 border rounded bg-gray-600 text-gray-300 cursor-not-allowed" 
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={currentUser.email}
              className="w-full p-2 border rounded bg-gray-600 text-gray-300 cursor-not-allowed" 
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 