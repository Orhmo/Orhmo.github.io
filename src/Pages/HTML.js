
import '../index.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion} from "framer-motion";

import Bake from '../Images/projects/bake_page.png';
import Mj from '../Images/projects/MJ.png';
import Web3 from '../Images/projects/web3.png';





function HTML() {
  const Slides = [
    {
      id: 1,
      icon: Bake,
      title: 'HTML/CSS',
      sub: 'BAKERY LANDING PAGE',
      live: 'https://bake-page.netlify.app',
      source: 'https://github.com/Orhmo/Landing_Page',
      des: 'Landing Page for a Bakery',
    },
    {
      id: 2,
      icon: Web3,
      title: 'HTML/CSS',
      sub: 'WEB3 DOCUMENTATION PAGE',
      live: 'https://web3documentary.netlify.app',
      source: 'https://github.com/Orhmo/Web3_Documentary',
      des: 'Responsive Web3 Documentage Page',
    },
    {
      id: 3,
      icon: Mj,
      title: 'HTML/CSS',
      sub: 'MICHEAL JACKSON TRIBUTE PAGE',
      live: 'https://mj-tribute.netlify.app',
      source: 'https://github.com/Orhmo/Tribute-page',
      des: 'Tribute page for Micheal Jackson',
    },
  ]
   const navigate = useNavigate();

  return (
    <motion.div
      className="HTML_Projects"
      initial={{width:0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.1 } }}
      >

    <section name="portfolio" className="Portfolio pt-20">
    <button onClick={() => navigate(-1)} className="text-cyan-600 text-sm pl-8 cursor-pointer">
              {' '}
              &lt; Back{' '}
            </button>
    <div className=" flex grid flex-col m-auto items-center justify-center text-center p-10">
      <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">HTML/CSS PROJECTS</h1>
      <p className="text-md py-3 mb-2 leading-8 text-gray-800 md:px-30">Lastest Projects</p>

        <div className="relative">
            <div className="duration-700 ease-in-out ">
                {Slides.map (({slide, id, icon, title, sub, live, source, des}) => (
                  <div key={id}>
                  <div className="relative">
                    <img src={icon} className="image rounded-lg" alt="..." />
                    <div className="middle">
                      <div className="text">{des}</div>
                    </div>
                    </div>
                      <div className="align-center text-center">
                        <h1 className="font-semi-bold text-gray-300 text-sm my-3">{title}</h1>
                          <p className="text-base leading-relaxed m-4">{sub}</p>
                          <div className="mb-16">
                            <a href={live} className="btn">Live link</a>
                            <a href={source} className="btn">Source code</a>
                            </div>

                        </div>
                        </div>
                      ))}
                  </div>
              </div>
          </div>
    </section>
    </motion.div>
  );
}

export default HTML;
