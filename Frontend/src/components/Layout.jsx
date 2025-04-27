import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout