import React from 'react'
import NavTop from "./navBarTop/navBarTop";
import "./navBar.css";
import Alert from "../alertTXT/alert.js";
import { FaTelegramPlane } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { IoCaretUp } from "react-icons/io5";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export default function navBar() {

  let navigatorCopyText = event =>{
    event.preventDefault()
    navigator.clipboard.writeText(`+989398896930`)
    let doc = document.querySelector('.AlertBoxForCopy')
    doc.classList.add('AlertBoxForCopyClicked')
    setTimeout(() => {
      doc.classList.remove('AlertBoxForCopyClicked')
    }, 2000);
  }


  return (
    <div className='OrgnavBarParent'>
          <div className="navChild1">
              <a href="https://t.me/oghostoM" className="routerMPA">
                <div className="iconNavBarMpa"><FaTelegramPlane size={17} /></div>
              </a>
              <a href="https://github.com/mm2dar/Repository-Resume-project.git" className="routerMPA">
                <div className="iconNavBarMpa"><FiGithub size={17}/></div>
              </a>
              <div href="" onClick={(e)=>navigatorCopyText(e)} className="routerMPA">
                <div className="iconNavBarMpa"><SiWhatsapp size={17}/></div>
                <div className='AlertBoxForCopy'><div className='IconeryByClassAlert'><IoCaretUp></IoCaretUp></div>The number was Copied <IoCheckmarkDoneSharp color='green' size={20}></IoCheckmarkDoneSharp></div>
              </div>
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
