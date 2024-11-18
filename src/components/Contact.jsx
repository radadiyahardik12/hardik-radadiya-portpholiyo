import React from 'react';
import FaceBookIcon from '../assets/FaceBookIcon';
import InstagramIcon from '../assets/InstagramIcon';
import LinkinIcon from '../assets/LinkinIcon';
import GitHubIcon from '../assets/GitHubIcon';
// import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <div class="flex flex-col gap-4">
          <h3 class="text-3xl font-bold text-white">Hardik Radadiya</h3>
          <p class="text-lg font-normal text-gray-400">Web Developer</p>
          <p class="text-base text-gray-400 tracking-wide">
            <span class="capitalize text-lg ">LET'S MAKE YOUR BRAND BRILLIANT!</span><br/>
            <span class="mt-2 text-gray-400">If you would like to work with us or just want to get in touch, we’d love to hear from you!</span>
          </p>
          <p class="text-base text-gray-400 flex items-center gap-2 justify-center">Phone: 
            <span class="text-lightText">+91 9727282815</span>
          </p>
          <p class="text-base text-gray-400 flex items-center gap-2 justify-center">Email: <span class="text-lightText">radadiyahardikkumar@gmail.com</span>
          </p>
        </div>
        
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://linkedin.com" target='_blank' className=" hover:text-blue-600">
            {/* <FaLinkedin size={30} /> */}
            <LinkinIcon />
          </a>
          <a href="https://www.linkedin.com/in/hardik-radadiya-61b30718b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className=" hover:text-gray-500">
            {/* <FaGithub size={30} /> */}
            <GitHubIcon />
          </a>
          <a href="https://www.facebook.com/radadiya.hardik.986?mibextid=ZbWKwL" target='_blank' className=" hover:text-blue-600">
            {/* <FaFacebook size={30} /> */}
            <FaceBookIcon/>
          </a>
          <a href="https://www.instagram.com/radadia_hardik_/profilecard/?igsh=MW5iOXVoZDI0ZXpiaA==" target='_blank' className=" hover:text-pink-500">
            {/* <FaInstagram size={30} /> */}
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
