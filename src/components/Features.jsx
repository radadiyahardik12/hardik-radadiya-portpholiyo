const Features = () => {
  const futures = [
    { title: 'SEO Optimization', desc: "With a keen eye for SEO optimization, I excel in crafting websites that not only look great but also rank high on search engines. From keyword research to on-page optimization, I leverage proven techniques to improve your website's visibility and drive targeted traffic. Let's collaborate to make your online presence stand out in today's competitive landscape." },
    { title: 'Web Development', desc: "With expertise in HTML, CSS, JavaScript, and a range of web development frameworks, I bring visions to life on the digital landscape. Specializing in creating intuitive and responsive websites, I prioritize user experience and functionality. Whether it's crafting sleek designs or optimizing performance, I strive for excellence in every aspect of web development. Let's work together to transform your ideas into captivating online solutions that leave a lasting impression." },
    { title: 'UX Design', desc: "Blending the art of web development with the science of UX design, I specialize in creating websites that deliver a seamless user experience. Through thoughtful design and meticulous coding, I strive to create digital solutions that exceed expectations. Let's work together to build a website that not only looks beautiful but also engages your audience effectively." },
  ]
    return (
      <section id="features" className=" py-16 bg-gradient-to-b from-black via-blue-900 to-black text-white">
        <div className="container mx-auto max-w-screen-xl  px-4 text-center">
          <div className="flex flex-col gap-4 font-titleFont mb-14">
            <span className="text-sm uppercase font-normal text-[#00ff00] tracking-wide"> Feature</span>
            <h2 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">What I Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
            {futures.map((feature) => ( 
              <div 
                key={feature.title} 
                className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
                  <div className="h-72 overflow-y-hidden">
                    <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-10 h-8 flex flex-col justify-between">
                         <span className="text-5xl text-designColor"></span>
                      </div>
                      <div className="flex flex-col gap-6">
                          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">{feature.title}</h2>
                          <p className="base overflow-hidden text-clip	 h-24">{feature.desc}</p>
                          <a  className="w-[15%]">
                            <span className="text-2xl text-designColor"></span>
                          </a>

                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  