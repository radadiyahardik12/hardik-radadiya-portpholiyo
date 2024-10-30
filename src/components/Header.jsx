import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-lg fixed w-full top-0 z-50 border-b-[1px]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-extrabold text-gradient">My Logo</div>
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
        <span class="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></span>
      </div>
    </header>
  );
};

export default Header;
