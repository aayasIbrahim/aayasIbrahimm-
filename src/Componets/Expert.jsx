import React from 'react'
import "./App.css"
import Button from './Button'
import { Link } from 'react-router-dom'
export default function Expert() {
  return (
    <section id="expart">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <h2>My Expert Areas</h2>
        <p>
          You can express yourself however you want and whenever you want, for
          free. You can customize a template or make your own from scratch, with
          an immersive library at your disposal. You can express yourself
          however you want and whenever you free.
        </p>
        <h6>
          You can customize a template or make your own from scratch, with an
          immersive library at your disposal.
        </h6>
        <Link to="/contact" className="btn p-3 text-bold w-50 text-center">
          {/* Download CV <i className="fa-solid fa-cloud-arrow-down" /> */}
          <Button
           className="btn  btn-outline-warning text-dark"
           text="Lets Talk"
           icon={<i className="fa-regular fa-paper-plane" />}
           />
          
        </Link>
      </div>
      <div className="col-lg-4 py-5 ">
        <ul className="nav nav-tabs " id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link  btn btn-outline-danger  w-100 rounded-pill px-4 border border-black"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Skills
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link btn w-100 btn-outline-danger rounded-pill px-4 ms-3 border border-black"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              More
            </button>
          </li>
        </ul>
        <div className="tab-content my-3" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex={0}
          >
            <div className="d-flex justify-content-between my-2">
              <p>HTML/CSS</p>
              <p>95%</p>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-warning"
                style={{ width: "85%" }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <p>JavaScript (ES6+)</p>
              <p>90%</p>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "90%" }}
              />
            </div>
            <div className="d-flex justify-content-between my-2">
              <p>Bootstrap</p>
              <p>85%</p>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "85%" }}
              />
            </div>
            <div className="d-flex justify-content-between my-2">
              <p>React</p>
              <p>75%</p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex={0}
          >
            <div className="d-flex justify-content-between">
              <p>Node.js</p>
              <p>85%</p>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-warning"
                style={{ width: "85%" }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <p>MongoDB</p>
              <p>80%</p>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-success my-2"
                style={{ width: "80%" }}
              />
            </div>
            <div className="d-flex justify-content-between my-2">
              <p>Git/GitHub</p>
              <p>95%</p>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "95%" }}
              />
            </div>
            <div className="d-flex justify-content-between my-2">
              <p>Figma</p>
              <p>90%</p>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar bg-dark" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
