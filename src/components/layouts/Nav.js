import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

//This Navbar component is a funcitonal component because we dont need to worry about state. Just display the Navbar!

const Navbar = props => {
  return (
    <div>
      <nav className="nav-wrapper white z-depth-0">
        <div className="container">
          <div className="planner-logo">
            {/* Desktop Nav Bar */}
            <Link to={"/"} className="brand-logo black-text">
              Old Guy Bikes
            </Link>

            {/* Mobile Nav Bar */}
            <Sidebar />
          </div>

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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
