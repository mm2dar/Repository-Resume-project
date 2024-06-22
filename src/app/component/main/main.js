import React from 'react'
import './main.css'
import SearchModernCart from "./searchCatrMain/searchCartMain";
import CartPostMain from "./cartPostMain/cartPostMain";
import ProgramerGraph from "./theWay/theWay.js";
import Cours from "./Cours/cours.js";
import { FaReact } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiSemanticui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaUikit } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { AiOutlineAreaChart } from "react-icons/ai";
import { SiReactquery } from "react-icons/si";
import { GrGrommet } from "react-icons/gr";
import { SiSemanticuireact } from "react-icons/si";

export default function main() {
  let InformationCart = [
    {
      id:'id1',
      flexDirection:``,
      titleCart:`Html & Css`,
      paragrafHeader:`The powerful language of html and css is the main basis for designing Shia websites, which every beginner should use these languages ​​to start work and design.After extensive learning of these languages, you should use frameworks that you can see their list in the cube.`,
      paragraf:`You can use the links below to learn the powerful language of html and css :`,
      stage1:<FaHtml5 size={120} color='orange'></FaHtml5>,
      stage2:<FaCss3Alt size={120} color='Blue'></FaCss3Alt>,
      stage3:<SiSemanticui size={120} color='#00ffc8'></SiSemanticui>,
      stage4:<FaBootstrap size={120} color='purple'></FaBootstrap>,
      stage5:<RiTailwindCssLine size={120} color='aqua'></RiTailwindCssLine>,
      stage6:<FaSass size={120} color='#e100ff'></FaSass>
    },
    {
      id:'id2',
      flexDirection:``,
      titleCart:`Java Script`,
      paragrafHeader:`JavaScript is the brain of your program that analyzes your data and information and displays them. It is the best language for website design. JavaScript language itself has many libraries and frameworks that you can see in the cube in front of you.`,
      paragraf:`You can use the links below to learn the powerful language of Java script :`,
      stage1:<SiJquery size={120} color='rgb(0, 124, 190)'></SiJquery>,
      stage2:<IoLogoJavascript size={120} color='yellow'></IoLogoJavascript>,
      stage3:<FaAngular size={120} color='red'></FaAngular>,
      stage4:<IoLogoVue size={120} color='#0c8d00'></IoLogoVue>,
      stage5:<SiNextdotjs size={120} color='#555'></SiNextdotjs>,
      stage6:<FaReact size={120} color='aqua'></FaReact>
    },
    {
      id:'id1',
      flexDirection:`left`,
      titleCart:`React`,
      paragrafHeader:`React is one of the JavaScript frameworks that has many new technologies, in addition to that, React has the ability to synchronize with other frameworks. Some famous frameworks that you can work with React are in the cube.`,
      paragraf:`You can learn about the powerful React framework using the following links :`,
      stage1:<FaReact size={120} color='aqua'></FaReact>,
      stage2:<SiMui size={120} color='Blue'></SiMui>,
      stage3:<SiSemanticuireact size={120} color='#00ffc8'></SiSemanticuireact>,
      stage4:<GrGrommet size={120} color='purple'></GrGrommet>,
      stage5:<AiOutlineAreaChart size={120} color='#0084ff'></AiOutlineAreaChart>,
      stage6:<SiReactquery size={120} color='aqua'></SiReactquery>
    },
  ]
  return (
    <div className='mainOrgParent'>
        <SearchModernCart></SearchModernCart>
        {
          InformationCart.map((infor)=>
          <CartPostMain 
            id = {infor.id}
            flexDirection = {infor.flexDirection}
            titleCart = {infor.titleCart}
            paragrafHeader = {infor.paragrafHeader}
            paragraf ={infor.paragraf}
            stage1 = {infor.stage1}
            stage2 = {infor.stage2}
            stage3 = {infor.stage3}
            stage4 = {infor.stage4}
            stage5 = {infor.stage5}
            stage6 = {infor.stage6}
          ></CartPostMain>
          
          )
        }
        <ProgramerGraph></ProgramerGraph>
        <Cours></Cours>
    </div>
  )
}
