import React from 'react';
import { Reveal } from '../ui/Reveal';
import { FaPaperPlane, FaBuilding } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#020617] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Get in Touch</span>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-slate-400 text-lg">Visit our lab or drop us a message for collaborations.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-0 bg-[#0f172a] border border-[#1e293b] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* LEFT: MAP (Swapped Position) */}
          <div className="relative h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-[#1e293b]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2783857503463!2d77.4098973144455!3d23.232930284846743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e4395436fb%3A0x600b3e6e87291129!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1672345678901!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen="" 
              loading="lazy"
              title="MANIT Map"
            ></iframe>
            
            <div className="absolute bottom-6 left-6 bg-[#020617] border border-[#1e293b] p-4 rounded-lg shadow-xl opacity-90 max-w-xs">
              <div className="flex items-center gap-3 mb-2 text-white font-bold">
                <FaBuilding className="text-blue-600" /> MANIT Bhopal
              </div>
              <div className="text-xs text-slate-400">Link Road No. 3, Near Mata Mandir, Bhopal, Madhya Pradesh 462003</div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                <input type="text" className="w-full bg-[#020617] border border-[#1e293b] text-white px-4 py-3 rounded hover:border-blue-600 focus:border-blue-600 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#020617] border border-[#1e293b] text-white px-4 py-3 rounded hover:border-blue-600 focus:border-blue-600 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                <textarea rows="4" className="w-full bg-[#020617] border border-[#1e293b] text-white px-4 py-3 rounded hover:border-blue-600 focus:border-blue-600 focus:outline-none transition-colors"></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors flex items-center justify-center gap-2">
                Send Message <FaPaperPlane size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;