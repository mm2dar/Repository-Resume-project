import React from 'react'
import './loadingApp.css'
import { useEffect , useState } from 'react';
export default function LoadingApp() {
    const [first, setfirst] = useState('true')
    useEffect(()=>{
        setTimeout(()=>{
            if (document.querySelector('.compeletedLoadingAndGoingToWeb')) {
                document.querySelector('.compeletedLoadingAndGoingToWeb').style.display='flex'
                document.querySelector('.animationloadingEffect').style.display='none'
            }
        }, 5000)
        setTimeout(()=>{

            setfirst('false')
        }, 7000)
    },[first])
    return (

    <>
        { first === "true" ?
            <>
                <div className='loadingProInformation'>
                    <div className='animationloadingEffect'>
                        <div className="divLoading divLoadingCss1"></div>
                        <div className="divLoading divLoadingCss2"></div>
                        <div className="divLoading divLoadingCss3"></div>
                        <div className="divLoading divLoadingCss4"></div>
                        <div className="divLoading divLoadingCss5"></div>
                        <div className="divLoading divLoadingCss6"></div>
                        <div className="divLoading divLoadingCss7"></div>
                        <div className="divLoading divLoadingCss8"></div>
                        <div className="divLoading divLoadingCss9"></div>
                        <div className="divLoading divLoadingCss10"></div>
                    </div>
                    <div className='compeletedLoadingAndGoingToWeb'>
                        The website is ready
                    </div>
                </div>
            </>
        : ''
        }
    </>
    )
}
