import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  AlertCircle,
  Activity,
  Layers,
  Users
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Practical hardware & software engineering solutions built with microcontroller automation and web development.
        </p>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden glow-card"
          >
            {/* Top glowing ambient line */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Header: Category & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/50 text-cyan-400 border border-cyan-500/30">
                  {project.id === 'smart-aquarium' ? (
                    <Cpu className="w-3.5 h-3.5" />
                  ) : (
                    <Globe className="w-3.5 h-3.5" />
                  )}
                  {project.category}
                </span>

                {project.id === 'home-services' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium bg-purple-950/60 text-purple-300 border border-purple-800/60">
                    <Users className="w-3 h-3" />
                    Hackathon Project
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Key Implementation Highlights */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2.5 flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* If Home services: show household services chips */}
              {project.servicesIncluded && (
                <div className="mt-4 pt-3 border-t border-slate-800/60">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                    Services Supported:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.servicesIncluded.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-xs bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions & Placeholder Notice */}
            <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 text-xs font-medium transition-all w-full sm:w-auto"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              {project.isPlaceholderLink && (
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-mono">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Placeholder link (ready to update)</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Helpful note for Harsh as a beginner */}
      <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-cyan-400" />
          <span>
            Project links are currently set to your GitHub profile. You can plug in specific repo or live demo links anytime in <code className="text-cyan-300 font-mono">src/data/portfolioData.js</code>.
          </span>
        </span>
      </div>
    </section>
  );
}
