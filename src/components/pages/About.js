import React from "react";

function About() {
  return (
    <div className="container valign-wrapper">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">About</span>
            <p>Hi! Welcome to my bike shop.</p>
          </div>
          <div className="card-action">
            <a href="tel:469-509-5481">Call</a>
            {/* <a href="#">Text</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
