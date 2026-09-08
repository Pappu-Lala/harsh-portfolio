import React from 'react';
import { User, Cpu, Code2, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Engineering with Purpose & Precision
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Narrative Card */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
          <div className="space-y-4 text-slate-300 text-base leading-relaxed text-left">
            <p>
              I am a <strong className="text-cyan-400 font-medium">Computer Science and Engineering</strong> student 
              at <strong className="text-white font-medium">Lovely Professional University</strong> with an academic CGPA of 
              <span className="text-amber-400 font-semibold"> 8.51</span>.
            </p>
            <p>
              My journey in computing spans from low-level systems programming in 
              <span className="text-cyan-300"> C++</span> and <span className="text-cyan-300">C</span> to scripting 
              and automation in <span className="text-emerald-400">Python</span>. I have hands-on experience designing 
              IoT solutions with microcontrollers like the <span className="text-cyan-300">ESP32</span>, interfacing sensors, 
              and wiring hardware actuators.
            </p>
            <p>
              Alongside hardware integration, I enjoy building user-facing web platforms, having developed 
              an on-demand household services platform with my team in a competitive hackathon environment.
            </p>
          </div>

          {/* Core Strengths Checklist */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>C++ & Python Fundamentals</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Microcontroller IoT (ESP32)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Git & GitHub Workflow</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Hackathon Project Experience</span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics / Highlight Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all glow-card text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Degree Program</p>
                <h3 className="text-base font-bold text-white">B.Tech - CSE</h3>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Lovely Professional University
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all glow-card text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Academic Merit</p>
                <h3 className="text-2xl font-bold text-amber-400">8.51 <span className="text-xs font-normal text-slate-400">CGPA</span></h3>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Strong performance across computer science curriculum
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all glow-card text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Project Focus</p>
                <h3 className="text-base font-bold text-white">IoT & Web Platforms</h3>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              ESP32 automation, sensors, and full service-booking workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
