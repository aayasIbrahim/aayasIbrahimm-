import React from 'react'
import P1 from "./asset/image/p-1.png"
import P2 from "./asset/image/p-2.png"
import P3 from "./asset/image/p-3.png"
import P4 from "./asset/image/p-4.png"
import "./App.css"
export default function ProjectContent() {
  return (
    <section id="project">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-lg-5">
                <img src={P1} alt=""className="img-fluid"/>
                <p>Website Design</p>
                <h2>NFT Website UI Design (light & dark mood)</h2>
            </div>
            <div className="col-lg-5 ">
                <img src={P2} alt=""className="img-fluid"/>
                <p>Website Design</p>
                <h2>NFT Website UI Design (light & dark mood)</h2>
            </div>
            <div className="col-lg-5">
                <img src={P3} alt=""className="img-fluid"/>
                <p>Website Design</p>
                <h2>NFT Website UI Design (light & dark mood)</h2>
            </div>
            <div className="col-lg-5">
                <img src={P4} alt=""className="img-fluid"/>
                <p>Website Design</p>
                <h2>NFT Website UI Design (light & dark mood)</h2>
            </div>
            
        </div>
    </div>
  </section>
 
  )
}
