import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

class AdminDash extends Component {
  //TODO: Make sure user is authenticated in order to see this

  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <h2>Admin Dashboard</h2>
          </div>
          <div className="row">
            <Link
              className="black z-depth-0  btn-large"
              to={"/admin/createBike"}
            >
              Add a new bike
            </Link>
            &nbsp;
            <Link
              className="black z-depth-0  btn-large"
              to={"/admin/manageBikes"}
            >
              Edit or delete a bike
            </Link>
          </div>

          <footer>
            <a
              className="red z-depth-0 btn-large"
              href="/signin"
              onClick={this.props.signOut}
            >
              Log Out
            </a>
          </footer>
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

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDash);
