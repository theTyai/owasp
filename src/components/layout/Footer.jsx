import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          <div className="col-span-1 md:col-span-1 space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-white">
              <FaShieldAlt size={24} className="text-blue-600" />
              <span className="text-xl font-bold tracking-tight">CyberSecurity <span className="text-blue-600">OWASP</span> Consortium</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">
              The official student chapter of OWASP at MANIT Bhopal. Fostering a secure digital future.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
                // FIX 1: Added valid URL
                <a key={i} href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-600 hover:bg-blue-600 transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="text-white font-bold mb-6">Chapter</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="/team" className="hover:text-blue-500 transition-colors">Our Team</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
              <li><a href="#events" className="hover:text-blue-500 transition-colors">Events</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="https://owasp.org" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">OWASP.org</a></li>
              {/* FIX 2: Added valid URL placeholder */}
              <li><a href="/" className="hover:text-blue-500 transition-colors">Roadmap</a></li>
              <li><a href="/" className="hover:text-blue-500 transition-colors">Sponsorship</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>MANIT, Bhopal<br/>M.P. 462003</li>
              <li><a href="mailto:owasp@manit.ac.in" className="text-blue-500 hover:underline">owasp@manit.ac.in</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; {new Date().getFullYear()} OWASP MANIT.</p>
          <p>Developed by <span className="text-white font-medium">Chapter Web Team</span>.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;