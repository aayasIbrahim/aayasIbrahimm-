import React from 'react'
import CardContent from './CardContent.jsx'
import "./App.css"
import img1 from "./asset/image/card 1.png"
import img2 from "./asset/image/card-2.png"
import img3 from "./asset/image/card-3.png"

export default function Card() {
  return (
    <section id="card">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 text-center shadow">
       <CardContent
       src={img1}
       h5="Awesome Idea"
       p="Most common methods for designing websites that work well on desktop is responsive and adaptive design"
       />
       
      </div>
      <div className="col-lg-4 text-center shadow">
        <CardContent
        src={img2}
        h5="High Quality"
        p="Most common methods for designing websites that work well on desktop is responsive and adaptive design"
        />
        
      </div>
      <div className="col-lg-4 text-center shadow">
      <CardContent
      src={img3}
      h5="Pixel Perfect"
      p="Most common methods for designing websites that work well on desktop is responsive and adaptive design" />
      </div>
    </div>
  </div>
</section>

  )
}
