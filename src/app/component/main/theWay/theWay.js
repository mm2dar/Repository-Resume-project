import React from 'react';
import './theWay.css';
import { useState , useEffect} from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


export default function TheWayProgramer() {

  const [BolianValueClicked, SetDivIsClicked] = useState('')
  const [inforamtionTagOrg, SetinforamtionTag] = useState('')
  const [inforamtionTagTaget, SetinforamtionTagTarget] = useState('')
  const [ArrayLogerCircleInformation, SetArrayLogerCircleInformation] = useState('')
  

  let informationTag =[
    {number:1 , id:"html", statment:"Your path is very easy and simple, you just have to learn the basic language of html.We suggest you to learn js and css for your progress so that you can progress in your cartoon",before:"" ,Way:'main'},
    {number:3 ,id:"css", statment:"Your path is very simple, you just need to learn basic and powerful HTML as a prerequisite to be able to implement CSS elements. Learn well so that you can use the <div> tag features well",before:"html",Way:'main'},
    {number:5 ,id:"js", statment:"Your path is relatively easy. You can only remember the js language first and then use it from within the DOM, but our suggestion is that you first learn the powerful html and css languages ​​so that you can use the js language and use the DOM.I have to take it too",before:"html-css",Way:'main'},
    {number:7 ,id:"react", statment:"react is one of the best js libraries that you can research about to find out that most of the front end programmers use the react library. In fact, the reason why programmers use react widely is that it can write programs piece by piece and connect them using the import command, and another feature is that react itself has a unique DOM and other features. You can access the react path by following the path of html, css and js",before:"html-css-js",Way:'main'},
    {number:9 ,id:"angular", statment:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, Angular provides a robust framework for building scalable and high-performance web applications.",before:"html-css-js",Way:'main'},
    {number:11 ,id:"vue", statment:"Vue.js is an open-source progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as much or as little of Vue as you like.",before:"html-css-js",Way:'main'},
    {number:13 ,id:"next", statment:"Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications. Developed by Vercel, it provides a range of features that streamline the development process.",before:"html-css-js",Way:'main'},
    {number:15 ,id:"jquery", statment:"jQuery is a fast, small, and feature-rich JavaScript library. It simplifies tasks like HTML document traversal and manipulation, event handling, animation, and Ajax with an easy-to-use API that works across a multitude of browsers.",before:"html-css-js",Way:'main'},
    {number:17 ,id:"git", statment:"It is a powerful project control system that can help you during various projects. In short, we would like to explain that Git is actually the same ctrl + z as PubScript, with which you can access your previous codes.",before:"html",Way:'sub'},
    {number:19 ,id:"github", statment:"",before:"html",Way:'sub'},
    {number:21 ,id:"bootstrap", statment:"",before:"html-css",Way:'sub'},
    {number:23 ,id:"tailwind", statment:"",before:"html-css",Way:'sub'},
  ]

  let handleMouseEnter = (event, targetLines) => {
    targetLines.forEach(line => {
      document.getElementById(line).classList.add('highlight');
    });
  }
  
  let handleMouseLeave = (event, targetLines) => {
    targetLines.forEach(line => {
      document.getElementById(line).classList.remove('highlight');
    });
  SetinforamtionTagTarget(document.querySelector('.divMapWayContentSimple'))

  }
  
useEffect(()=>{
    if (BolianValueClicked === 'true') {
      document.querySelector('.parentDivTopLForInformationWay').style.display="flex"

    }else{
      document.querySelector('.parentDivTopLForInformationWay').style.display="none"
    }
},[BolianValueClicked])


  let CloserInfWay = ()=>{
    SetDivIsClicked('false')
  }
  let InfTagForMainWay = (e)=>{
      let informayionTag = e.target
      SetinforamtionTag(informayionTag.getAttribute('tag'));


      let docArrayStato = document.querySelector('.startForBigining')
      let a ;
      informationTag.forEach((i)=>{
        if (i.id===informayionTag.getAttribute('tag')) {
         a = i.before
         let arr = a.split('-')
        docArrayStato.innerHTML=`<div class='circleDivInformation' id='circleDivInformationStart'>Start</div>`

        
            if (i.before==='') {
              console.log('mantegie');
              docArrayStato.insertAdjacentHTML('beforeend',`
                <div class='divConnector2'></div>
                <div class='circleDivInformation' id='circleDivInformationhtmlEnd'>${i.id}</div>

              `)
            }else {
              arr.forEach(ir => {
                docArrayStato.insertAdjacentHTML('beforeend',`
                  <div class='circleDivInformation' id='circleDivInformationhtmlID'>${ir}
                  <div class='divConnector1'></div>
                  </div>
                  <div class='divConnector2'></div>
                  <div class='circleDivInformation' id='circleDivInformationhtmlEnd'>${i.id}</div>
                `)
              })
            }


      }})

  }


  return (
    <>
                    

      <div className='theWayProgramer'>
      <div className="parentDivTopLForInformationWay">
          <div className="ChildeDivInfWay">
                <div onClick={CloserInfWay} className='CloserIconWay'><VscChromeClose color='red' size={40}></VscChromeClose></div>
                    <div className='divMapWayContentSimple'>
                        <div>
                          <div className='startForBigining'>
                            <div className='circleDivInformation' id='circleDivInformationID'>Start</div>

                          </div>
                        </div>
                    </div>
                {informationTag.map((i)=>
                  i.id === inforamtionTagOrg ?
                  (
                  <React.Fragment key={i.id}>
                    <h1 className='divMapOrgTitleMain'>{i.id}</h1>
                    <p className='divMapOrgTextMain'>{i.statment}</p>
                    <button className='learnTheStartLan'> Going to Learn {i.id}</button>
                  </React.Fragment>
                  )
                  :('')
                )}
          </div>
      </div>
        <div className='textAboutWay'>
          <h1 className='titleWay'>The map of becoming a programmer</h1>
          <p className='paragrafWay'>To become a certified programmer, you have to start learning one by one and piece by piece. As a rule, anyone who wants to learn science or technology should use the guidance of others, well, here we have designed a road map for you to become a front-end programmer, which we have displayed for you in the form of a tree diagram.</p>
        </div>
            <div className='InformationMap'>
                <div className='childMapMain'>Main Path<div></div></div>
                <div className='childMapSub'>Sub Path<div></div></div>
            </div>
        <div className='theWayGraph'>
          <div tag='html' id='HtmlGraph' onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))} >HTML</div>
          <div tag='css' id='CssGraph' onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss'])}>CSS</div>
          <div tag='js' id='JSGraph' onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss', 'OrgLineCssJS'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss', 'OrgLineCssJS'])}>JavaScript</div>
          <div tag='react' id="ReactGraph" onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSReact'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSReact'])}>React</div>
          <div tag='angular' id="AngularGraph" onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSAngular'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSAngular'])}>Angular</div>
          <div tag='vue' id="VueGraph" onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSVue'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSVue'])}>Vue</div>
          <div tag='git' id="GitGraph" onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, [ 'OrgLineHtmlGit'])} onMouseLeave={(e) => handleMouseLeave(e, [ 'OrgLineHtmlGit'])}>Git</div>
          <div tag='github' id="GitHubGraph" onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineGitGitHub'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineGitGitHub'])}>GitHub</div>
          <div tag='naxt' id="NextJSGraph" onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSNextJs'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSNextJs'])}>Next Js</div>
          <div tag='jquery' id="JqueryGraph" onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))}  onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSjQuery'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss', 'OrgLineCssJS', 'OrgLineJSjQuery'])}>jQuery</div>       
          <div tag='bootstrap' id='BootstrapGraph' onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))} onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss','OrgLineCssBootstrap'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss','OrgLineCssBootstrap'])}>Bootstrap</div>
          <div tag='tailwind' id='TailwindGraph' onClick={(e)=>(SetDivIsClicked('true') , InfTagForMainWay(e))} onMouseEnter={(e) => handleMouseEnter(e, ['OrgLineHtmlCss','OrgLineCssTailwind'])} onMouseLeave={(e) => handleMouseLeave(e, ['OrgLineHtmlCss','OrgLineCssTailwind'])}>Tailwind</div>
        </div>

        <div className="LineConnect" id='OrgLineHtmlCss'></div>
        <div className="LineConnect" id='OrgLineCssJS'></div>
        <div className="LineConnect" id='OrgLineJSReact'></div>
        <div className="LineConnect" id='OrgLineJSVue'></div>
        <div className="LineConnect" id='OrgLineJSAngular'></div>
        <div className="LineConnect" id='OrgLineJSNextJs'></div>
        <div className="LineConnect" id='OrgLineJSjQuery'></div>
        <div className="LineConnect" id='OrgLineHtmlGit'></div>
        <div className="LineConnect" id='OrgLineGitGitHub'></div>
        <div className="LineConnect" id='OrgLineCssBootstrap'></div>
        <div className="LineConnect" id='OrgLineCssTailwind'></div>
      </div>

    </>
  );
}
