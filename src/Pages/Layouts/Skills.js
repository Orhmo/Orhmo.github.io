import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import Atom from '../../Images/frontend/atom.svg';
import Bootstrap from '../../Images/frontend/bootstrap.svg';
import Css from '../../Images/frontend/css.svg';
import Git from '../../Images/frontend/git.svg';
import Html from '../../Images/frontend/html.svg';
import Js from '../../Images/frontend/Javascript.svg';
import Rt from '../../Images/frontend/react.svg';
import Tailwind from '../../Images/frontend/tailwind-css.svg';
import VScode from '../../Images/frontend/visual-studio-code.svg';

import Alchemy from '../../Images/solidity/alchemy.svg';
import Ethereum from '../../Images/solidity/ethereum.svg';
import Etherscan from '../../Images/solidity/etherscan.svg';
import Ganache from '../../Images/solidity/ganache.svg';
import Hardhat from '../../Images/solidity/hardhat.svg';
import Metamask from '../../Images/solidity/metamask.svg';
import Remix from '../../Images/solidity/remix.png';
import Smart from '../../Images/solidity/Smart-Contract.png';
import Solidity from '../../Images/solidity/solidity.svg';
// import darkMode from "../Components/NavBar";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const FE = [
    {
      id: 1,
      icon: Atom,
      name: 'Atom',
    },
    {
      id: 2,
      icon: Bootstrap,
      name: 'Bootstrap,'
    },
    {
      id: 3,
      icon: Css,
      name: 'CSS',
    },
    {
      id: 4,
      icon: Git,
      name: 'Git',
    },
   {
      id: 5,
      icon: Html,
      name: 'HTML',
    },
    {
      id: 6,
      icon: Js,
      name: 'JavaScript',
    },
    {
      id: 7,
      icon: Rt,
      name: 'React',
    },
    {
      id: 8,
      icon: Tailwind,
      name: 'Tailwind',
    },
    {
      id: 9,
      icon: VScode,
      name: 'VScode',
    },
  ];

  const SE = [
    {
      id: 1,
      icon: Alchemy,
      name: 'Alchemy',
    },
    {
      id: 2,
      icon: Ethereum,
      name: 'Ethereum',
    },
    {
      id: 3,
      icon: Etherscan,
      name: 'Etherscan',
    },
    {
      id: 4,
      icon: Ganache,
      name: 'Ganache',
    },
   {
      id: 5,
      icon: Hardhat,
      name: 'Hardhat',
    },
    {
      id: 6,
      icon: Metamask,
      name: 'Metamask',
    },
    {
      id: 7,
      icon: Remix,
      name: 'Remix',
    },
    {
      id: 8,
      icon: Smart,
      name: 'Smart-Contract',
    },
    {
      id: 9,
      icon: Solidity,
      name: 'Solidity',
    },
  ];
  return (
    <section name="skills" className="Skills">
    <div className=" flex grid flex-col pt-48 md:pt-24 pb-20 m-auto items-center justify-center text-center p-10">
      <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">SKILLS</h1>
      <p className="text-md py-3 leading-8 text-gray-800 md:px-30">Tools, Framework and Languages I am proficient in:</p>
      <div className='grid md:gap-24 md:grid-cols-2'>
      <div data-aos="fade-right" data-aos-duration="3000">
        <h2 className='font-bold'>Frontend Developer</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center align-center text-center'>
        {FE.map(({ id, icon, name}) => (
            <div key={id}>
              <div className="cursor-pointer m-2 p-4 items-center hover:scale-110">
                <img src={icon} alt="" className="icon w-20 h-1/2 duration-200 shadow-xl shadow-cyan-600 rounded-full  hover:animate-bounce hover:scale-105 p-4"/>
                <h3 className="text-sm mt-4">{name}</h3>
              </div>
            </div>
          ))}
          </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000">
            <h2 className='font-bold mt-20 md:mt-0'>Solidity Developer</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center align-center text-center'>
            {SE.map(({ id, icon, name}) => (
                <div key={id}>
                  <div className="cursor-pointer m-2 p-4 items-center hover:scale-110">
                    <img src={icon} alt="" className="w-20 h-1/2 duration-200 shadow-xl shadow-cyan-600 rounded-full hover:scale-105 hover:animate-bounce p-4"/>
                    <h3 className="text-sm mt-4">{name}</h3>
                  </div>
                </div>
              ))}
              </div>
              </div>
          </div>
          </div>
        </section>
  )

}

export default Skills;
