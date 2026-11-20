import React from "react";
import shoppingImage from "../images/shopping.png";
import DragImage from "../images/drag.png";
import GitHubIcon from "../assets/GitHubIcon";
import BrowserIcon from "../assets/BrowserIcon";
import Expensive from "../images/expensive.png";
import dreemsandhu from "../images/dreemsandhu.png";
import mydhatri from "../images/mydhatri.png";
import mahadevapp from "../images/mahadev.jpg";
import apnavideoapp from "../images/apnavideo.jpg";
import youtubrapp from "../images/youtubapp.jpg";
import motivation from "../images/motivation.jpg";
import mrjobwala from "../images/mrjobwala.png";
import scannerApp from "../images/scanner.jpg";
import resumeApp from "../images/resume.jpg";
import hdwallpaperApp from "../images/hdwallpaper.jpg";

const Projects = () => {
  const appList = [
    {
      title: "CorpRite Ai",
      desc: "CorpRite provides a single source of truth for corporate records, equity, and governance. AI-powered onboarding transforms existing minute books into structured digital records, while integrated corporate actions, cap tables, and a verified audit log help legal teams manage corporate governance with greater accuracy and confidence.",
      tags: [
        "React.js",
        "Node.js",
        "MongoDB Cluster",
        "Python",
        "Tailwind CSS",
        "Ai",
      ],
      img: "https://corprite.co/video/landign-page.mp4",
      url: "https://corprite.co/",
    },
    {
      title: "MrJobwala",
      desc: "Full-stack job portal connecting job seekers with verified employers across India and abroad. Features advanced job search/filtering, built-in ATS resume maker, verified recruiter listings, and real-time application tracking.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB Cluster"],
      img: mrjobwala,
      url: "https://mrjobwala.com/",
    },
    {
      title: "My Dhatri Tech And Innovation",
      desc: "Full-stack Company portal web app for company's employee and comany profile manager",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB Cluster"],
      img: mydhatri,
      url: "https://mydhatri.in/",
    },
    {
      title: "Dreems & HU Jobs Web App",
      desc: "Full-stack job portal web app for job seekers and employers with job Auto Post Linkedin, search/filtering, applicant management, and real-time email notifications.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB Cluster"],
      img: dreemsandhu,
      url: "https://dreemsandhu.vercel.app/",
    },
    {
      title: "Document Scanner - PDF Creator",
      desc: "Feature-rich mobile document scanning application to scan documents, generate crystal-clear PDFs, apply auto-edge detection and color filters, and share files seamlessly.",
      tags: ["React Native", "Android", "PDF Tools", "Play Store"],
      img: scannerApp,
      url: "https://play.google.com/store/apps/details?id=com.dh.docscanner",
    },
    {
      title: "My Resume : CV Builder & Maker",
      desc: "Professional CV and resume maker app with customizable ATS-compliant templates, real-time formatting, live PDF preview, and instant export capabilities.",
      tags: ["React Native", "Android", "CV Builder", "Play Store"],
      img: resumeApp,
      url: "https://play.google.com/store/apps/details?id=com.dh.myresume",
    },
    {
      title: "HD Wallpapers",
      desc: "High-definition & 4K wallpapers mobile app featuring a vast collection of curated backgrounds, daily updates, multiple categories, and one-tap home/lock screen application.",
      tags: ["React Native", "Android", "UI/UX", "Play Store"],
      img: hdwallpaperApp,
      url: "https://play.google.com/store/apps/details?id=com.dh.wallpapers",
    },
    {
      title: "E-Commerce Shopping Web App",
      desc: "Comprehensive e-commerce shopping platform featuring user authentication, interactive product catalog, shopping cart, checkout, and order history.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      img: shoppingImage,
      url: "https://shopping-fronted.onrender.com",
    },
    {
      title: "Manage Expenses & Analysis",
      desc: "Financial oversight platform for personal and business expense tracking, dynamic categorization, spending summaries, and real-time analytical reports.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      img: Expensive,
      url: "https://manage-expenses-calculate-analyxe.onrender.com",
    },
    {
      title: "Drag and Drop Element App",
      desc: "Custom React drag-and-drop web application built entirely from scratch without external libraries for dynamic UI element layout and repositioning.",
      tags: ["React.js", "JavaScript ES6+", "CSS3", "DOM Events"],
      img: DragImage,
      url: "https://drag-and-drop-react.onrender.com/",
    },
    {
      title: "Motivational App",
      desc: "Daily quotes and motivation mobile application available on the Google Play Store.",
      tags: ["React Native", "Android", "Play Store"],
      img: motivation,
      url: "https://play.google.com/store/apps/details?id=com.quotesmotivation",
    },
    {
      title: "YouTube App",
      desc: "Custom video discovery mobile application on the Google Play Store.",
      tags: ["React Native", "Android", "Play Store"],
      img: youtubrapp,
      url: "https://play.google.com/store/apps/details?id=com.dh.videobuzz",
    },
    {
      title: "Video Player App",
      desc: "Versatile video player application for Android devices with advanced playback features.",
      tags: ["React Native", "Android", "Play Store"],
      img: apnavideoapp,
      url: "https://play.google.com/store/apps/details?id=com.apnavideos",
    },
    {
      title: "Mahadev App",
      desc: "Devotional mobile application featuring Mahadev status, images, and content.",
      tags: ["React Native", "Android", "Play Store"],
      img: mahadevapp,
      url: "https://play.google.com/store/apps/details?id=com.mahadevmahakals",
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
            Explore a collection of web platforms and mobile applications I have
            architected and deployed.
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
                {typeof project.img === "string" && project.img.includes(".mp4") ? (
                  <video
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.img}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
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
                    title={project.url.includes("play.google.com") ? "View on Google Play" : "Live Preview"}
                  >
                    <BrowserIcon />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block group-hover:text-emerald-400 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </a>
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
