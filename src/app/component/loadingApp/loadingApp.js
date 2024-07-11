import React from 'react'
import './loadingApp.css'
import { useEffect , useState } from 'react';
export default function LoadingApp() {
    const [first, setfirst] = useState('true')
    useEffect(()=>{
        setTimeout(()=>{
            setfirst('false')
        }, 5000)
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
                </div>
            </>
        : ''
        }
    </>
    )
}
