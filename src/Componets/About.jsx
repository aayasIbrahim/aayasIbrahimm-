import React from 'react'
import "./App.css"
import asd from "./asset/image/ayas-2 (2).jpg"
import abbg from "./asset/image/abut bg part.png"
import { Link } from 'react-router-dom'

console.log(abbg)
export default function About() {
  return (
    <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={asd} alt="kjhgv" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h2>About Me</h2>
          <p>
            With 2 years experience as a professional web developer, I have a strong background in building scalable and efficient web applications. I have a passion for learning and staying up-to-date with the latest technologies and trends
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion and
            collaboration.
          </p>
          <div className="click">
            <Link to={"/project"} className="btn btn-outline-success">
              See More
            </Link>
          </div>
        </div>
        <div className="abbgparts">
          <img src={abbg} alt="er" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  
  )
}
