import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] text-slate-400 py-8 border-t border-slate-800/80 relative">
      <div className="container mx-auto px-6 max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-xs sm:text-sm font-medium text-slate-400">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Hardik Radadiya</span>. Built with React & Tailwind CSS.
        </p>

        <button 
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-slate-800/80 text-xs font-semibold text-slate-300 hover:text-emerald-400 border border-slate-700/60 transition-all"
        >
          <span>Back to Top</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>
  );
};

export default Footer;