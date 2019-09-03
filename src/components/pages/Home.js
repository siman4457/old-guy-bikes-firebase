import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Old Guy Bikes</h1>
        <Link className="btn pink lighten-1 z-depth-0" to={"/bikes/"}>
          View Bikes
        </Link>
      </div>
    );
  }
}
export default Home;
