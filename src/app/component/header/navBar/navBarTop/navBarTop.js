import React from 'react'
import { useState , useEffect } from 'react';
import "./navBarTop.css";
export default function NavBarTop() {

    window.addEventListener('scroll',function (e) {
        let divParentSc = document.querySelector('.orgNavScrollBar')
          let scroler = document.documentElement.scrollTop
          let scrolHeight = document.documentElement.scrollHeight
          let clientHeight = document.documentElement.clientHeight
          let w = Math.floor((scroler)/(scrolHeight-clientHeight)*100)
            if (divParentSc) {
                divParentSc.style.width = `${w}%`
            }
        })
  return (
    <>
         <div className='orgNavScrollBar'>
            
         </div>
    </>
  )
}
