import React from "react";

function About() {
  return (
    <div className="container valign-wrapper">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              <strong>About The Old Guy</strong>
            </span>
            <p>
              Hi I'm Robert The Bike Guy. I do repairs and other services. I
              also sell cool, restored vintage mountains. I can make a mountain
              bike a one speed and a road bike a hybrid, but I specialize in
              mountain bikes. Please feel free to call me if you're interested
              in my services or bikes.
            </p>
          </div>
          <div className="card-action">
            <a href="tel:469-509-5481">Call</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
