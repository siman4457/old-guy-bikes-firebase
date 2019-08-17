import React from "react";

function About() {
  return (
    <div className="container valign-wrapper">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">About</span>
            <p>Hi! Welcome to my bike shop.</p>
          </div>
          <div class="card-action">
            <a href="tel:469-509-5481">Call</a>
            {/* <a href="#">Text</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
