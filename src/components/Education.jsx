import React from 'react';
import { GraduationCap, Award, Calendar, School, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Education & Qualifications
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Academic credentials demonstrating consistent performance and a solid foundation in computer science and sciences.
        </p>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-12 space-y-8 pl-6 sm:pl-10">
        {educationData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline bullet dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>

            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all glow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <School className="w-5 h-5 text-cyan-400 shrink-0" />
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.institution}
                  </h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 w-fit">
                  {item.status}
                </span>
              </div>

              <div className="text-slate-300 font-medium text-sm sm:text-base mb-2">
                {item.degree}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-3">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  <span>{item.score}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-3 leading-relaxed">
                {item.highlight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
