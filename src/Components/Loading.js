import '../index.css'
import React from 'react';
import Typical from 'react-typical'


const Loading = () =>{
  return (
    <div
      className="Loader">
      <h1 className="w-full h-screen text-cyan-700 flex items-center justify-center text-center font-signature text-6xl md:text-9xl font-bold m-auto">
      <Typical
      steps={['O', 400, 'Or', 300, 'Orh', 200, 'Orhm', 100, 'Orhmo', 50, 'Orhmo . . . .', 500,]}
      loop={2}
      wrapper="p"
    />
      </h1>
    </div>
  );
}

export default Loading;
