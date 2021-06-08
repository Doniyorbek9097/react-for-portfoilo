import React from "react";
import Navbar from "../components/Navbar";
 
export default function Header(){
  return(
    <header>
    <h1 className="logo">Portfoilo</h1>
    <Navbar/>
    <div className="search-box">
    <span>search</span>
    </div>
    </header>
  )
}