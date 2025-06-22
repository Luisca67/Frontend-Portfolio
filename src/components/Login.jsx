import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (login(email, password)) {
      navigate('/');
    } else {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <section className="py-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Login</h2>
          {error && <p className="bg-red-500 text-white text-center p-2 rounded mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                className="w-full p-2 border rounded bg-white bg-opacity-20 text-white" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Iniciar Sesión
            </button>
          </form>
          <p className="text-center text-white mt-4">
            ¿No tienes una cuenta? <Link to="/register" className="text-blue-400 hover:underline">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login; 