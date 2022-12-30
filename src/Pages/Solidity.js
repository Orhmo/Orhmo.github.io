
import '../index.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import Staking from '../Images/projects/staking.png';


function Solidity() {
    const Slides = [
      {
        id: 1,
        icon: Staking,
        title: 'SOLIDITY',
        sub: 'STAKING CONTRACT',
        source: 'https://github.com/Orhmo/Staking-Contract',
        des: 'Staking Contract',
      },
    ]
     const navigate = useNavigate();

    return (
      <motion.div
        className="Solidity_projects"
        initial={{width:0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 } }}
        >
      <section name="portfolio" className="Portfolio pt-24">
      <button onClick={() => navigate(-1)} className="text-cyan-600 text-sm pl-8 cursor-pointer">
                {' '}
                &lt; Back{' '}
      </button>
      <div className=" flex grid flex-col m-auto items-center justify-center text-center p-10">
        <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">SOLIDITY PROJECTS</h1>
        <p className="text-md py-3 leading-8 mb-2 text-gray-800 md:px-30">Lastest Projects</p>

          <div className="relative rounded-lg ">
              <div className="duration-700 ease-in-out">
                  {Slides.map (({id, icon, title, sub, source, des}) => (
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
                            <div className="mb-4">
                              <a href={source} className="btn">Source codes</a>
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

export default Solidity;
