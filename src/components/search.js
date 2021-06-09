import React from "react";
import {FaSistrix } from 'react-icons/fa';

export default function Search(){
  return(
    <div className="search-box">
    <FaSistrix style={{color:"white", fontSize:"20px", padding:"10px"}}/>
    <input type="text" className="search-input" placeholder="Qidirish..." />
    <button className="search-btn"><FaSistrix style={{color:"white", fontSize:"50px", padding:"10px"}}/></button>
    </div>
  )
}
