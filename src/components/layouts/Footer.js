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
              <p className="grey-text text-lighten-4">
                Dallas, Texas Since 1976
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <Link
                    className=" footer-link"
                    id="owner-login"
                    to={"/signin"}
                  >
                    Owner Login
                  </Link>
                </li>
                <br />
                <li>
                  <div>
                    Browser tab icon was made by{" "}
                    <a
                      class="footer-link"
                      href="https://www.flaticon.com/authors/freepik"
                      title="Freepik"
                    >
                      Freepik
                    </a>{" "}
                    from{" "}
                    <a
                      class="footer-link"
                      href="https://www.flaticon.com/"
                      title="Flaticon"
                    >
                      www.flaticon.com
                    </a>
                  </div>
                </li>
                <br />
                <li>
                  <Link
                    to="simanls.com"
                    className=" footer-link"
                    id="signature"
                  >
                    Created by Siman Shrestha
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">{/* © 2019 Copyright Text */}</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
