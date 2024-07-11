import React from 'react'
import './searchCartMain.css'
import { useEffect , useState } from 'react';
import OrbitOrgCo from "./OrbitDivOrg/OrbitOrg";
import { IoSearch } from "react-icons/io5";


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
                  <input type="text" value={ValueImputeSearch} onChange={(e)=>FunctionLoggerValueInputeD(e)} className='inputeSearch' placeholder='EX : React'/>
                </div>
            </div>
            <div className='contaner'>
              <OrbitOrgCo></OrbitOrgCo>
            </div>
    </div>

  )
}
