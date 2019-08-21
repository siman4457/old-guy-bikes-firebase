import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditBikeCard extends Component {
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
              <i className="material-icons right">more_vert</i>
              <p>${bike.price}</p>
            </span>

            <p>
              {/* <Link to={"/admin/editBike/" + bike.id}>Edit</Link> */}
              <Link
                to={{
                  pathname: "/admin/editBike/" + bike.id,
                  state: {
                    bikeName: bike.bikeName,
                    price: bike.price,
                    description: bike.description,
                    photoURL: bike.photoURL
                  }
                }}
                key={bike.id}
              >
                <button className="btn pink lighten-1 z-depth-0">Edit</button>
              </Link>
            </p>
          </div>
          {/* TODO: Description is not working properly */}
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {bike.bikeName}
              <i className="material-icons right">close</i>
            </span>
            <p>{bike.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBikeCard;
