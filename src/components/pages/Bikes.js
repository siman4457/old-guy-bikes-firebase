import React, { Component } from "react";
import BikeGallery from "../Bike/BikeGallery";
import BikeCard from "../Bike/BikeCard";

// const bikeCardContStyle = {
//   display: "flex",
//   flexWrap: "wrap"
// };
class Bikes extends Component {
  render() {
    return (
      <div className="container">
        <br />
        {/* <BikeGallery /> */}
        <div className="row">
          <div class="col s6">
            <BikeCard />
          </div>
          <div class="col s6">
            <BikeCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Bikes;
