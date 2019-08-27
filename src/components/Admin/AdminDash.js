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
            <Link
              className="waves-effect waves-light btn"
              to={"/admin/createBike"}
            >
              Add a new bike
            </Link>
            &nbsp;
            <Link
              className="waves-effect waves-light btn"
              to={"/admin/manageBikes"}
            >
              Edit or delete a bike
            </Link>
          </div>

          <footer>
            <a
              className="waves-effect waves-light btn"
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
