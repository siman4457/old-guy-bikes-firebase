import React, { Component } from "react";
import { Link } from "react-router-dom";

class BikeCard extends Component {
  render() {
    const { bike } = this.props;
    return (
      <div>
        <div style={{ margin: "30px" }} className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              src={bike.photoURL}
              alt="https://via.placeholder.com/300x225.jpg"
              className="activator"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {bike.bikeName}

              <p>${bike.price}</p>
            </span>

            <p>
              <Link
                className="btn black z-depth-0"
                to={"/bikes/bikeview/" + bike.id}
              >
                Details
              </Link>
            </p>
          </div>
          {/* TODO: Description is not working properly */}
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {bike.bikeName}
              <i className="material-icons right">close</i>
            </span>
            <p className="black-text include-line-break">{bike.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BikeCard;
