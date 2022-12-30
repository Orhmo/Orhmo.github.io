import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall';
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <section name="home" className= "Hero">
    <Snowfall color="#a5f3fc" snowflakeCount={100} />
    <Snowfall color="#ecfeff" snowflakeCount={100} />

      <div className=" z-1 flex flex-col h-screen m-auto items-center justify-center text-center">
      <motion.div
            className="name"
            initial={{
              x: -300,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              scale: 1,
            }}
            transition={{ duration: 2 }}
          >
          <h1 className="text-cyan-600 py-2 text-5xl font-bold">Hi, I'm Valentina</h1>
      </motion.div>
      <motion.div
        className="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-2xl py-2">Front-end / React and Soldity Developer.</h2>
      </motion.div>
      <motion.div
        className="desc"
        initial={{
          x: 150,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <p className="text-md py-3 leading-8 text-gray-800">Based in West Africa. <br /> Providing services on programming and design needs.</p>
    </motion.div>
      </div>
      </section>

  )
}

export default Hero;
