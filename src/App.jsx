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
    <div className="bg-gradient-to-b from-black to-blue-900 min-h-screen">
      <Header />
      <main className="pt-20 text-white mx-auto">
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
