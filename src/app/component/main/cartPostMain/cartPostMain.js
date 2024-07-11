import React from 'react'
import './cartPostMain.css'
import Cube from "../Cube/Cube.js";
import { useEffect } from 'react';
export default function CartPostMain(props) {

  useEffect(()=>{

    let flex = props.flexDirection
    let documentCartCube = document.querySelector('.orgDivCartPostParent')

  }
  )

  return (
    <div className='orgDivCartPostParent' id={props.id} >
        <div className="ContainerText">
            <h1 className='titleHeaderCart'>
                      {props.titleCart}
            </h1>
            <p className='paragrafHeaderCart'>
                      {props.paragrafHeader}
            </p>
            <p className='textParagrafCart'>
                      {props.paragraf}     
            </p>
            <div className='btnCartParent'>
              <button className="btnMoreAndRegister" id='CartbtnMore'>More</button>
              <button className="btnMoreAndRegister" id='CartbtnRegister'>Register</button>
            </div>
        </div>
        <div className="ContainerImage">
          <div className='CubeControler'>
            <Cube
                      stage1 = {props.stage1}
                      stage2 = {props.stage2}
                      stage3 = {props.stage3}
                      stage4 = {props.stage4}
                      stage5 = {props.stage5}
                      stage6 = {props.stage6}
            ></Cube>
          </div>
        </div>
    </div>
  )
}
