import React from 'react';


import { FiTwitter, FiPhoneCall, FiGithub } from 'react-icons/fi';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';

const Side_nav = () => {
  return(
    <div className="side_nav">
            <a href="tel:+2349153563663" rel="noreferrer" target="_blank" className="side_social"><FiPhoneCall /></a>
            <a href="mailto:oorhmo@gmail.com" rel="noreferrer" target="_blank" className="side_social"><AiOutlineMail /></a>
            <a href="https://wa.me/+2349153563663" rel="noreferrer" target="_blank" className="side_social"><AiOutlineWhatsApp /></a>
            <a href="https://www.linkedin.com/in/valentina-oguka-3a7087245" rel="noreferrer" target="_blank" className="side_social"><CiLinkedin /></a>
            <a href="https://www.twitter.com/ooh_jhay" target="_blank" rel="noreferrer" className="side_social"><FiTwitter /></a>
            <a href="https://www.github.com/orhmo" target="_blank" rel="noreferrer" className="side_social"><FiGithub /></a>
    </div>
  )
}
export default Side_nav;
