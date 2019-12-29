import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
//This Navbar component is a funcitonal component because we dont need to worry about state. Just display the Navbar!

class Navbar extends Component {
  render() {
    const { auth } = this.props;
    //--- Public nav ---
    if (!auth.uid) {
      return (
        <div>
          <nav className="nav-wrapper z-depth-0">
            <div className="container">
              {/* Desktop Nav Bar */}
              <Link
                to={"/bikes"}
                className="brand-logo black-text hide-on-small-only"
              >
                Old Guy Bikes
              </Link>

              {/* Mobile Nav Bar */}
              <span className="brand-logo black-text hide-on-med-and-up">
                Old Guy Bikes
              </span>

              <span className="hide-on-large-only">
                <Sidebar />
              </span>

              {/* Show links based on whether a user is logged in or not */}
              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink className="black-text" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/bikes"}>
                    Bikes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/soldbikes"}>
                    Sold Bikes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
    //--- Admin nav ---
    else {
      return (
        <div>
          <nav className="nav-wrapper z-depth-0">
            <div className="container">
              <div className="planner-logo">
                {/* Desktop Nav Bar */}
                <Link
                  to={"/bikes"}
                  className="brand-logo black-text hide-on-small-only"
                >
                  Old Guy Bikes
                </Link>

                {/* Mobile Nav Bar */}

                <span className="brand-logo black-text hide-on-med-and-up">
                  Old Guy Bikes
                </span>

                <span className="hide-on-large-only">
                  <Sidebar />
                </span>
              </div>

              {/* Show links based on whether a user is logged in or not */}
              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink className="black-text" to={"/admin"}>
                    Admin Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/bikes"}>
                    Bikes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/soldbikes"}>
                    Sold Bikes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="black-text" to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="ubuntu black-text"
                    to={"/signin"}
                    onClick={this.props.signOut}
                  >
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
