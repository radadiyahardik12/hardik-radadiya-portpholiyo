import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-white bg-black">
      <div className="container  mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'E-shopping Web', desc: 'User-friendly shopping app with sign-in, sign-up, product display, cart, and more.' },
            { title: 'School App', desc: 'A responsive school website built with React, HTML, CSS, and JavaScript.' },
            { title: 'Drag and Drop App', desc: 'Interactive drag-and-drop application in React with smooth events.' },
          ].map((project) => (
            <div 
              key={project.title} 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-blue-500">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
