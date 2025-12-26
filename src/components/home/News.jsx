import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Reveal } from '../ui/Reveal';
import { newsData } from '../../data/newsData';

const News = () => {
  return (
    <section className="py-24 bg-[#020617] border-t border-[#1e293b]">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Notice Board</span>
            <h2 className="text-3xl font-bold text-white">Latest Announcements</h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {newsData.map((news, index) => (
            <Reveal key={index} width="100%">
              <div className="group bg-[#0f172a] border border-[#1e293b] p-6 rounded-xl hover:border-blue-600/50 transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                
                {/* Date Block */}
                <div className="flex-shrink-0 w-full md:w-32 text-left md:text-center md:border-r border-[#1e293b] md:pr-6">
                  <span className="block text-sm font-bold text-white">{news.date.split(',')[0]}</span>
                  <span className="block text-xs text-slate-500">{news.date.split(',')[1]}</span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                   <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors">
                        {news.title}
                      </h3>
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded border ${
                        news.severity === 'CRITICAL' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                        'bg-blue-500/10 text-blue-500 border-blue-500/20'
                      }`}>
                        {news.severity}
                      </span>
                   </div>
                   <p className="text-sm text-slate-400 line-clamp-2">
                     {news.desc}
                   </p>
                </div>

                {/* Icon */}
                <div className="hidden md:block text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
                  <FaArrowRight />
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;