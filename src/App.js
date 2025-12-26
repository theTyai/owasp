import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar'; // Ensure path is correct
import Footer from './components/layout/Footer';

// Pages & Components
import Hero from './components/home/Hero';
import About from './components/home/About';
import Projects from './components/home/Projects';
import News from './components/home/News';
import PastEvents from './components/home/PastEvents';
import Contact from './components/home/Contact';
import Team from './pages/Team';

// Landing Page Component Assembly
const LandingPage = () => (
  <>
    <Hero />
    <About />
    <Projects />  {/* Added International Projects */}
    <News />      {/* Added News Feed */}
    <PastEvents />
    <Contact />   {/* Enhanced Contact */}
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;