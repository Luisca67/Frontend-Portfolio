import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact</h2>
        <form className="max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 