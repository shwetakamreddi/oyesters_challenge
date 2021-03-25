import React from 'react'
import "./about.css"

function About() {
    return (
        <div className="About">
            <div className="about-img">
                <img src="img/About.png" alt="about-img" />
            </div>
            <div className="about-info">
                <p>Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span></p>
            </div>
            <div className="about-sub-info">
                <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept.</p>
                <p>Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
            </div>
        </div>
    )
}

export default About
