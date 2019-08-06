import React from "react";

function About() {
  return (
    <div className="container valign-wrapper">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">About Old Guy Bikes</span>
            <p>
              Hi there, I'm Robert Know as in ROBERT THE BIKE GUY. I'm located
              in Dallas, TX and have sold 400+ vintage rebuilt or restored
              mountain bikes a lot of people have been enjoyin' my cool rides,
              so feel free to take a look. Prices vary.
            </p>
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
