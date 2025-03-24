import React from 'react'
import Aboutimg from './asset/image/aboutaayas.jpg'

import "./App.css"
import Button from './Button'
import DownloadCvButton from './DownloadCvButton'
export default function Aboutinfo() {

 
  return (
    <div className="container">
  <div className="row personalinfo">
    <div className="col-lg-4">
      <img src={Aboutimg} alt=""  className='img-fluid ayasimg'/>
    </div>
    <div className="col-lg-8">
      <h6>
        I’m a Reat Developer based in Chittagong, Bangladesh.
        I strives to build immersive and beautiful web applications through
        carefully crafted code and user-centric design.
      </h6>
      <div className="info row py-3">
        <div className="col-6">
          <p>
            Name :<span className="text-dark px-3">Ayas Ibrahimm</span>
          </p>
          <p></p>
          <p>
            Experience : <span className="text-dark px-3"> 2 Years</span>
          </p>
          <p>
            Phone : <span className="text-dark px-3"> <a href="tel:+8801857792946">01857792946</a></span>
          </p>
         
        </div>
        <div className="col-6">
          <p>
            Freelance : <span className="text-dark px-3"> Available</span>
          </p>
          <p>
            Langages : <span className="text-dark px-3"> English,Bangla,Hindi</span>
          </p>
          <p>
            Email :{" "}
            <a href="mailto:aayasabraham@gmail.com" className="px-3">
              {" "}
              aayasabraham@gmail.com
            </a>
          </p>
          
        
        </div>
      </div>
      <div className="mt-5 ">
      <DownloadCvButton/>
      </div>
    </div>
  </div>
</div>

  )
}
