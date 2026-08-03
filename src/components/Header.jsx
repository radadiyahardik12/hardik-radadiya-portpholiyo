import React, { useState, useEffect } from 'react';
import hlogo from '../images/hardikLogo.jpg';

const Header = () => {
  const [threeDotsOpen, setthreeDotsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090d16]/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-emerald-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6 max-w-screen-xl">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={hlogo} 
              alt="Hardik Radadiya" 
              className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500/50 group-hover:ring-emerald-400 transition-all duration-300" 
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#090d16] animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Hardik<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 glass-card px-5 py-2 rounded-full border border-slate-800/80">
          {['Home', 'Features', 'Projects', 'Resume', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-emerald-400 rounded-full hover:bg-slate-800/60 transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://vocab-connect.onrender.com/download/hardik/resume" 
            target="_blank"
            rel="noreferrer"
            className="relative group inline-flex items-center justify-center px-5 py-2 overflow-hidden text-sm font-semibold text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setthreeDotsOpen(!threeDotsOpen)} 
          className="md:hidden p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-emerald-400 focus:outline-none border border-slate-700/50"
          aria-label="Toggle Navigation"
        >
          {threeDotsOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {threeDotsOpen && (
        <div className="md:hidden glass-card mx-4 mt-3 rounded-2xl p-6 border border-slate-800 shadow-2xl flex flex-col gap-4 animate-fade-in">
          <p className="text-xs text-slate-400 leading-relaxed">
            Full Stack Developer with 3.5+ years of experience specializing in building high-performance web & mobile apps.
          </p>
          <div className="flex flex-col space-y-2 pt-2 border-t border-slate-800">
            {['Home', 'Features', 'Projects', 'Resume', 'Contact'].map((item) => (
              <a 
                key={item} 
                onClick={() => setthreeDotsOpen(false)}
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://vocab-connect.onrender.com/download/hardik/resume"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm rounded-lg shadow-lg shadow-emerald-500/20 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
