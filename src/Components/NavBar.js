
import '../index.css';
import {
  FaHome,
  FaBattleNet,
  FaUsers,
  FaProjectDiagram,
  FaRegComments,
  FaEnvelopeOpenText
} from 'react-icons/fa';
import React, { createContext, useState } from 'react';
import { Link } from "react-scroll";
import FileSaver from 'file-saver';
import Resume from './Resume/cv.pdf'
import "../App";
import {FaTimes} from 'react-icons/fa';
import {RiMenu4Fill} from 'react-icons/ri';


export const ThemeContext = createContext(null);

const NavBar = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL  + "/cv.pdf",
      "OGUKA, VALENTINA.pdf");
  };

  const [nav, setNav] = useState(false);
  const refreshPage = ()=>{
    window.location.reload(false);
  }
  const links = [
    {
      id: 1,
      link: "home",
      icon: <FaHome />
    },
    {
      id: 2,
      link: "about",
      icon: <FaUsers/>
    },
    {
      id: 3,
      link: "skills",
      icon: <FaBattleNet />
    },
    {
      id: 4,
      link: "services",
      icon: <FaRegComments/>
    },
    {
      id: 5,
      link: "portfolio",
      icon: <FaProjectDiagram />
    },
    {
      id: 6,
      link: "contact",
      icon:  <FaEnvelopeOpenText />
    },
  ];
  return (
    <div >
    <div className="navBar z-10 flex justify-between items-center px-4 w-full h-20 text-black fixed dark:bg-gray-900">

    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer pr-4 z-10 text-cyan-600"
    >
      {nav ? <FaTimes size={30} /> : <RiMenu4Fill size={30} />}
    </div>


    {nav && (
      <ul className="nav flex flex-col absolute top-24 buttom-0 left-0 w-1/2 md:w-[20vw] h-screen z-1 text-cyan-300 hover:text-white hover:bg-cyan-600">
        {links.map(({ id, link, icon }) => (
          <li
            key={id}

          >
            <Link
              onClick={() => setNav(!nav)}
              to={link}
              smooth
              duration={500}
              className=" no-underline flex flex-row px-4 pr-4 cursor-pointer capitalize py-6 text-md text-cyan-600 w-full rounded-r-full dark:bg-gray-900 hover:text-white hover:bg-cyan-600"
            >
              <p className="m-1 mx-3">{icon}</p>
              {link}
            </Link>
          </li>
        ))}
        <li>
          <button className="mt-4 pt-2 btn_2" onClick={saveFile}>
            Download CV
          </button>
        </li>

      </ul>
    )}
      <h1 className="text-4xl text-cyan-600 cursor-pointer mt-4 font-bold font-signature hover:animate-bounce" onClick={refreshPage}>Orhmo</h1>

      <p className="mr-6 mt-4 text-xs">a</p>
    </div>
    </div>

  );
}

export default NavBar;
