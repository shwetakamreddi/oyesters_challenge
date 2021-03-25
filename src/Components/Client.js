import React from 'react'
import "./client.css"
function Client() {
    return (
        <div className="client">
            <div className="group1">
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
            <div className="group2">
                <div className="title">
                    <p>PT Dwidasa Samsara Indonesia</p>
                </div>
                <div className="address">
                    <p>Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</p>
                </div>
            </div>
            <div className="group3">
                <div className="contact-header">
                    <p className="contact">Contact</p>
                </div>
                <div className="contact-details">
                    <p>Phone : +62.21.5314.1135<br/>
                       Fax : +62.21.5314.1135<br/>
                       Email : community@dwidasa.com</p>
                </div>
            </div>
            <div className="group4">
                <div className="img1">
                    <img src="img/img1.png" alt="micosoft"/>
                </div>
                <div className="img2">
                    <img src='img/img2.jpg' alt=".net"/>
                </div>
                <div className="img3">
                    <img src="img/img3.png" alt="java"/>
                </div>
                <div className="img4">
                    <img src="img/img4.png" alt="ios"/>
                </div>
                <div className="img5">
                    <img src="img/img5.jpg" alt="android"/>
                </div>
                <div className="img6">
                    <img src="img/img6.png" alt="blackberry"/>
                </div>
            </div>
        </div>
    )
}

export default Client
