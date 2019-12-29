import React, { Component } from "react";
import { connect } from "react-redux";
import BikeList from "../Bike/BikeList";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Bikes extends Component {
  static defaultProps = {
    bikes: [] //undefined gets converted to array,render won't trigger error
  };
  render() {
    const sold_bikes = this.props.bikes.filter(bike => bike.sold === 1);
    return (
      <div className="container">
        <br />
        <h2>Bikes</h2>
        <BikeList bikes={sold_bikes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //Here, state refers to the state of our store
  return {
    bikes: state.firestore.ordered.bikes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "bikes", orderBy: ["createdAt", "desc"] }])
)(Bikes);
