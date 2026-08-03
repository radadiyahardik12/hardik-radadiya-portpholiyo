import React from 'react';
import GitHubIcon from '../assets/GitHubIcon';
import HtmlIcon from '../assets/HtmlIcon';
import ReactJsIcon from '../assets/ReactJsIcon';
import TailwindIcon from '../assets/TailwindIcon';
import MongoDB from '../assets/MongoDB';
import NodeJSIcon from '../assets/NodeJSIcon';
import ReduxIcon from '../assets/ReduxIcon';
import JavaScriptIcon from '../assets/JavaScriptIcon';
import SqliteIcon from '../assets/SqliteIcon';
import PythonIcon from '../assets/PythonIcon';
import PhpIcon from '../assets/PhpIcon';
import NextJsIcon from '../assets/NextJsIcon';
import Marquee from 'react-fast-marquee';

const skills = [
  { name: 'React.js', icon: ReactJsIcon },
  { name: 'Next.js', icon: NextJsIcon },
  { name: 'Node.js', icon: NodeJSIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'PHP', icon: PhpIcon },
  { name: 'React Native', icon: ReactJsIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Redux', icon: ReduxIcon },
  { name: 'MongoDB', icon: MongoDB },
  { name: 'SQLite DB', icon: SqliteIcon },
  { name: 'Git', icon: GitHubIcon },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Cloudpeak Technologies Pvt Ltd",
    location: "Rajkot, Gujarat",
    period: "Jan 2025 – Present",
    current: true,
    highlights: [
      "Developed and maintained scalable REST APIs using Node.js, Python, and PHP for robust server-side performance.",
      "Built interactive UI components with React.js, Next.js, and React Native emphasizing modular reusability and speed.",
      "Participated in database schema design & query optimization across MongoDB and SQLite for maximum reliability.",
      "Utilized Git version control best practices and agile sprint workflows for task estimation and delivery."
    ]
  },
  {
    role: "Full Stack / Web Developer",
    company: "Cipher Craft Pvt Ltd",
    location: "Rajkot, Gujarat",
    period: "July 2023 – Jan 2025",
    current: false,
    highlights: [
      "Designed and maintained core company web properties using React Hooks and modular component design patterns.",
      "Diagnosed and resolved over 250+ web performance & UI accessibility issues, significantly increasing traffic and engagement.",
      "Collaborated with content and design teams to ensure fast loading times and cross-browser compatibility."
    ]
  },
  {
    role: "Frontend Developer & Trainee",
    company: "Octopus Technologies",
    location: "Surat, Gujarat",
    period: "Jan 2023 – June 2023",
    current: false,
    highlights: [
      "Gained hands-on experience building frontend web applications with JavaScript ES6+, React Hooks, Redux, and Tailwind CSS.",
      "Maintained internal web tools and troubleshot client websites to ensure smooth user experiences."
    ]
  }
];

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-screen-xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs uppercase font-semibold text-emerald-400 tracking-widest px-3.5 py-1 rounded-full glass-card border border-emerald-500/20">
            Career & Qualifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Experience & Skills
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Over 3.5+ years of software development experience across web, mobile, and backend engineering.
          </p>
        </div>

        {/* Timeline & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          
          {/* Left 2 Cols: Experience Vertical Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              Work History
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Icon */}
                  <div className={`absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    exp.current 
                      ? 'bg-emerald-500 border-emerald-300 ring-4 ring-emerald-500/20 animate-pulse' 
                      : 'bg-slate-900 border-slate-700 group-hover:border-emerald-400'
                  }`} />

                  {/* Card Content */}
                  <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-slate-300">
                          {exp.company} • <span className="text-slate-400 font-normal">{exp.location}</span>
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium self-start sm:self-center ${
                        exp.current 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-slate-800 text-slate-400 border border-slate-700/50'
                      }`}>
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Education & Certification */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              Education
            </h3>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
                  June 2020
                </span>
                <h4 className="text-xl font-bold text-white">
                  B.E. in Mechanical Engineering
                </h4>
                <p className="text-sm font-medium text-slate-300">
                  Atmiya Institute of Technology & Science
                </p>
                <p className="text-xs text-slate-400">
                  Rajkot, Gujarat, India
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                Graduated with strong analytical and problem-solving foundations, transitioning into full-stack software development.
              </p>
            </div>

            {/* Quick Skills Summary Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80 space-y-3">
              <h4 className="text-lg font-bold text-white">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'React Native', 'Node.js', 'Python', 'PHP', 'Express.js', 'MongoDB', 'SQLite', 'Git'].map((skill, sIdx) => (
                  <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 text-xs font-medium border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Skills Infinite Marquee */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-bold text-center text-slate-300">
            Technologies I Work With Every Day
          </h3>

          <div className="relative py-4 overflow-hidden rounded-2xl glass-card border border-slate-800/80">
            <Marquee direction="left" speed={45} pauseOnHover={true} gradient={false}>
              {skills.concat(skills).map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center mx-8 my-2 p-4 rounded-xl hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group"
                >
                  <skill.icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-xs text-slate-300 group-hover:text-emerald-400 mt-2 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
