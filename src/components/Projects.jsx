import React from "react";
import shoppingImage from '../images/shopping.png';
import schoolImage from '../images/school.png';
import DragImage from '../images/drag.png';
import gurjarImage from '../images/gurjar.jpg';
import khatushyamImage from '../images/khatushyam.jpg'; //
import GitHubIcon from "../assets/GitHubIcon";
import BrowserIcon from "../assets/BrowserIcon";
import Expensive from "../images/expensive.png";

const Projects = () => {
  const appList = [
    {
      title: "E-shopping Web",
      desc: "User-friendly shopping app with sign-in, sign-up, product display, cart, and more.",
      img : shoppingImage,
      url: "https://shopping-fronted.onrender.com"
    },
    {
      title: "Manage Expenses calculation analyze",
      desc: "User-friendly expense analysis any product based on",
      img : Expensive,
      url: "https://manage-expenses-calculate-analyxe.onrender.com"
    },
    {
      title: "Drag and Drop App",
      desc: "Interactive drag-and-drop application in React with smooth events.",
      img : DragImage,
      url: "https://drag-and-drop-react.onrender.com/"
    },
    {
      title: "School App",
      desc: "A responsive school website built with React, HTML, CSS, and JavaScript.",
      img : schoolImage,
      url: "https://my-school-app-f83o.onrender.com/"
    },
    {
      title: "KhatuShyam Status App",
      desc: "1000+ status in this app.",
      img : khatushyamImage,
      url: "https://play.google.com/store/apps/details?id=com.khatulateststatus"
    },
    {
      title: "Gurjar Status App",
      desc: "1000+ status in this app.",
      img : gurjarImage,
      url: "https://play.google.com/store/apps/details?id=com.gurjarlateststatus"
    },
  ] 
  return (
    <section id="projects" className="pt-20 text-white ">
      <div className="container  mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {appList.map((project, i) => (
            <div key={i} class="bg-gray-800 border border-gray-700  duration-300 flex flex-col group h-auto hover:border-blue-500 rounded-lg px-2 py-2 xl:px-12 xl:py-10">
            <a class="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                class="w-full h-60 object-contain group-hover:scale-110 duration-300"
                src={project.img}
                alt="src"
              />
            </a>
            <div class="w-full mt-5 flex flex-col  gap-6">
              <div>
                <div class="flex items-center justify-between">
                  <h3 class="text-base uppercase text-designColor font-normal">
                {project.title}
                  </h3>
                  <div class="flex gap-2">
                    <a href="https://github.com/radadiyahardik12" target="_blank">
                      <span class="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <GitHubIcon />
                      </span>
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                    >
                      <span class="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BrowserIcon />
                      </span>
                    </a>
                  </div>
                </div>
                <p class="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                {project.desc}
                </p>
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
