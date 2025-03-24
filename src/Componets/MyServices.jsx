import React from 'react'
import Img11 from "./asset/image/cardhover1.png"
import Img2 from "./asset/image/caedhover2.png"
import Img3 from "./asset/image/cardhover3.png"
import "./App.css"
export default function MyServices() {
  return (
    <section id="service">
    <div className="container">
      <div className="contains text-center">
        <h3>My Sevices</h3>
        <p>
          Most common methods for designing websites that work well on desktop is
          responsive and adaptive design
        </p>
      </div>
      <div className="row ">
        <div className="col-lg-4 text-center card shadow-2">
          <img src={Img11} alt="" className="img-fluid" />
          <h2>Web Devlopment</h2>
          <p>
          Build fast, responsive, and modern websites using React.
	•	Convert Figma/Adobe XD designs into functional web pages.
	•	Ensure cross-browser and mobile-friendly designs.
          </p>
        </div>
        <div className="col-lg-4 text-center card shadow">
          <img src={Img2} alt="" className="img-fluid" />
          <h2>Front-End-Development</h2>
          <p>
          •	Develop interactive user interfaces with React.
	•	Optimize performance using best practices like lazy loading and code splitting.
	•	Use state management tools like Redux or Context API for scalable
          </p>
        </div>
        <div className="col-lg-4 text-center card shadow">
          <img src={Img3} alt="" className="img-fluid" />
          <h2> E-Commerce Development (If applicable)</h2>
          <p>
         
	•	Develop custom e-commerce solutions using React and backend technologies.
	•	Implement secure payment gateways and shopping cart functionalities.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
