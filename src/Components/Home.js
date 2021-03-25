import React from 'react'
import "./home.css"

function Home() {
    return (
     <div className="Home">
            <div className="home-img">
                <img src="img/Home.png" alt="home-img"/>
            </div>
        <div>
            <div className="home-info">
                <p>Making the most of the ever-growing <br></br>
                <span>Information Technology</span></p>
            </div>
            <div className="home-sub-info">
                <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
            </div>
            <div className="read">
                <p>Read More</p>
            </div>
        </div>
      </div>
    )
}

export default Home
