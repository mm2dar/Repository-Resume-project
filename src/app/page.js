import React from 'react'
import Header from "./component/header/header";
import Main from "./component/main/main";
import Footer from "./component/footer/footer";
import './page.css'
export default function page() {
  return (
    <div className='headerMainOrgParent'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  )
}
