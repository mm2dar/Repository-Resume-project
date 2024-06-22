import React from 'react'
import "./header.css";
import NavBar from "./navBar/navBar";
import LineBar from "./navBar/navBarTop/navBarTop";
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { LiaUsersSolid } from "react-icons/lia";

export default function header() {


  window.addEventListener('scroll',function (e) {
    let Header = document.querySelector('#childeHeaderDiv')
    let scrolerHead = document.documentElement.scrollTop

      if (scrolerHead>2) {
        Header.classList.remove('childeHeaderDiv')
        Header.classList.add('childeHeaderDiv-active')
      }else if (scrolerHead<=2) {
        Header.classList.remove('childeHeaderDiv-active')
        Header.classList.add('childeHeaderDiv')
      }
    })


  return (
<>
<header className='headerorgMain'>
        <LineBar></LineBar>
        <NavBar></NavBar>
          <div className='childeHeaderDiv' id='childeHeaderDiv'>
              <div className="chilede2Headerdiv1">
                  <img className='logoWebSite' src="./imagePack/Logo-company-fotor-2024053112557.png" alt="" />
              </div>
              <div className="chilede2Headerdiv2">
                  <ul className="listUl">
                    <li className="ChildeUlHeader"><div className='IconRegisterHeaderBar'><TiHomeOutline></TiHomeOutline></div>Home</li>
                    <li className="ChildeUlHeader"><div className='IconRegisterHeaderBar'><AiOutlineProduct></AiOutlineProduct></div>Learning</li>
                    <li className="ChildeUlHeader"><div className='IconRegisterHeaderBar'><LiaUsersSolid></LiaUsersSolid></div>About</li>
                    <li className="ChildeUlHeader"><div className='IconRegisterHeaderBar'><IoCallOutline></IoCallOutline></div>contact us</li>
                  </ul>
              </div>
              <div className="chilede2Headerdiv3">
                <button className="btnLoginOrRigester"><div className='IconRegisterHeaderBar'><IoIosLogIn></IoIosLogIn></div>Login</button>
                <button className="btnLoginOrRigester"><div className='IconRegisterHeaderBar'><FiUserPlus></FiUserPlus></div>Register</button>
              </div>
          </div>
    </header>
    <div className='balls'>
        <div className="ballsChilds1"></div>
        <div className="ballsChilds2"></div>
        <div className="ballsChilds3"></div>
    </div>
</>
  )
}
