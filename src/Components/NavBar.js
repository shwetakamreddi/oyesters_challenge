import React, { useState } from 'react'
import "./navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import {BiHome} from "react-icons/bi"
import {FiMail} from "react-icons/fi"
import {BsShuffle} from "react-icons/bs"

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className="navbar">
            <div className="logo">
                <div className="header">
                    <h1><span className="d">D</span><span className="s">S</span><span className="i">I</span></h1>
                </div>
                <div className="subheader1">
                    <p>DWIDASA</p>
                </div>
                <div className="subheader2">
                    <p>SAMSARA</p>
                </div>
                <div className="subheader3">
                    <p>INDONESIA</p>
                </div>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <div className="nav-items">
                    <li className="nav-item">
                        <a href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Product</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Technology</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Client</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Partner</a>
                    </li>
                </div>
                <div className="icons">
                    <BiHome/>
                    <FiMail/>
                    <BsShuffle/>
                </div>
            </ul>

        </div>
    )
}

export default NavBar
