import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Events", path: "/#events" },
    { name: "Projects", path: "/#projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-navy-950 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-bold text-white tracking-tight leading-none">
            OWASP
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
             link.name === "Team" ? (
               <Link key={i} to="/team" className={`text-sm font-medium transition-colors ${isActive('/team') ? 'text-brand-blue' : 'text-text-muted hover:text-white'}`}>
                 {link.name}
               </Link>
             ) : (
               <a key={i} href={link.path} className="text-sm font-medium text-text-muted hover:text-white transition-colors">
                 {link.name}
               </a>
             )
          ))}
          <a href="/#contact" className="px-5 py-2.5 bg-brand-blue hover:bg-blue-700 text-white text-sm font-semibold rounded transition-all shadow-lg shadow-blue-900/20">
            Join Chapter
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-text-muted">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            className="md:hidden bg-navy-950 border-b border-navy-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {links.map((link, i) => (
                <a key={i} href={link.path} onClick={() => setIsOpen(false)} className="text-text-muted hover:text-brand-blue font-medium text-lg border-b border-navy-800 pb-2">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;