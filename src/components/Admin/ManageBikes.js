import React, { Component } from "react";
import EditBikeCard from "./EditBikeCard";
import EditBikeList from "./EditBikeList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class ManageBikes extends Component {
  //TODO: Make sure user is authenticated in order to see this

  render() {
    const { bikes } = this.props;
    return (
      <div className="container">
        <br />
        <EditBikeList bikes={bikes} />
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
)(ManageBikes);
