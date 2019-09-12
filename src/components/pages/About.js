import React from "react";

function About() {
  return (
    <div className="container valign-wrapper">
      <section clasName="center">
        <h2 className="black-text">
          <strong>About The Old Guy</strong>
        </h2>
        <p>
          Hi I'm Robert The Bike Guy. I do repairs and other services. I also
          sell cool, restored vintage mountains. I can make a mountain bike a
          one speed and a road bike a hybrid, but I specialize in mountain
          bikes. Please feel free to call me if you're interested in my services
          or bikes.
        </p>

        <div>
          <a className="btn-large black z-depth-0" href="tel:469-509-5481">
            Call
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
