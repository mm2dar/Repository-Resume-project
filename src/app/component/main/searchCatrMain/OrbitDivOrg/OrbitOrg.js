import React from 'react'
import './OrbitOrg.css'
import { FaReact } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { RiBootstrapFill } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
export default function OrbitOrg() {
  return (
    <div className='OrbitOrgDiv'>
                    <div className='Web'>

                    <div className='textSunContaner'>
                    Web
                    </div>
                    </div>
                    <div className='JS'>
                        <div>
                            <div className='JSCenterText'><IoLogoJavascript size={35} color='yellow'></IoLogoJavascript></div>
                            </div>
                        </div>
                    <div className='react'>
                        <div>    
                            <div className='reactCenterText'><FaReact size={35} color='aqua'></FaReact></div>
                            </div>
                         </div>                        
                    <div className='vue'>
                        <div>
                            <div className='vueCenterText'><IoLogoVue size={35} color='#0c8d00'></IoLogoVue></div>
                            </div>
                        </div>
                    <div className='angular'>
                        <div>                        
                            <div className='angularCenterText'><FaAngular size={35} color='red'></FaAngular></div>
                            </div>
                        </div>                    
                    <div className='Html5'>
                        <div>                        
                            <div className='Html5CenterText'><FaHtml5 size={35} color='orange'></FaHtml5></div>
                            </div>
                        </div>
                    <div className='Css3'>
                        <div>                        
                            <div className='Css3CenterText'><FaCss3Alt size={35} color='rgb(0, 140, 255)'></FaCss3Alt></div>
                            </div>
                        </div>                    
                    <div className='Github'>
                        <div>                        
                            <div className='GithubCenterText'><FiGithub size={35} color='blue'></FiGithub></div>
                            </div>
                        </div>                    
                    <div className='Bootstrap'>
                        <div>
                            <div className='BootstrapCenterText'><RiBootstrapFill size={35} color='rgb(158, 0, 194)'></RiBootstrapFill></div>
                            </div>
                        </div>                            
                    <div className='TailwindCss'>
                        <div>
                            <div className='TailwindCssCenterText'><RiTailwindCssLine size={35} color='aqua'></RiTailwindCssLine>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
