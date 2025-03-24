import React from "react";
import "./App.css";
import Button from "./Button";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 img">
            <Logo />
          </div>
          <div className="col-lg-4">
            <h2>Let's work together</h2>
            <p>
              You can express yourself however you want and whenever you want,
              for free. You can customize a template or make your own.
            </p>
          </div>
          <div className="col-lg-4">
            <a href="/">
              <Button
                className="btn w-50 btn-warning text-dark px-1"
                text="Lets Talk"
                icon={<i className="fa-regular fa-paper-plane ms-2" />}
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 call">
           <div className="d-flex">
           <h6 className="p-0 m-0">Call:</h6>
           <p className="ps-3">    <a href="tel:+8801857792946">+8801857792946</a></p>
           </div>
          </div>
          <div className="col-lg-4 call">
           <div className="d-flex ">   <h6>Email:</h6>
           <p className="ps-3">  <a href="mailto:aayasabraham@gmail.com">aayasabraham@gmail.com</a></p></div>
          </div>
          <div className="col-lg-4 d-flex  call">
            <h6>Follow me:</h6>

          

            <div className="icon d-flex ps-3 pb-0">
           
                <span className="
                me-3">
                  <a href="https://www.facebook.com/ayas.ebrahim.77/">
                    {" "}
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </span>
                <span className="me-3">
                  <a href="https://www.linkedin.com/in/ayas-ibrahim-1783b5326/">
                    {" "}
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </span>
                <span className="me-3">
                  <a href="https://www.instagram.com/aayas_ibrahim/">
                    {" "}
                    <i className="fa-brands fa-instagram" />
                  </a>
                </span>
                <span className="me-3">
                  <a href="https://github.com/aayasIbrahim">
                    {" "}
                    <i className="fa-brands fa-github" />
                  </a>
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
