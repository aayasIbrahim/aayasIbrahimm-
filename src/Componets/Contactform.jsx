import React from 'react'
import "./App.css"
export default function Contactform() {
  return (
    <section id="form">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="d-flex ">
          <span style={{ fontSize: 18 }}>
            <i className="fa-solid fa-location-dot" />
          </span>
          <div className="mx-4">
            <h4>Address</h4>
            <p>Chawkbazar,Chittagong,Bangladesh</p>
          </div>
        </div>
        <div className="d-flex ">
          <span
            style={{ backgroundColor: "#F0FFE4", color: "red", fontSize: 18 }}
          >
            <i className="fa-regular fa-envelope" />
          </span>
          <div className="mx-4">
            <h4>Mail</h4>
            <p><a href="mailto:aayasabraham@gmail.com">aayasabraham@gmail.com</a></p>
          </div>
        </div>
        <div className="d-flex ">
          <span style={{ color: "#F16500", fontSize: 18 }}>
            <i className="fa-solid fa-phone" />
          </span>
          <div className="mx-4">
            <h4>Phone</h4>
            <p><a href="tel:8801857792946">01857792946</a></p>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control mx-4 py-3"
            placeholder="Your Name"
            aria-label="Username"
          />
          <input
            type="text"
            className="form-control py-3 "
            placeholder="Your Email"
            aria-label="Server"
          />
        </div>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control mx-4 py-3"
            placeholder="Your Phone"
            aria-label="Username"
          />
          <input
            type="text"
            className="form-control py-3 "
            placeholder="Subject"
            aria-label="Server"
          />
        </div>
        <div className="form-floating mx-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 246, width: "103%" }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2">Write your message here</label>
        </div>
        <a
          href="#"
          className="btn btn-warning text-white btn-outline-success w-25 py-3 mx-4 my-4"
        >
          Send Now
        </a>
      </div>
    </div>
  </div>
</section>


  )
}
