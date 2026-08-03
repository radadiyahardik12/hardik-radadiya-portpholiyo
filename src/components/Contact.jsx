import React, { useState } from 'react';
import FaceBookIcon from '../assets/FaceBookIcon';
import InstagramIcon from '../assets/InstagramIcon';
import LinkinIcon from '../assets/LinkinIcon';
import GitHubIcon from '../assets/GitHubIcon';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('radadiyahardikkumar@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-screen-xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs uppercase font-semibold text-emerald-400 tracking-widest px-3.5 py-1 rounded-full glass-card border border-emerald-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Have a project in mind or interested in hiring a Full Stack Developer? Feel free to connect anytime!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* Phone Card */}
          <a 
            href="tel:+919727858515" 
            className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col items-center text-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              📞
            </div>
            <div>
              <h3 className="text-xs uppercase font-mono text-slate-400 font-semibold tracking-wider">Phone</h3>
              <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mt-1">
                +91 9727858515
              </p>
            </div>
          </a>

          {/* Email Card */}
          <div 
            onClick={copyEmail}
            className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col items-center text-center gap-3 cursor-pointer group relative"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              ✉️
            </div>
            <div>
              <h3 className="text-xs uppercase font-mono text-slate-400 font-semibold tracking-wider">Email</h3>
              <p className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors mt-1 break-all">
                radadiyahardikkumar@gmail.com
              </p>
              <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                {copied ? "✓ Copied to clipboard!" : "Click to copy"}
              </span>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              📍
            </div>
            <div>
              <h3 className="text-xs uppercase font-mono text-slate-400 font-semibold tracking-wider">Location</h3>
              <p className="text-base font-bold text-white group-hover:text-purple-400 transition-colors mt-1">
                Rajkot, Gujarat, India
              </p>
            </div>
          </div>

        </div>

        {/* Social Network Bar */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-semibold text-slate-300">Connect with me on social platforms</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/hardik-radadiya-61b30718b" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 rounded-xl glass-card bg-slate-900/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 border border-slate-800 flex items-center justify-center transition-all hover:scale-110"
              title="LinkedIn Profile"
            >
              <LinkinIcon />
            </a>
            <a 
              href="https://github.com/radadiyahardik12" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 rounded-xl glass-card bg-slate-900/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 border border-slate-800 flex items-center justify-center transition-all hover:scale-110"
              title="GitHub Profile"
            >
              <GitHubIcon />
            </a>
            <a 
              href="https://www.facebook.com/radadiya.hardik.986" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 rounded-xl glass-card bg-slate-900/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 border border-slate-800 flex items-center justify-center transition-all hover:scale-110"
              title="Facebook Profile"
            >
              <FaceBookIcon/>
            </a>
            <a 
              href="https://www.instagram.com/radadia_hardik_" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 rounded-xl glass-card bg-slate-900/80 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 border border-slate-800 flex items-center justify-center transition-all hover:scale-110"
              title="Instagram Profile"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
