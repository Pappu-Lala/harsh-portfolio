import React from 'react';
import { ArrowRight, Github, Mail, Sparkles, FolderGit2, MapPin, GraduationCap, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
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
            Passionate about systems programming, IoT innovation, and software development. 
            Currently building hands-on solutions ranging from ESP32 microcontroller automation 
            to interactive web platforms, driven by clean code and problem-solving.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* GitHub Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all text-sm sm:text-base"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
            </a>

            {/* Contact Me Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 transition-all text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Info Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>CGPA: 8.14</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Punjab, India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>C++ • Python • C • Git</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Developer Terminal Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1424]/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl group">
            {/* Ambient terminal top bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>harsh_profile.cpp</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">UTF-8</span>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-left space-y-1">
              <div>
                <span className="text-pink-400">#include</span> <span className="text-emerald-300">&lt;iostream&gt;</span>
              </div>
              <div>
                <span className="text-pink-400">#include</span> <span className="text-emerald-300">&lt;vector&gt;</span>
              </div>
              <div className="text-slate-500">// Personal developer profile</div>
              <div className="pt-2">
                <span className="text-cyan-400">struct</span> <span className="text-amber-300">SoftwareEngineer</span> &#123;
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">std::string</span> name = <span className="text-emerald-300">"Harsh Yadav"</span>;
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">std::string</span> university = <span className="text-emerald-300">"LPU"</span>;
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">double</span> cgpa = <span className="text-amber-400">8.14</span>;
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">std::vector&lt;std::string&gt;</span> skills = &#123;
              </div>
              <div className="pl-8 text-emerald-300">
                "C++", "Python", "C", "Git", "ESP32"
              </div>
              <div className="pl-4">&#125;;</div>
              <div>&#125;;</div>
              <div className="pt-2">
                <span className="text-pink-400">int</span> <span className="text-blue-400">main</span>() &#123;
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">std::cout</span> &lt;&lt; <span className="text-emerald-300">"Ready to create impact!"</span>;
              </div>
              <div className="pl-4">
                <span className="text-pink-400">return</span> <span className="text-amber-400">0</span>;
              </div>
              <div>&#125;</div>
            </div>

            {/* Bottom status line */}
            <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Compiled successfully
              </span>
              <span>LPU • CSE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
