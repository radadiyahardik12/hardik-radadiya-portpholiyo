import React from 'react';
import photo1 from '../images/photo1.jpg';

const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '3.5+' },
    { label: 'React / Web Apps', value: '20+' },
    { label: 'Web Issues Resolved', value: '300+' },
    { label: 'Android Apps (Play Store)', value: '10+' },
  ];

  return (
    <section id="home" className="pt-12 pb-16 px-6 relative">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Column: Bio & Info */}
          <div className="w-full lg:w-3/5 flex flex-col items-start gap-6">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Hire • 3.5+ Years Exp</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <p className="text-slate-400 text-lg font-medium">Hello, World! 👋</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-emerald">Hardik Radadiya</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
                Full Stack & Mobile Application Developer
              </h2>
            </div>

            {/* Paragraph Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Energetic Full Stack Developer with over 3.5+ years of professional experience building dynamic web and mobile applications. Proficient in <strong className="text-slate-200 font-semibold">React Native, Node.js, React.js, Next.js, Python, Redux, and Git</strong>. Delivered 20+ full-featured web applications and optimized over 300+ web properties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-card hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-700/80 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-800/80 mt-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Avatar Graphic */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing Background Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />

              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-card border border-slate-700/60 p-3 max-w-[340px] sm:max-w-[400px]">
                <img
                  src={photo1}
                  alt="Hardik Radadiya"
                  className="w-full h-[420px] sm:h-[480px] object-cover rounded-2xl filter saturate-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl border border-slate-700/80 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Full Stack Engineering</h4>
                    <p className="text-xs text-slate-400">Web • Mobile • APIs</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
