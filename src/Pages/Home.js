
import '../index.css';
import {
  useLocation
} from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import Hero from './Layouts/Hero';
import About from './Layouts/About';
import Skills from './Layouts/Skills';
import Services from './Layouts/Services';
import SIDE_NAV from './Layouts/Side_nav';
import Portfolio from './Layouts/Portfolio';
import CONTACT_ME from './Layouts/Contact_me';

const Home = () =>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const location = useLocation();

  return (
  <AnimatePresence exitBeforeEnter>
    <SIDE_NAV />
    <main location={location} key={location.pathname}>
    <motion.div
      className="flex flex-col p-10"
      initial={{width:0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth}}
      >
    <div className="Landing w-full h-full dark:bg-gray-900" data-aos="fade-up">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <CONTACT_ME />

      </div>
        </motion.div>
  </main>
</AnimatePresence>
  );
}

export default Home;
