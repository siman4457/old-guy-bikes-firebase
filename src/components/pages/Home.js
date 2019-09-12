import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <section className="home-section-1">
          <div className="blue-bar"></div>
        </section> */}

        <section className="home-section-1">
          <img
            src={require("../../assets/images/mountain-bike.jpg")}
            alt="mountian bike"
          />
        </section>
        <br />
        <section>
          <Link className="btn-large black z-depth-0" to={"/bikes/"}>
            View Bikes
          </Link>
        </section>
        <br />
      </div>
    );
  }
}
export default Home;
