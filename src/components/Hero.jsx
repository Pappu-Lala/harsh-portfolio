import React from 'react';
import { ArrowRight, Github, Mail, FolderGit2, MapPin, GraduationCap, Code2, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  const cvLink = `${import.meta.env.BASE_URL}Harsh_Yadav_CV.pdf`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introduction & CTA */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>B.Tech CSE @ Lovely Professional University</span>
          </div>

          {/* Headings */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
              {personalInfo.role}
            </h2>
          </div>

          {/* Professional Introduction */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            Passionate about systems programming, IoT innovation, and software engineering. 
            Building practical solutions from ESP32 microcontroller automation to modern web platforms, 
            driven by clean code and problem-solving.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* View CV Button */}
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 font-semibold transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base shadow-lg shadow-emerald-500/10"
            >
              <FileText className="w-4 h-4" />
              <span>View CV</span>
            </a>

            {/* GitHub Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all text-sm sm:text-base"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
            </a>

            {/* Contact Me Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 transition-all text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Info Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>CGPA: 8.51</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Punjab, India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>C++ • Python • C • IoT</span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Portrait Frame */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md group">
            {/* Glowing Aura / Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-60 transition duration-500" />

            {/* Portrait Card */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#0b101d]/95 border border-slate-700/70 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4] bg-slate-950">
                <img
                  src={profilePhoto}
                  alt="Harsh Yadav - Computer Science & Engineering Student"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient overlay at bottom for card badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge on Photo */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-cyan-300 text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Harsh Yadav</span>
                </div>

                {/* Bottom Badge on Photo */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-left flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-bold text-white">B.Tech CSE Student</p>
                    <p className="text-[11px] text-slate-400 font-mono">Lovely Professional University</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium font-mono">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>CGPA: 8.51</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
