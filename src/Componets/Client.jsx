import React from 'react'
import ayaasImg from "./asset/image/ayas-2 (1).jpg"
import "./App.css"
export default function Client() {
  return (
    <section id="cilent">
    <div className="container">
      <div className="contains">
        <h2>Valuable feedback from my client</h2>
        <h6>
          Most common methods for designing websites that work well on desktop is
          responsive and adaptive design
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-6">
        <img src={ayaasImg} className="img-fluid" alt={`${ayaasImg} `} />
        </div>
        <div className="col-lg-6">
          <h5>
            “Awesome website! Easy to use and edit, it has a lot of options to
            design whatever you need, it is professional and fun. I was very
            successful creating my profile using designer which gave me
            unbelievable reach &amp; appreciation.”
          </h5>
          <p>Ayas Ibrahim</p>
          <span>Frontend Devloper</span>
        </div>
      </div>
    </div>
  </section>
  
  )
}
