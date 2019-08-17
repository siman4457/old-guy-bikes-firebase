import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminDash extends Component {
  //TODO: Make sure user is authenticated in order to see this
  render() {
    return (
      <div className="container">
        <Link className="waves-effect waves-light btn" to={"/admin/createBike"}>
          Add a new bike
        </Link>
        &nbsp;
        <Link
          className="waves-effect waves-light btn"
          to={"/admin/manageBikes"}
        >
          Edit or delete a bike
        </Link>
      </div>
    );
  }
}

export default AdminDash;
