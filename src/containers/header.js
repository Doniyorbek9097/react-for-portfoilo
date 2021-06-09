import React from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";
 
export default function Header(){
  return(
    <header>
    <h1 className="logo">Portfoilo</h1>
    <Navbar/>
    <Search/>
    </header>
  )
}