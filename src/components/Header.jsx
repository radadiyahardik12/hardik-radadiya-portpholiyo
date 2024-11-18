import React, { useState } from 'react';
import hlogo from '../images/hardikLogo.jpg'

const Header = () => {
  const [threeDotsOpen, setthreeDotsOpen] = useState(false)

  return (
    <header className="bg-black text-white py-4 shadow-lg fixed w-full top-0 z-50 border-b-slate-400 border-b-[1px]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-extrabold text-gradient">
          <img src={hlogo} alt="" className='h-12 w-12' />
        </div>
        <nav className="hidden md:flex space-x-4 items-center">
          {['Home', 'Features', 'Projects', 'Resume', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-gray-300 transition duration-200 transform hover:scale-110">
              {item}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-200 transform hover:scale-105 shadow-lg">
            Download CV
          </button>
        </nav>
        <span onClick={() => setthreeDotsOpen(!threeDotsOpen)} class="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
        {threeDotsOpen ?
          <svg className=" text-gray-600 transition rotate-45" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
          :
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        }
        </span>
      </div>
      {threeDotsOpen && (
          <div className="flex flex-col md:hidden px-5 text-start w-full justify-center text-slate-200 items-center ">
            <p class="text-sm text-gray-400 mt-2 text-justify pt-6">I'm skilled in HTML, CSS, and JavaScript, including ES6. Proficient in React and Redux, I create dynamic web apps. I use jQuery and Tailwind CSS for design and functionality, ensuring responsive interfaces and cross-browser compatibility. Committed to staying updated in front-end trends for high-quality client products.</p>
            <div className="flex flex-col w-full space-y-2 text-sm text-gray-400 mt-2 text-justify pt-6">
            {['Home', 'Features', 'Projects', 'Resume', 'Contact'].map((item) => (
            <a 
              key={item} 
              onClick={() => setthreeDotsOpen(!threeDotsOpen) }
              href={`#${item.toLowerCase()}`} 
              className="hover:text-gray-300 transition duration-200 transform hover:scale-110">
              {item}
            </a>
          ))}
          <a 
              href={`#`} 
              className="hover:text-gray-300 transition duration-200 transform hover:scale-110">
              Download Cv
            </a>
            </div>
          </div>
        )}
    </header>
  );
};

export default Header;
