import React, { useState, useEffect } from 'react';
import { Reveal } from '../ui/Reveal';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaMicrophone, FaCamera } from 'react-icons/fa';

const events = [
  { title: "Cyber Summit '24", date: "Nov 12", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", desc: "A premier conference focusing on Cloud Security and AI Threats with 300+ attendees." },
  { title: "CTF Battle", date: "Oct 05", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800", desc: "Annual 24-hour hackathon. 50 teams competed to exploit vulnerabilities in a simulated banking environment." },
  { title: "Secure Coding", date: "Aug 20", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", desc: "Hands-on workshop teaching MERN stack developers to patch SQL Injections." }
];

const guests = [
  { name: "Dr. A. Sharma", role: "CISO, TechCorp", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=A" },
  { name: "Mr. R. Verma", role: "Bug Hunter", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=B" },
  { name: "Ms. P. Singh", role: "Sec Architect", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=C" },
  { name: "Ex-Google Eng.", role: "Cloud Security", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=D" },
];

const gallery = [
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600",
];

const PastEvents = () => {
  const [current, setCurrent] = useState(0);

  // Auto Scroll (3 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent(current === events.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? events.length - 1 : current - 1);

  return (
    <section id="events" className="py-24 bg-[#0f172a] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CAROUSEL */}
        <Reveal width="100%">
          <div className="flex justify-between items-center mb-8">
            <div>
               <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Timeline</span>
               <h2 className="text-3xl font-bold text-white">Recent Highlights</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="p-3 bg-[#020617] border border-[#1e293b] rounded-full hover:bg-blue-600 text-white transition-colors"><FaChevronLeft size={14}/></button>
              <button onClick={next} className="p-3 bg-[#020617] border border-[#1e293b] rounded-full hover:bg-blue-600 text-white transition-colors"><FaChevronRight size={14}/></button>
            </div>
          </div>

          <div className="bg-[#020617] border border-[#1e293b] rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[400px]">
            {/* Image (Fixed Width/Height) */}
            <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
               <img src={events[current].img} alt="" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
            </div>
            {/* Text Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
               <div className="flex items-center gap-2 text-blue-500 font-bold text-sm mb-4 uppercase tracking-wider">
                 <FaCalendarAlt /> {events[current].date}
               </div>
               <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{events[current].title}</h3>
               <p className="text-slate-400 leading-relaxed mb-8 text-lg">{events[current].desc}</p>
               <button className="self-start px-6 py-2 border border-[#1e293b] rounded text-sm font-bold text-white hover:bg-[#1e293b] transition-colors">
                 View Report
               </button>
            </div>
          </div>
        </Reveal>

        {/* GUESTS & GALLERY GRID */}
        <div className="mt-20 grid lg:grid-cols-3 gap-12">
          
          {/* Guests */}
          <div className="lg:col-span-1">
             <Reveal>
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <FaMicrophone className="text-blue-600" /> Past Speakers
               </h3>
               <div className="grid grid-cols-2 gap-4">
                 {guests.map((g, i) => (
                   <div key={i} className="bg-[#020617] border border-[#1e293b] p-4 rounded-lg text-center hover:border-blue-600/50 transition-colors">
                     <img src={g.img} alt={g.name} className="w-12 h-12 rounded-full mx-auto mb-2 bg-[#1e293b]" />
                     <h4 className="text-white font-bold text-sm">{g.name}</h4>
                     <p className="text-xs text-slate-500">{g.role}</p>
                   </div>
                 ))}
               </div>
             </Reveal>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-2">
            <Reveal>
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <FaCamera className="text-blue-600" /> Event Gallery
               </h3>
               <div className="grid grid-cols-3 gap-4 h-[260px]">
                 {gallery.map((img, i) => (
                   <div key={i} className="rounded-lg overflow-hidden border border-[#1e293b] group">
                     <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gallery" />
                   </div>
                 ))}
               </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PastEvents;