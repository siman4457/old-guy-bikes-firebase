import React, { Component } from "react";
import { Button, SideNav, SideNavItem } from "react-materialize";

const menuStyle = {
  color: "white"
};

class Sidebar extends Component {
  render() {
    return (
      <div className="hide-on-large-only">
        <SideNav
          trigger={
            <Button flat>
              <span style={menuStyle}>
                <i className="material-icons">menu</i>
              </span>
            </Button>
          }
          options={{ closeOnClick: true }}
        >
          <SideNavItem href={"/"} icon="dashboard">
            Home
          </SideNavItem>

          <SideNavItem href={"/about"} icon="edit">
            About
          </SideNavItem>

          <SideNavItem divider />
        </SideNav>
      </div>
    );
  }
}

export default Sidebar;
