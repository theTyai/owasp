import React from 'react';
import { Reveal } from '../ui/Reveal';

const Sponsors = () => {
  return (
    <section className="py-20 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-red-600 font-mono text-sm tracking-widest mb-4">/// NETWORK ALLIES</p>
          <h2 className="text-3xl font-bold text-white mb-12">Supported By</h2>
        </Reveal>

        {/* Sponsor Grid - Using Text Placeholders since we don't have images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
           {['RedHat', 'CrowdStrike', 'HackerOne', 'Offensive Security'].map((name, i) => (
             <Reveal key={i}>
               <div className="h-24 border border-zinc-800 flex items-center justify-center grayscale hover:grayscale-0 hover:border-red-600 transition-all duration-500 bg-zinc-900/30">
                 <span className="text-xl font-bold text-gray-300 font-mono">{name}</span>
               </div>
             </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;