import React from 'react';

const Features = () => {
  const futures = [
    { 
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M12 5l7 7-7 7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16" />
        </svg>
      ),
      title: 'Full Stack Development', 
      desc: 'Developing scalable REST APIs and backend microservices using Node.js, Python, PHP, Express.js, and MongoDB/SQLite, seamlessly connected with dynamic web frontends.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development', 
      desc: 'Building high-performance cross-platform mobile applications with React Native and SQLite offline storage, published and maintained on the Google Play Store.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Frontend Engineering', 
      desc: 'Crafting responsive, high-speed UI components using React.js, Next.js, Redux, and Tailwind CSS, focusing on reusability, modular architecture, and modern UX design.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'SEO & Performance Optimization', 
      desc: 'Optimizing web applications for search engine rankings, accessibility, and speed. Proven track record in diagnosing and resolving performance issues across 300+ web properties.' 
    },
  ];

  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-screen-xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs uppercase font-semibold text-emerald-400 tracking-widest px-3.5 py-1 rounded-full glass-card border border-emerald-500/20">
            Services & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            What I Bring To The Table
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            End-to-end software development solutions built with modern technology stacks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futures.map((feature, idx) => (
            <div 
              key={idx} 
              className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col items-start gap-6 border border-slate-800/80 group"
            >
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:bg-slate-800 transition-colors">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;