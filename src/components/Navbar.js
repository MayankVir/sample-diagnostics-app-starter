import React, { useState } from 'react'
import logo from "./logo.png"
import "./Navbar.css"
import {NavbarData }from "./NavbarData";

export default function Navbar() {

      const [click, setClick] =  useState(false);

      const handleClick = () => setClick(!click);

      return (
            <div className="Navbar">
                  <img src = {logo} alt="Logo"></img>
                  <div className="heading">SYSTEM DIAGNOSTIC APP</div>
                  <ul className={click ? "NavbarList response" : "NavbarList"}>
                        {NavbarData.map((val,key) =>{
					return (
						<li
						key = {key}
						className="row"
						id={window.location.pathname === val.link ? "active": ""}
						onClick={() => {
							window.location.pathname = val.link;
						}}
						>
						<div id="title">{val.title}</div>
						</li>
					);	
				})}
                  </ul>
                  <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                  </div>
            </div>
      )
}

