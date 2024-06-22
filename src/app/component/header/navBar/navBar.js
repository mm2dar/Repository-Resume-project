import React from 'react'
import NavTop from "./navBarTop/navBarTop";
import "./navBar.css";
import { FaTelegramPlane } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

export default function navBar() {
  return (
    <div className='OrgnavBarParent'>
          <div className="navChild1">
              <a href="" className="routerMPA">
                <div className="iconNavBarMpa"><FaTelegramPlane size={17} /></div>
              </a>
              <a href="" className="routerMPA">
                <div className="iconNavBarMpa"><SiWhatsapp size={17}/></div>
              </a>
              <a href="" className="routerMPA">
                <div className="iconNavBarMpa"><FiGithub size={17}/></div>
              </a>
          </div>
          <div className="navChild2" >
              <p className='paragrafLink'>Click on the link to get the <a className='spanNavBar'>discount code</a></p>
          </div>
          <div className="navChild3">
              <p className='emailNavbar'>mirzaiemohammad594@gmail.com</p>

          </div>
    </div>
  )
}
