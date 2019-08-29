import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Old Guy Bikes</h5>
              <p className="grey-text text-lighten-4">Dallas, Texas</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <Link className="grey-text text-lighten-3" to={"/signin"}>
                    Owner Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright Text
            <Link to="simanls.com" className="grey-text text-lighten-4 right">
              Created by Siman Shrestha
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
