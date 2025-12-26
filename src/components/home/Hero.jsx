import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "OWASP";
  
  useEffect(() => {
    let timeout;
    if (text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-navy-950 overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-navy-700"></div>
          <span className="text-brand-blue font-bold tracking-[0.2em] text-xs uppercase">
            Official Technical Society
          </span>
          <div className="h-[1px] w-12 bg-navy-700"></div>
        </motion.div>

        {/* TYPEWRITER BOX */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="border-[4px] border-brand-blue bg-navy-950 px-12 py-8 relative shadow-2xl shadow-blue-900/10">
            {/* Corner Decorators */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-white"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-white"></div>

            <h1 className="text-6xl md:text-9xl font-bold text-white tracking-widest font-mono flex items-center">
              {text}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-brand-blue ml-2"
              >
                _
              </motion.span>
            </h1>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 text-3xl md:text-5xl text-text-muted font-bold tracking-tight"
        >
          CyberSecurity OWASP Consortium
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="mt-6 text-text-muted max-w-lg text-center text-lg leading-relaxed"
        >
          Fostering a culture of security-first engineering and open-source innovation.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }}
          className="mt-10 flex gap-4"
        >
           <a href="#about" className="px-8 py-3 bg-brand-blue text-white font-bold rounded hover:bg-blue-700 transition-colors">
             Learn More
           </a>
           <a href="/team" className="px-8 py-3 border border-navy-700 text-text-muted font-bold rounded hover:border-brand-blue hover:text-white transition-colors">
             Leadership
           </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;