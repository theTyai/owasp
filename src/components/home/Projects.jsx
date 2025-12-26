import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from 'react-icons/fa';
import { Reveal } from '../ui/Reveal';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#020617] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Portfolio</span>
               <h2 className="text-3xl font-bold text-white mb-2">Technical Initiatives</h2>
               <p className="text-slate-400">Open source contributions driven by student developers.</p>
            </div>
            {/* FIX 1: Added valid URL */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:block text-blue-500 hover:text-white transition-colors font-medium text-sm">
               View GitHub Organization →
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {projectsData.map((project, index) => (
            <Reveal key={index} width="100%">
              <div className="h-full flex flex-col group bg-[#0f172a] border border-[#1e293b] p-8 rounded-xl hover:border-blue-600/50 transition-all duration-300">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#1e293b] rounded-lg text-blue-500 border border-[#334155]">
                    <FaCodeBranch size={20} />
                  </div>
                  <div className="flex gap-4 text-slate-500">
                    <a href={project.link} className="hover:text-white transition-colors"><FaGithub size={20} /></a>
                    {/* FIX 2: Added valid URL */}
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaExternalLinkAlt size={18} /></a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between">
                   <span className="text-[10px] font-bold text-slate-300 bg-[#020617] px-3 py-1 rounded-full uppercase tracking-wider border border-[#1e293b]">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Public Repo</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;