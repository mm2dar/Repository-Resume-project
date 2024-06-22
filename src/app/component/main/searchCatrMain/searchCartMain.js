import React from 'react'
import './searchCartMain.css'
import { useEffect , useState } from 'react';
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

export default function SearchCartMain() {

  const [ValueImputeSearch, setValueImputeSearch] = useState('')

  let FunctionLoggerValueInputeD = (e)=>{
    setValueImputeSearch(e.target.value)
  }
  useEffect(()=>{
    console.log(ValueImputeSearch);
  },[ValueImputeSearch])

  return (
    <div className='divSearchOrgParent'>
            <div className='searcher'>
                <h1 className='header1TitleCartSearch'>What skills are you <span className='spanSearchCart'>looking</span> for?</h1>
                <p className='pargrafSearchDivParent'>If you want to learn the latest technology in the world, you can search in the box below</p>
                <div className='inputeParentDiv'>
                  <div className='iconSearchBox'><IoSearch size={25}></IoSearch></div>
                  <input type="text" value={ValueImputeSearch} onChange={(e)=>FunctionLoggerValueInputeD(e)} className='inputeSearch' placeholder='EX : React'/>
                </div>
            </div>
            <div className='contaner'>
                <div className='Web'>

                  <div className='textSunContaner'>
                    Web
                  </div>
                </div>
                <div className='JS'>
                    <div className='JSCenterText'><IoLogoJavascript size={35} color='yellow'></IoLogoJavascript></div>
                </div>
                  <div className='react'>
                    <div className='reactCenterText'><FaReact size={35} color='aqua'></FaReact></div>
                  </div>
                  <div className='vue'>
                    <div className='vueCenterText'><IoLogoVue size={35} color='#0c8d00'></IoLogoVue></div>
                  </div>
                  <div className='angular'>
                    <div className='angularCenterText'><FaAngular size={35} color='red'></FaAngular></div>
                  </div>
                  <div className='Html5'>
                    <div className='Html5CenterText'><FaHtml5 size={35} color='orange'></FaHtml5></div>
                </div>
                <div className='Css3'>
                    <div className='Css3CenterText'><FaCss3Alt size={35} color='rgb(0, 140, 255)'></FaCss3Alt></div>
                </div>
                <div className='Github'>
                    <div className='GithubCenterText'><FiGithub size={35} color='blue'></FiGithub></div>
                </div>
                <div className='Bootstrap'>
                    <div className='BootstrapCenterText'><RiBootstrapFill size={35} color='rgb(158, 0, 194)'></RiBootstrapFill></div>
                </div>
                <div className='TailwindCss'>
                    <div className='TailwindCssCenterText'><RiTailwindCssLine size={35} color='aqua'></RiTailwindCssLine></div>
                </div>
            </div>
    </div>

  )
}
