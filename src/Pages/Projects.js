
import '../index.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import Hng from '../Images/projects/HNG.png';
import Linktree from '../Images/projects/Linktree.png';
import Meta from '../Images/projects/Meta.png';
import Will from '../Images/projects/Will.png';



function Projects () {
    const Slides = [
      {
        id: 1,
        icon: Will,
        title: 'REACT',
        sub: 'WILL GENERATOR',
        live: 'https://generated-will.netlify.app',
        source: 'https://github.com/Orhmo/Will_Generator',
        des: 'Generate a Will in 3 simple steps',
      },
      {
        id: 2,
        icon: Meta,
        title: 'REACT',
        sub: 'METABNB LANDING PAGE',
        live: 'https://metabnb-orhmo.vercel.app',
        source: 'https://github.com/Orhmo/Metabnb',
        des: 'Marketplace for NFTs',
      },
      {
        id: 3,
        icon: Hng,
        title: 'REACT',
        sub: 'HNG LANDING PAGE',
        live: 'https://hng-landing.netlify.app',
        source: 'https://github.com/Orhmo/HNG-Landing_page',
        des: 'Landing Page for HNG',
      },
      {
        id: 4,
        icon: Linktree,
        title: 'REACT',
        sub: 'LINKTREE CLONE',
        live: 'https://link3-clone.netlify.app',
        source: 'https://github.com/Orhmo/Linktree_clone',
        des: 'Responsive Linktree clone',
      },
    ]
     const navigate = useNavigate();
    return (
      <motion.div
        className="React_projects"
        initial={{width:0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: { duration: 0.2 } }}
        >

      <section name="portfolio" className="Portfolio pt-20">
      <button onClick={() => navigate(-1)} className="text-cyan-600 text-sm pl-8 cursor-pointer">
                {' '}
                &lt; Back{' '}
              </button>
      <div className=" flex grid flex-col m-auto items-center justify-center text-center p-10">
        <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">REACT PROJECTS</h1>
        <p className="text-md py-3 leading-8 mb-3 text-gray-800 md:px-30">Lastest Projects</p>

          <div className="relative">
              <div className="duration-700 ease-in-out">
                  {Slides.map (({id, icon, title, sub, live, source, des}) => (
                    <div key={id}>
                    <div className="relative">
                      <img src={icon} className="image w-1/2 h-1/2" alt="..." />
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


export default Projects;
