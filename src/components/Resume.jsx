import React from 'react';
import GitHubIcon from '../assets/GitHubIcon';
// import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaDatabase, FaGit, FaJsSquare } from 'react-icons/fa';

const skills = [
  { name: 'React JS', },
  { name: 'Node JS',  },
  { name: 'HTML',  },
  { name: 'JavaScript'},
  { name: 'Tailwind CSS',},
  { name: 'Redux', },
  { name: 'MongoDB', },
  { name: 'React Native', },
  { name: 'Git', },
   { name: 'SQLite',},
  { name: 'Firebase', },
  { name: 'jQuery',},
];

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gradient-to-b from-black to-blue-900 text-white ">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-gradient">My Resume</h2>
        
        <div className="space-y-8">
          <div class="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p class="text-sm text-designColor tracking-[4px] text-[#00ff00]">Jan 2023 - Jan 2024</p>
            <h2 class="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          {/* Job Experience */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md transition duration-300 hover:border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Jr. Web Developer</h3>
            <p>Company: Cipher Craft Pvt. Ltd</p>
            <p>Location: Rajkot</p>
            <p>Duration: July 2023 - Present</p>
            <p className="mt-2 text-gray-400">
              Developed skills in React and gained practical experience through challenging projects.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md transition duration-300 hover:border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Web Developer & Trainee</h3>
            <p>Company: Octopus Technologies</p>
            <p>Location: Surat</p>
            <p>Duration: Jan 2023 - Jun 2023</p>
            <p className="mt-2 text-gray-400">
              Trained in JavaScript ES6, jQuery, Tailwind CSS, and React, and contributed to live projects.
            </p>
          </div>

          {/* Areas of Expertise */}
          <div className="w-full ">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Areas of Expertise</h3>
            <p className="text-gray-400">I have developed expertise in the following technologies and tools:</p>
            
            <div className="relative my-8 overflow-hidden whitespace-nowrap">
              <ul className="flex gap-20 animate-scroll">
                {skills.concat(skills).map((skill, index) => ( // Repeat skills for seamless scroll
                  <li 
                    key={index} 
                    className="flex flex-col bg-gradient-to-tr p-6 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    
                    <GitHubIcon width="40" height="40" />  {/* Icon with specified size */}
                    <span className="font-bold mt-[24px] text-center  text-base w-[120px]">{skill.name}</span> {/* Title below the icon with 24px gap */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;