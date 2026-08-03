import React from "react";
import shoppingImage from '../images/shopping.png';
import schoolImage from '../images/school.png';
import DragImage from '../images/drag.png';
import khatushyamImage from '../images/khatushyam.jpg';
import GitHubIcon from "../assets/GitHubIcon";
import BrowserIcon from "../assets/BrowserIcon";
import Expensive from "../images/expensive.png";

const Projects = () => {
  const appList = [
    {
      title: "Dreems & HU Jobs Web App",
      desc: "Full-stack job portal web app for job seekers and employers with job search/filtering, applicant management, and real-time email notifications.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB Cluster"],
      img: shoppingImage,
      url: "https://vocab-connect.onrender.com"
    },
    {
      title: "E-Commerce Shopping Web App",
      desc: "Comprehensive e-commerce shopping platform featuring user authentication, interactive product catalog, shopping cart, checkout, and order history.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      img: shoppingImage,
      url: "https://shopping-fronted.onrender.com"
    },
    {
      title: "Manage Expenses & Analysis",
      desc: "Financial oversight platform for personal and business expense tracking, dynamic categorization, spending summaries, and real-time analytical reports.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      img: Expensive,
      url: "https://manage-expenses-calculate-analyxe.onrender.com"
    },
    {
      title: "Drag and Drop Element App",
      desc: "Custom React drag-and-drop web application built entirely from scratch without external libraries for dynamic UI element layout and repositioning.",
      tags: ["React.js", "JavaScript ES6+", "CSS3", "DOM Events"],
      img: DragImage,
      url: "https://drag-and-drop-react.onrender.com/"
    },
    {
      title: "School Web Application",
      desc: "Clean and responsive school web app built with Tailwind CSS, designed with structured navigation and accessibility for students and faculty.",
      tags: ["React.js", "Tailwind CSS", "HTML5", "JavaScript"],
      img: schoolImage,
      url: "https://my-school-app-f83o.onrender.com/"
    },
    {
      title: "Android Status Apps (10+ Apps)",
      desc: "Mobile applications engineered with React Native, powered by Node.js backend services and offline SQLite database caching for status management.",
      tags: ["React Native", "Node.js", "SQLite", "Play Store"],
      img: khatushyamImage,
      url: "https://play.google.com/store/apps/details?id=com.khatulateststatus"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-screen-xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs uppercase font-semibold text-emerald-400 tracking-widest px-3.5 py-1 rounded-full glass-card border border-emerald-500/20">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Selected Work & Projects
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Explore a collection of web platforms and mobile applications I have architected and deployed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appList.map((project, i) => (
            <div 
              key={i} 
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col group"
            >
              {/* Image Preview Window */}
              <div className="relative w-full h-56 bg-slate-950 overflow-hidden border-b border-slate-800/80">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={project.img}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                
                {/* Action Buttons Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href="https://github.com/radadiyahardik12" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full glass-card bg-slate-900/90 text-slate-300 hover:text-emerald-400 border border-slate-700/80 flex items-center justify-center transition-colors shadow-lg"
                    title="View Source Code"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full glass-card bg-slate-900/90 text-slate-300 hover:text-emerald-400 border border-slate-700/80 flex items-center justify-center transition-colors shadow-lg"
                    title="Live Preview"
                  >
                    <BrowserIcon />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono font-medium border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
