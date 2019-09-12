import React, { Component } from "react";
import EditBikeList from "./EditBikeList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class ManageBikes extends Component {
  //TODO: Make sure user is authenticated in order to see this

  render() {
    const { bikes, auth } = this.props;
    // console.log("props", this.props);
    // if (!auth.uid) {
    //   return <Redirect to="/signin" />;
    // } else {
    return (
      <div className="container">
        <br />
        <EditBikeList bikes={bikes} />
      </div>
    );
  }
}
// }

const mapStateToProps = state => {
  //Here, state refers to the state of our store
  return {
    auth: state.firestore.auth,
    bikes: state.firestore.ordered.bikes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "bikes", orderBy: ["createdAt", "desc"] }])
)(ManageBikes);
