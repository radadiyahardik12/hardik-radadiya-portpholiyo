import React from 'react';
import photo1 from '../images/photo1.jpg';

const Home = () => {
  return (
    <div className='px-4 h-fit'>
      <div className='mx-auto max-w-screen-xl'>
        <section
          id="home"
          className="w-full pt-10 flex gap-10 xl:gap-0 flex-col md:flex-row items-center font-titleFont justify-between"
        >
          <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col items-start gap-5'>
              <p className="text-2xl mb-4 glow-text animate-fade-in">WELCOME TO MY WORLD</p>
              <p className="text-6xl mb-2 font-extrabold glow-text animate-fade-in">Hi, I'm <span className='text-[#00ff00]'> Harik Radadiya</span></p>
              <p className="text-base font-bodyFont leading-6 tracking-wider md:text-justify">
                I am proficient in HTML, CSS, and JavaScript, including ES6 syntax. I have also worked extensively with React and Redux for building dynamic and scalable web applications. Additionally, I have knowledge of jQuery and Tailwind CSS to enhance the functionality and design of websites. My skills include creating responsive and user-friendly interfaces while ensuring cross-browser compatibility. I am capable of collaborating with designers and back-end developers to deliver high-quality products that meet client requirements. With a strong foundation in front-end development technologies, I am committed to staying updated with the latest trends and best practices in the field.
              </p>
            </div>
          </div>
          <div className="w-full lgl:w-1/2 flex justify-end items-center">
            <div className=' bottom-0 w-[350px] h-[450px] lgl:w-[500px] lgl:h-[725px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center -mb-[25px]'>
              <img src={photo1} alt="Harik Radadiya" className="w-[270px] h-[400px] lgl:w-[450px] lgl:h-[680px] z-10" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
