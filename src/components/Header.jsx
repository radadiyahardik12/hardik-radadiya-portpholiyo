import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-lg fixed w-full top-0 z-50 border-b-[1px]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-extrabold text-gradient">My Logo</div>
        <nav className="space-x-4 flex items-center">
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
      </div>
    </header>
  );
};

export default Header;
