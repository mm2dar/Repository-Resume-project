import React from 'react'
import Header from "./component/header/header";
import Main from "./component/main/main";
import Footer from "./component/footer/footer";
import Loading from "./component/loadingApp/loadingApp";
import './page.css'
export default function page() {
  return (
    <div className='headerMainOrgParent'>
        <Loading></Loading>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  )
}
