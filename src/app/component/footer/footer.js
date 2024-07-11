import React from 'react'
import './footer.css'
import ProgramLanMover from "./programLanMover/programLanMover";
import { FaRegCopyright } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function footer() {
  return (
    <div className='footerElement'>
        <ProgramLanMover></ProgramLanMover>
        <div className='divFoterEndMain'>
            <div className="divFoterEndMainparagraf">
            We, the lorem team, hope that you will make the best use of the content of this website so that you can make double progress in the future and use the content to be at the top of your field. enter :
                <div className='InputeDivFooterEmail'>
                    <input className='inpInputeDivFooterEmail' type="text" id="" placeholder='Email'/>
                    <button className='btnInputeDivFooterEmail'><IoSend size={25} color='black'></IoSend></button>
                </div>
            </div>
            <div className="divFoterEndMainLink">
                <div className="iconListFooter firstDiv"><FaGithub size={30} color='white'></FaGithub></div>
                <div className="iconListFooter"><SiTelegram size={30} color='white'></SiTelegram></div>
                <div className="iconListFooter lastDiv"><IoLogoWhatsapp size={30} color='white'></IoLogoWhatsapp></div>
            </div>
            <div className='divFoterEndMainListText'>
                <ul className='parentUlFooter'>
                    <li className="ListChildLinkRouter">Home</li>
                    <li className="ListChildLinkRouter">Learning</li>
                    <li className="ListChildLinkRouter">About</li>
                    <li className="ListChildLinkRouter">Countact us</li>
                </ul>
            </div>
        </div>
        <div className='divFoterVersionWeb'>
            <div className='roulsFooterproduct'>All absolute information to(mmd 2dar)<div className='iconListFooter'><FaRegCopyright color='white' size={15}></FaRegCopyright></div></div>
            <div className='versionWebSiteFooter'>v1.0</div>
        </div>
    </div>
  )
}
