import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBike } from "../../store/actions/bikeActions";
import { Toast } from "react-materialize";

class CreateBike extends Component {
  //TODO: Make sure user is authenticated in order to see this
  state = {
    bikeName: "",
    price: 0,
    description: "",
    photoURL: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    // let bike = this.state;
    // console.log(bike);
    this.props.createBike(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add a New Bike</h5>
          <div className="input-field">
            <label htmlFor="bikeName">Bike Name</label>
            <input type="text" id="bikeName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" onChange={this.handleChange} />
          </div>

          {/* <label>Materialize File Input</label> */}
          {/* <div className="file-field input-field">
            <div className="btn">
              <span>Browse</span>
              <input type="file" />
            </div>

            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload file"
              />
            </div>
          </div> */}

          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <Toast
              type="submit"
              className="btn pink lighten-1 z-depth-0"
              options={{ html: "New bike added!" }}
            >
              Submit
            </Toast>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBike: bike => dispatch(createBike(bike))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateBike);
