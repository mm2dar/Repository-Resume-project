import React from 'react'
import "./Cube.css";
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
export default function main(props) {
  return (
<>
<div class="cube">

    <div class="face front">{props.stage1}</div>
    <div class="face back">{props.stage2}</div>
    <div class="face left">{props.stage3}</div>
    <div class="face right">{props.stage4}</div>
    <div class="face top">{props.stage5}</div>
<div class="face bottom">{props.stage6}</div>
</div>
<div className='shadowL'>

</div>
</>
  )
}
