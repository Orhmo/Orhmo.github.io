import React, { useEffect } from 'react';
import '../../index.css';

import AOS from "aos";
import "aos/dist/aos.css";

import Resume from '../../Components/Resume/cv.pdf';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section name="about" className="About">

    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className=" z-1 flex flex-col h-screen m-auto items-center justify-center text-center px-10">
      <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">ABOUT ME</h1>
      <p className="text-md py-3 leading-8 text-gray-800 md:mx-24 lg:mx-60">Hello, my name is Valentina. I am a creative front-end web and solidity developer.
        Passionate, result-oriented team player, committed to leveraging my knowledge to analyse and solve complex problems, providing solutions and creating amazing experiences through code.
        I am very enthusiastic about coding and love bringing websites and ideas to life by utlizing my skills. <br />
        I am solid with the basic HTML, CSS, Vanilla JavaScript and also with React JavaScipt and its concepts, Tailwind CSS, Bootstrap and other frameworks.
        Additionally, proficient in working with REST APIs, Git, and Github. I place high emphasis on writing clean, high-quality, and easily understandable code. </p>
        <div className= "Buttons">
          <a className='btn' id='profile-links' rel="noreferrer" href='https://www.github.com/orhmo' target='_blank'>
            GitHub
          </a>
          <a className='btn' id='profile-links' href={Resume} rel="noreferrer" target='_blank'>
            Resume
          </a>
        </div>
    </div>
    </section>
  )
}

export default About;
