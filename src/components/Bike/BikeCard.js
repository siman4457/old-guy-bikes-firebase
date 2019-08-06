import React, { Component } from "react";
import { Link } from "react-router-dom";

class BikeCard extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "30px" }} className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              src="https://via.placeholder.com/300x225.jpg"
              alt="error"
              className="activator"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Paramount<i class="material-icons right">more_vert</i>
              <p>$200</p>
            </span>

            <p>
              {/* <Link to={"/bikeview/" + uid}>*/}
              <Link to={"/bikeview/" + "1"}>View</Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Paramount<i class="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BikeCard;
