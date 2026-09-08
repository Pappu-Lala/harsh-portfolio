import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0d14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-slate-100 font-mono font-bold tracking-tight text-lg hover:text-cyan-400 transition-colors"
        >
          <div className="h-9 w-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20 transition-all">
            <Terminal className="w-5 h-5 text-cyan-400" />
          </div>
          <span>
            harsh<span className="text-cyan-400">.yadav</span>()
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Quick Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Harsh_Yadav_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 text-xs font-semibold transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 text-sm font-medium transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-slate-800"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 font-medium text-sm transition-colors border border-transparent hover:border-slate-700"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-100 bg-slate-900 border border-slate-800"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 bg-slate-900 border border-slate-800"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`${import.meta.env.BASE_URL}Harsh_Yadav_CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold text-sm flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>CV</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
