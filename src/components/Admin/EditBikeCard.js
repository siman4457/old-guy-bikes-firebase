import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class EditBikeCard extends Component {
  render() {
    const { bike, auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
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
                  <button className="btn black z-depth-0">Edit</button>
                </Link>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {bike.bikeName}
                <i className="material-icons right">close</i>
              </span>
              <p className="black-text include-line-break ">
                {bike.description}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, null)(EditBikeCard);
