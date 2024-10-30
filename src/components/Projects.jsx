import React from "react";

const Projects = () => {
  const appList = [
    {
      title: "E-shopping Web",
      desc: "User-friendly shopping app with sign-in, sign-up, product display, cart, and more.",
    },
    {
      title: "School App",
      desc: "A responsive school website built with React, HTML, CSS, and JavaScript.",
    },
    {
      title: "Drag and Drop App",
      desc: "Interactive drag-and-drop application in React with smooth events.",
    },
    {
      title: "KhatuShyam Status App",
      desc: "1000+ status in this app.",
    },
    {
      title: "Gurjar Status App",
      desc: "1000+ status in this app.",
    },
  ] 
  return (
    <section id="projects" className="py-16 text-white bg-black">
      <div className="container  mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {appList.map((project, i) => (
            <div key={i} class="bg-gray-800 border border-gray-700  duration-300 flex flex-col group h-auto hover:border-blue-500 rounded-lg px-2 py-2 xl:px-12 xl:py-10">
            <a class="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                class="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                src="/assets/to-do-77cfb1d3.png"
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
                    <a href="https://github.com/AksRamani" target="_blank">
                      <span class="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://to-do-aksramani.vercel.app"
                      target="_blank"
                    >
                      <span class="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Globe">
                            <path d="M14.645,2.428a8.1,8.1,0,0,0-1.61-.3,9.332,9.332,0,0,0-3.6.28l-.07.02a9.928,9.928,0,0,0,.01,19.15,9.091,9.091,0,0,0,2.36.34,1.274,1.274,0,0,0,.27.02,9.65,9.65,0,0,0,2.63-.36,9.931,9.931,0,0,0,.01-19.15Zm-.27.96a8.943,8.943,0,0,1,5.84,5.11h-4.26a13.778,13.778,0,0,0-2.74-5.35A8.254,8.254,0,0,1,14.375,3.388Zm-2.37-.09a12.78,12.78,0,0,1,2.91,5.2H9.075A12.545,12.545,0,0,1,12.005,3.3Zm3.16,6.2a13.193,13.193,0,0,1,0,5.01H8.845a12.185,12.185,0,0,1-.25-2.5,12.353,12.353,0,0,1,.25-2.51Zm-5.6-6.09.07-.02a9.152,9.152,0,0,1,1.16-.23A13.618,13.618,0,0,0,8.045,8.5H3.8A9,9,0,0,1,9.565,3.408Zm-6.5,8.6a8.71,8.71,0,0,1,.37-2.51h4.39a13.95,13.95,0,0,0-.23,2.51,13.757,13.757,0,0,0,.23,2.5H3.435A8.591,8.591,0,0,1,3.065,12.008Zm6.57,8.61a8.9,8.9,0,0,1-5.84-5.11h4.24a13.632,13.632,0,0,0,2.77,5.35A8.1,8.1,0,0,1,9.635,20.618Zm-.56-5.11h5.84a12.638,12.638,0,0,1-2.91,5.21A12.872,12.872,0,0,1,9.075,15.508Zm5.3,5.11a11.551,11.551,0,0,1-1.17.24,13.8,13.8,0,0,0,2.75-5.35h4.26A8.924,8.924,0,0,1,14.375,20.618Zm1.8-6.11a13.611,13.611,0,0,0,0-5.01h4.39a8.379,8.379,0,0,1,.37,2.51,8.687,8.687,0,0,1-.36,2.5Z"></path>
                          </g>
                        </svg>
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
