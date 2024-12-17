import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Login from './components/Login'; // Modal component

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // State to show/hide login modal

  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar onLogoClick={() => setShowLogin(true)} /> {/* Show modal on logo click */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Technologies />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        {showLogin && (
          <Login
            closeModal={() => setShowLogin(false)} // Close modal
          />
        )}
      </div>
    </Router>
  );
};

export default App;
