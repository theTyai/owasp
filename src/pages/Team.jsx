import React from 'react';
import { teamData } from '../data/teamData';
import { Reveal } from '../components/ui/Reveal';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TeamCard = ({ member }) => (
  <div className="w-full max-w-[280px] group bg-[#0f172a] border border-slate-800 hover:border-blue-600/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2">
    <div className="h-24 bg-gradient-to-r from-slate-900 to-[#020617]"></div>
    <div className="px-6 pb-6 -mt-12 flex flex-col items-center text-center">
      <img 
        src={member.img} 
        alt={member.name} 
        className="w-24 h-24 rounded-full object-cover border-4 border-[#0f172a] bg-slate-800 shadow-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors">{member.name}</h3>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{member.role}</p>
      </div>
      
      <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800 w-full justify-center">
         <a href={member.linkedin} className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={18} /></a>
         {/* FIX: Changed to mailto */}
         <a href="mailto:student@manit.ac.in" className="text-slate-400 hover:text-white transition-colors"><FaEnvelope size={18} /></a>
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <h1 className="text-4xl font-bold text-white mb-6">Leadership</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The visionaries and builders behind the chapter.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24">
          
          <Reveal width="100%">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] flex-1 bg-slate-800"></div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">Executive Board</h2>
              <div className="h-[1px] flex-1 bg-slate-800"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              {teamData.thirdYear.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </Reveal>

          <Reveal width="100%">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] flex-1 bg-slate-800"></div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">Core Team</h2>
              <div className="h-[1px] flex-1 bg-slate-800"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              {teamData.secondYear.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
};

export default Team;