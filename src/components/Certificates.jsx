import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Certifications</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Verified Credentials
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Recognized certifications and skill assessment validations in programming and databases.
        </p>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 glow-card"
          >
            <div>
              {/* Card top badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${cert.badgeColor}`}>
                  {cert.type}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="mt-2 text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <span>Issuer:</span>
                <strong className="text-slate-200">{cert.issuer}</strong>
              </p>
            </div>

            {/* Verification Footer */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Credential
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
