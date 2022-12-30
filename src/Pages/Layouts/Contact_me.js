import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";


import { IconContext } from "react-icons";
import Contact from '../../Components/Contact';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

const Contact_me = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section name="contact" className="Contact">
    <div className=" flex grid flex-col m-auto items-center justify-center text-center h-screen p-10">
      <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">CONTACT ME</h1>
      <p className="text-md py-3 leading-8 text-gray-800 md:px-30">Let's make something great together</p>
      <div  data-aos="flip-right" data-aos-duration="3000" className="contact_container gap-8 grid md:grid-cols-2 md:mt-10">
          <div className="contact_content hidden md:flex md:flex-col md:mt-32">
          <div>
          <IconContext.Provider value={{ color: "black", className: "mx-auto animate-bounce"}}>
            <div>
              <BsChatText />
            </div>
            </IconContext.Provider>
              <h3 className="contact_title text-sm font-bold uppercase m-2">
                Reach out and let's talk about your project.
              </h3>
              <p className="leading-5 text-xs m-2 mt-8 text-cyan-600 md:mx-16 md:mt-0">I'm looking to collaborate/work with individuals, companies, agencies
                  that aim to solve real life problems with their brilliant product ideas.
              </p>
              </div>
            <div className="contact_info">
              <div className="contact_data flex flex-col m-2 mt-4 text-sm">
                  <span><a className="contact_button" href="mailto:oorhmo@gmail.com" rel="noreferrer" target="_blank">
                <IconContext.Provider value={{ color: "#0891b2", className: "text-4xl mt-4 mx-auto animate-bounce"}}>
                  <div>
                    <MdOutlineMarkEmailUnread />
                  </div>
                  </IconContext.Provider>
                </a></span>
                <span className="contact_data-title">Email:</span>
                <span className="contact_data-info">oorhmo@gmail.com</span>
              </div>

              <div className="contact_data flex flex-col m-2 mt-4 text-sm">
                <span><a className="contact_button" href="https://api.whatsapp.com/send?phone=+2349153563663&text=Hello,I would like more information!" rel="noreferrer" target="_blank">
                <IconContext.Provider value={{ color: "#0891b2", className: "text-4xl mt-4 mx-auto animate-bounce"}}>
                  <div>
                    <AiOutlineWhatsApp />
                  </div>
                  </IconContext.Provider>
                </a></span>
                <span className="contact_data-title">Whatsapp:</span>
                <span className="contact_data-info">+234 9153563663</span>

              </div>
            </div>
          </div>

          <div className="contact_content mt-2 md:mt-0 " >
              <h3 className="contact_title hidden md:flex font-bold text-sm pb-4 uppercase text-center justify-center m-2 mx-auto">
               Let's get started.

             </h3>
             <h3 className="contact_title flex md:hidden font-bold text-sm pb-4 uppercase text-center justify-center mx-auto">
              Reach out and let's talk about your project.
            </h3>
            <div data-aos="flip-left" data-aos-duration="3000" className="box mt-4 w-[80vw] md:w-[45vw]">
                <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact_me;
