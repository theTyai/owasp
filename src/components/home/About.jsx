import React from 'react';
import { Reveal } from '../ui/Reveal';
import { FaBullseye, FaRocket, FaHandHoldingHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#020617] border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Driven by Security</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We bridge the gap between academic theory and industry reality. 
              Our mission is to foster a culture of security-first development within the campus ecosystem.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {[
            { 
              icon: <FaRocket />, 
              title: "Mission", 
              desc: "To empower students with cutting-edge skills in secure coding, penetration testing, and software architecture through hands-on workshops." 
            },
            { 
              icon: <FaBullseye />, 
              title: "Vision", 
              desc: "To become the premier technical society at MANIT, producing world-class security engineers and researchers." 
            },
            { 
              icon: <FaHandHoldingHeart />, 
              title: "Values", 
              desc: "We prioritize open-source collaboration, ethical conduct, and mentorship, ensuring knowledge is shared freely across batches." 
            },
          ].map((item, i) => (
            <Reveal key={i} width="100%">
              {/* h-full ensures equal height */}
              <div className="h-full flex flex-col p-8 bg-[#0f172a] border border-[#1e293b] rounded-2xl hover:border-blue-600 transition-colors duration-300">
                <div className="w-14 h-14 bg-[#1e293b] rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6 border border-[#334155]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                {/* flex-grow pushes bottom content down */}
                <p className="text-slate-400 leading-relaxed text-sm flex-grow">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;