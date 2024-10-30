import React from 'react';
// import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-white bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="text-lg">Hardik Radadiya - Web Developer</p>
        <p className="text-gray-400 mb-4">LET'S MAKE YOUR BRAND BRILLIANT!</p>
        <p>If you’d like to work together or just say hello, feel free to reach out!</p>
        
        <div className="mt-4">
          <p>Phone: +91 9727585815</p>
          <p>Email: radadiyahardikkumar@gmail.com</p>
        </div>
        
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-600">
            {/* <FaLinkedin size={30} /> */}
            FaLinkedin
          </a>
          <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
            {/* <FaGithub size={30} /> */}
            FaGithub
          </a>
          <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
            {/* <FaFacebook size={30} /> */}
            FaFacebook
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
            {/* <FaInstagram size={30} /> */}
            FaInstagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
