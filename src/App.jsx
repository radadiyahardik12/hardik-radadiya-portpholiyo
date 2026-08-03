import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#090d16] text-slate-100 min-h-screen relative overflow-hidden selection:bg-emerald-500 selection:text-black">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-100px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <Header />
      <main className="pt-20 text-white mx-auto relative z-10">
        <Home />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
