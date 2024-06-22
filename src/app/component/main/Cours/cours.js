import React  from 'react'
import { useEffect ,  useState} from 'react'
import './cours.css'
import { IoArrowUpOutline } from "react-icons/io5";
import { IoArrowDownOutline } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { BsBarChartLine } from "react-icons/bs";

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
import { TbBrandNextjs } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { AiOutlineAreaChart } from "react-icons/ai";
import { SiReactquery } from "react-icons/si";
import { GrGrommet } from "react-icons/gr";
import { SiSemanticuireact } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FiGitlab } from "react-icons/fi";
import { IoGitMergeSharp } from "react-icons/io5";


export default function Cours() {
    
    const [sortOrder, setSortOrder] = useState('asc');
    const [IconPriceAndDate, setIconPriceAndDate] = useState('')
    const [InputeSearch, setTextInputeSearch] = useState('')
    const [ArrayValueCartCourse,setArrayValueCartCourse] = useState([])
    let arrey = [
        {id:'1',title:'html',section:'react is the best',src:[<FaHtml5 size={120} color='rgb(255, 152, 35)'></FaHtml5>],price:'130000T'},
        {id:'2',title:'css',section:'react is the best',src:[<FaCss3Alt size={120} color='rgb(69, 162, 255)'></FaCss3Alt>],price:'13000T'},
        {id:'3',title:'js',section:'react is the best',src:[<IoLogoJavascript size={120} color='yellow'></IoLogoJavascript>],price:'13000T'},
        {id:'4',title:'bootstrap',section:'react is the best',src:[<FaBootstrap size={120} color='rgb(185, 55, 255)'></FaBootstrap>],price:'13000T'},
        {id:'5',title:'tailwind',section:'react is the best',src:[<RiTailwindCssLine size={120} color='aqua'></RiTailwindCssLine>],price:'1000T'},
        {id:'6',title:'git',section:'react is the best',src:[<IoGitMergeSharp size={120} color='orange'></IoGitMergeSharp>],price:'10000T'},
        {id:'9',title:'react',section:'react is the best',src:[<FaReact size={120} color='aqua'></FaReact>],price:'130000T'},
        {id:'10',title:'angular',section:'react is the best',src:[<FaAngular size={120} color='red'></FaAngular>],price:'130000T'},
        {id:'11',title:'vue',section:'react is the best',src:[<IoLogoVue size={120} color='green'></IoLogoVue>],price:'130000T'},
        {id:'12',title:'jquery',section:'react is the best',src:[<SiJquery size={120} color='rgb(75, 162, 255)'></SiJquery>],price:'130000T'},
        {id:'13',title:'nextJs',section:'react is the best',src:[<TbBrandNextjs size={120} color='black'></TbBrandNextjs>],price:'130000T'},
        {id:'8',title:'gitlab',section:'react is the best',src:[<FiGitlab size={120} color='orange'></FiGitlab>],price:'130000T'},
        {id:'7',title:'gitHub',section:'react is the best',src:[<FiGithub size={120} color='rgb(43, 0, 255)'></FiGithub>],price:'130000T'},
    ]
    useEffect(()=>{
        setArrayValueCartCourse(arrey)
    },[])
    const parsePrice = price => parseInt(price.replace('T', ''));
    const functionSorterPrice = [...ArrayValueCartCourse].sort((a ,b )=>{
        let priceA = parsePrice(a.price)
        let priceB = parsePrice(b.price)
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    })
    let ChangerIconFunction = (m)=>{
        setIconPriceAndDate(m)
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }
    
    useEffect(()=>{

        if (ArrayValueCartCourse) {
            let filterProduct = ArrayValueCartCourse.filter((i) => {
                if (i.title === InputeSearch) {
                    const docOn = document.getElementById(i.id);
                    console.log(docOn);
                    return i
                }
            });
        if (filterProduct.length > 0) {
            setArrayValueCartCourse(filterProduct)
        }else{
            setArrayValueCartCourse(arrey)
        }
        }
        
    },[InputeSearch])


    let functionHoverdeDivForFrontHovered = (e , i) =>{
        let docDivFrontHover = document.getElementById(`frontHoverDivTag${i}`)
            docDivFrontHover.style.display='flex'
            docDivFrontHover.style.opacity='1'
        console.log(docDivFrontHover);
    }
    let functionHoverdeDivForFrontLeaved = (e , i) =>{
        let docDivFrontHover = document.getElementById(`frontHoverDivTag${i}`)
        docDivFrontHover.style.opacity='0'
        setTimeout(() => {
        docDivFrontHover.style.display='none'
        }, 600);
        console.log(docDivFrontHover);
    }


  return (
    <div className='CourseParentOrgDiv'>
        <div className='DivFilterProductAndCours'>
            <div className='SearchBoxCourse'>
                <input value={InputeSearch} onChange={(e)=>setTextInputeSearch(e.target.value)} className='inputSearchCours' type="text" name="" id="" placeholder='Which course are you looking for?'/>
            </div>
            <div className='FilterBoxCourse'>
                <div className='FilterByPriceBoxCours' onClick={()=>ChangerIconFunction('price')}>Price<div>{IconPriceAndDate === 'price' ? <IoArrowDownOutline size={15} color='white'/>:<IoArrowUpOutline size={15} color='white'/>}</div></div>
            </div>
        </div>
        <div className='CoursMainDivParent'>
            {functionSorterPrice ? functionSorterPrice.map((i)=>
                
                    <div onMouseMove={(e)=>functionHoverdeDivForFrontHovered(e , i.id)} onMouseLeave={(e)=>functionHoverdeDivForFrontLeaved(e , i.id)} className='CoursesDiv' id={i.id} >
                        <div className='IconAndImageDiv'>{i.src}</div>
                        <h2 className='titleheader'>{i.title}</h2>
                        <p className='paragrafMainDiv'>{i.section}</p>
                        <p className='priceMainDiv'>{i.price}</p>
                        <div className='frontHoverDivTag' id={'frontHoverDivTag'+i.id}>
                            <div className='glowingHoveredDiv'>
                                <div className='parentCartFront'>
                                    <div className="DivFrontChilde"><LuShoppingBasket size={50} color='hsl(119, 100%, 50%)'></LuShoppingBasket></div>
                                    <div className="DivFrontChilde"><CiHeart size={50} color='red'></CiHeart></div>
                                    <div className="DivFrontChilde"><BsBarChartLine size={40} color='rgb(0, 255, 166)'></BsBarChartLine></div>
                                </div>
                                        <div className='GlowingDivFrontHoverd'></div>
                            </div>
                        </div>
                    </div>
            ):''}
        </div>

    </div>
  )
}
