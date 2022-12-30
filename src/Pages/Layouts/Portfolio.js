import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { SliderData } from './SliderData';

import AOS from "aos";
import "aos/dist/aos.css";

import '../../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const Portfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
  <section name="portfolio" className="Portfolio">
  <div data-aos="flip-left" className=" flex grid flex-col m-auto items-center justify-center text-center p-10">
    <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">PROJECTS</h1>
    <p className="text-md py-3 leading-8 text-gray-800 md:px-30">Lastest Projects</p>


  <div id="default-carousel" className="relative">
      <div className="relative rounded-lg ">

      <div className=" rounded-lg ">
          <div style={{ display: 'block', width: 700, padding: 30 }}>
            <Carousel className="mx-auto">
              {SliderData.map (({id, des, icon, title, sub, live, source}) => (
                <Carousel.Item key={id} interval={1500}>
                  <div className="">
                    <div className="text-cyan-600 text-bold text-lg m-2"> {des} </div>
                    <img src={icon} className= "justify-center align-center flex mx-auto w-[75vw] " alt="..." />
                  </div>
                  <Carousel.Caption className="m-4">
                        <div className="mt-8">
                          <a href={live} className="btn">Live link</a>
                          <a href={source} className="btn">Source code</a>
                          </div>
                      </Carousel.Caption>

                      <div className="align-center text-center mt-20">
                        <h1 className="font-semi-bold text-gray-300 text-sm m-2">{sub}</h1>
                          <p className="text-xs leading-relaxed m-2">{title}</p>
                      </div>
                      </Carousel.Item>
                    ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
      <div className="mt-10">
        <p>To view other projects by Languages, language.</p>
        <Link to="/html">
          <button className="btn_2 text-sm">HTML</button>
        </Link>
        <Link to="/react">
          <button className="btn_2 text-sm">React</button>
        </Link>
        <Link to="/solidity">
          <button className="btn_2 text-sm">Solidity</button>
        </Link>
        </div>
  </div>
  </section>
)
}


export default Portfolio;
