import React from "react";

export default function AboutSkill() {
  return (
    <section>
      <div className="container p-5 skill">
        <h2 className="text-center text-bold p-3">SKILL</h2>
        <div className="row">
          <div className="col-lg-3 p-3">
            <div>
             <div className="d-flex justify-content-between">
             <p>HTML</p>
             <p>95%</p>
             </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div>
            <div className="d-flex justify-content-between">
             <p>CSS</p>
             <p>90%</p>
             </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div>
            <div className="d-flex justify-content-between">
             <p>Bootstarp</p>
             <p>85%</p>
             </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div>
            <div className="d-flex justify-content-between">
             <p>Git&GitHub</p>
             <p>90%</p>
             </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-info"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div>
            <div className="d-flex justify-content-between">
             <p>React</p>
             <p>80%</p>
             </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div>
            <div className="d-flex justify-content-between">
             <p>Figma</p>
             <p>80%</p>
             </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-dark"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
