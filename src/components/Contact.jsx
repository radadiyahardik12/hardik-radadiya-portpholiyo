import React from 'react';
import FaceBookIcon from '../assets/FaceBookIcon';
import InstagramIcon from '../assets/InstagramIcon';
import LinkinIcon from '../assets/LinkinIcon';
import GitHubIcon from '../assets/GitHubIcon';
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
          <a href="https://linkedin.com" target='_blank' className="text-gray-400 hover:text-blue-600">
            {/* <FaLinkedin size={30} /> */}
            <LinkinIcon />
          </a>
          <a href="https://www.linkedin.com/in/hardik-radadiya-61b30718b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="text-gray-400 hover:text-gray-500">
            {/* <FaGithub size={30} /> */}
            <GitHubIcon />
          </a>
          <a href="https://www.facebook.com/radadiya.hardik.986?mibextid=ZbWKwL" target='_blank' className="text-gray-400 hover:text-blue-600">
            {/* <FaFacebook size={30} /> */}
            <FaceBookIcon/>
          </a>
          <a href="https://www.instagram.com/radadia_hardik_/profilecard/?igsh=MW5iOXVoZDI0ZXpiaA==" target='_blank' className="text-gray-400 hover:text-pink-500">
            {/* <FaInstagram size={30} /> */}
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
