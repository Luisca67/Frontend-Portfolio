import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const result = register(formData);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <section className="py-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Registro</h2>
          {error && <p className="bg-red-500 text-white text-center p-2 rounded mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="first_name">Nombre</label>
              <input 
                type="text" 
                id="first_name" 
                name="first_name"
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
                value={formData.first_name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="last_name">Apellido</label>
              <input 
                type="text" 
                id="last_name" 
                name="last_name"
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
                value={formData.last_name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="bio">Biografía</label>
              <textarea 
                id="bio" 
                name="bio"
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white resize-none" 
                rows="3"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Cuéntanos un poco sobre ti..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword"
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Registrarse
            </button>
          </form>
          <p className="text-center text-white mt-4">
            ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-400 hover:underline">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register; 