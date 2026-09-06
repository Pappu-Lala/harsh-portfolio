import React from 'react';
import { Code, Terminal, Wrench, GitBranch, Github, Laptop, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Tools & Technologies
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Core programming languages and developer workflows utilized across software engineering and IoT projects.
        </p>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Category 1: Programming Languages */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Programming Languages</h3>
              <p className="text-xs text-slate-400">Core software & systems development</p>
            </div>
          </div>

          <div className="space-y-4">
            {skillsData.programmingLanguages.map((skill) => (
              <div 
                key={skill.name}
                className="group p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                    {skill.name === 'C++' ? 'C++' : skill.name === 'Python' ? 'Py' : 'C'}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {skill.highlight}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Developer Tools & Platforms */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Developer Tools & Workflow</h3>
              <p className="text-xs text-slate-400">Version control & development environment</p>
            </div>
          </div>

          <div className="space-y-4">
            {skillsData.toolsAndPlatforms.map((tool) => (
              <div 
                key={tool.name}
                className="group p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-950/60 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:scale-105 transition-all">
                    {tool.name === 'Git' && <GitBranch className="w-5 h-5" />}
                    {tool.name === 'GitHub' && <Github className="w-5 h-5" />}
                    {tool.name === 'VS Code' && <Laptop className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {tool.highlight}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
