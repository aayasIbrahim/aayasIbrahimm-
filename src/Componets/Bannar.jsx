import React from "react";
import styles from "./Bannar.module.css";
import Button from "./Button";
import Bannarimage from "./asset/image/ayas.jpg";
import DownloadCvButton from "./DownloadCvButton";
import "./App.css";
import { Link } from "react-router-dom";
export default function Bannar() {
  return (
    <div>
      <section id="bannar">
        <div className="container" style={styles.Bannar}>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-content-center">
              <h4>Hello, I'm Ayas Ibrahim</h4>
              <h2>React Developer</h2>
              <p>
                I specialize in building high-performance, scalable, and
                user-friendly web applications using React.js and modern
                web technologies.
              </p>
              <div className="btngroup">
                <div className="d-flex">
                  <Link to="/about">
                    <Button
                      className="btn  btn-outline-warning text-dark"
                      text="Lets Talk"
                      icon={<i className="fa-regular fa-paper-plane" />}
                    />
                  </Link>

                  <a href="/" className="ms-4">
                    <DownloadCvButton />
                  </a>
                </div>
              </div>
              <div className="icon d-flex">
                <p>Follow me :</p>
                <span>
                  <a href="https://www.facebook.com/ayas.ebrahim.77/">
                    {" "}
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/ayas-ibrahim-1783b5326/">
                    {" "}
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/aayas_ibrahim/">
                    {" "}
                    <i className="fa-brands fa-instagram" />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/aayasIbrahim">
                    {" "}
                    <i className="fa-brands fa-github" />
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={Bannarimage} alt="" className="img-fluid" />
            </div>
            <div className="image">
              <img src="./asset/img/bi_mouse.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
