import React, { Component } from "react";
import { Button, SideNav, SideNavItem } from "react-materialize";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const menuStyle = {
  color: "white"
};

class Sidebar extends Component {
  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      //--- Public nav ---
      return (
        <div className="hide-on-large-only">
          <SideNav
            trigger={
              <Button flat>
                <span style={menuStyle}>
                  <i className="material-icons black-text">menu</i>
                </span>
              </Button>
            }
            options={{ closeOnClick: true }}
          >
            {/* <SideNavItem href="/" icon="dashboard">
            Home
          </SideNavItem> */}

            <SideNavItem href="/bikes" icon="directions_bike">
              Bikes
            </SideNavItem>

            <SideNavItem href="/about" icon="edit">
              About
            </SideNavItem>

            <SideNavItem divider />
          </SideNav>
        </div>
      );
    }
    // --- Admin Nav ---
    else {
      return (
        <div className="hide-on-large-only">
          <SideNav
            trigger={
              <Button flat>
                <span style={menuStyle}>
                  <i className="material-icons black-text">menu</i>
                </span>
              </Button>
            }
            options={{ closeOnClick: true }}
          >
            {/* <SideNavItem href="/" icon="dashboard">
            Home
          </SideNavItem> */}

            <SideNavItem href="/admin" icon="security">
              Admin Dashboard
            </SideNavItem>

            <SideNavItem href="/bikes" icon="directions_bike">
              Bikes
            </SideNavItem>

            <SideNavItem href="/about" icon="edit">
              About
            </SideNavItem>

            <SideNavItem
              href="/signin"
              icon="call_made"
              onClick={this.props.signOut}
            >
              Log Out
            </SideNavItem>

            <SideNavItem divider />
          </SideNav>
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
)(Sidebar);
