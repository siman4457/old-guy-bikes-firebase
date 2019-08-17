import React, { Component } from "react";
import EditBikeCard from "./EditBikeCard";

class ManageBikes extends Component {
  //TODO: Make sure user is authenticated in order to see this

  render() {
    return (
      <div className="container">
        <h1>Edit Bikes</h1>
        <h1>Also Delete Bikes</h1>
        <div className="row">
          <div className="col s6">
            <EditBikeCard />
          </div>
          <div className="col s6">
            <EditBikeCard />
          </div>
          <div className="col s6">
            <EditBikeCard />
          </div>
        </div>
      </div>
    );
  }
}

export default ManageBikes;
