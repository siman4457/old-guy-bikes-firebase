import React, { Component } from "react";
import { Link } from "react-router-dom";
import BikeCard from "./BikeCard";

class BikeList extends Component {
  render() {
    const { bikes } = this.props;
    return (
      <div className="bike-list section">
        <div className="row">
          {bikes &&
            bikes.map(bike => {
              return (
                <div className="col m6">
                  <BikeCard key={bike.id} bike={bike} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default BikeList;
