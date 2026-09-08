import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare mailto link with form contents
    const mailtoSubject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Connect</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Feel free to reach out for engineering opportunities, project collaborations, or tech discussions.
        </p>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-4 text-left">
          {/* Email Card with 1-Click Copy */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all glow-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email Address</h3>
                <p className="text-sm font-mono text-white break-all">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/80">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-medium transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          {personalInfo.phone && (
            <a
              href={`tel:${personalInfo.phone}`}
              className="group block p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all glow-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Mobile Number</h3>
                    <p className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
            </a>
          )}

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all glow-card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">LinkedIn Profile</h3>
                  <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                    harsh-yadav-254305294
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 transition-all glow-card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">GitHub Profile</h3>
                  <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                    github.com/Pappu-Lala
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
            </div>
          </a>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="text-left mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Fills and launches your default mail client with your pre-filled inquiry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 placeholder-slate-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 placeholder-slate-500 text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Collaboration, Opportunity, or Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 placeholder-slate-500 text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 placeholder-slate-500 text-sm transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            {submitted && (
              <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>Opening your email client... Thank you for reaching out!</span>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
