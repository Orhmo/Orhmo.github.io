import React from 'react';
import { IconContext } from "react-icons";

import { BiCodeAlt, BiLayout } from 'react-icons/bi';
import { RiQuillPenLine } from 'react-icons/ri';

const Services = () => {
  return (
    <section name="services" className="Services">
    <div data-aos="zoom-out-right" data-aos-duration="10000" className="flex flex-col pb-52 m-auto items-center justify-center text-center  md:py-10 md:pb-52">
      <h1 className="text-cyan-600 py-2 text-3xl md:text-4xl font-bold">SERVICES</h1>
      <p className="text-md py-3 leading-8 text-gray-800 mb-4">What I Offer:</p>

    <div className='grid md:grid-cols-3 mx-auto gap-12 md:gap-8 md:mt-16'>
      <div className='text-center items-center shadow-xl shadow-cyan-600 p-10 rounded-full blob'>
      <IconContext.Provider value={{ color: "black", className: "mx-auto animate-bounce"}}>
        <div>
          <BiCodeAlt />
        </div>
        </IconContext.Provider>
        <h2 className="services_title text-base font-bold m-2 ">
          Web
          Development</h2>
        <span className="services_description text-sm">
          I provide highly professional and responsive designs,
          using top notch framework easily accessible across all plaforms.</span>
        </div>

        <div className='mt-8 md:mt-0 text-center shadow-xl shadow-cyan-600 p-10 rounded-full blob'>
        <IconContext.Provider value={{ color: "black", className: "mx-auto animate-bounce"}}>
          <div>
            <BiLayout />
          </div>
          </IconContext.Provider>
          <h2 className="services_title text-base font-bold m-2">
          Responsive Layouts</h2>
          <span className="services_description text-sm">
          I build beautiful interfaces and layouts using latest frameworks to
          ensure improved capacity and performance.
          </span>
          </div>

          <div className='mt-8 md:mt-0 text-center shadow-xl shadow-cyan-600 p-10 rounded-full blob'>
          <IconContext.Provider value={{ color: "black", className: "mx-auto animate-bounce"}}>
            <div>
              <RiQuillPenLine />
            </div>
            </IconContext.Provider>
            <h2 className="services_title text-base font-bold m-2">
            Smart Contract
            Development</h2>
            <span className="services_description text-sm">
            Provide expectional and user friendly smart contracts
            customised to fit the clients requirements and needs.
            </span>
          </div>
    </div>
    </div>
    </section>
  )
}
export default Services;
