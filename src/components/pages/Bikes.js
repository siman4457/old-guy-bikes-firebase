import React, { Component } from "react";
import { connect } from "react-redux";
import BikeList from "../Bike/BikeList";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Bikes extends Component {
  render() {
    const { bikes } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <br />
        <BikeList bikes={bikes} />
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
