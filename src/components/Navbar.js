import React from "react";

export default function Navbar(){
  return(
    <nav>
    <ul className="nav-list">
      <li><a href="#">Bosh sahifa</a></li>
      <li><a href="#">Ishlar</a></li>

      <li className="Kategoriyalar-box"><a href="#">Kategoriyalar ⇲</a>
      <ul className="Kategoriyalar">
      <li><a href="#">web dizayn</a></li>
      <li><a href="#">dasturlash</a></li>
      <li><a href="#">video mantaj</a></li>
      <li><a href="#">photo shop</a></li>
      <li><a href="#">android uchun ilovalar tuzish</a></li>
      </ul>
      </li>

      <li><a href="#">Yangiliklar</a></li>
      <li><a href="#">Haqida</a></li>
    </ul>
    </nav>
  )
}