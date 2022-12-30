
import '../index.css'
import React from 'react';



function Footer() {
  return (
    <div className="Footer h-1/2 mt-72 md:pt-6 md:mt-82">
      <p className="text-cyan-600 p-4 border-t-4 border-cyan-50 text-center bt">
        &#169; Copyright Orhmo. All rights reserved.
        <br />
        Designed and Coded by <br /> <a href="https://www.github.com/orhmo" className= "text-2xl leading-8 font-signature text-cyan-600 no-underline"> Orhmo </a>
      </p>
    </div>
  );
}

export default Footer;
