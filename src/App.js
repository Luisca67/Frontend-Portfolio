import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import background from './assets/background.jpg';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="bg-black bg-opacity-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <TechStack />
              <Projects />
              {isAuthenticated && <Contact />}
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
