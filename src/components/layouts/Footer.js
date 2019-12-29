import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="ubuntu white-text">Old Guy Bikes</h5>
              <p className="ubuntu grey-text text-lighten-4">Since 1976</p>
              <p className="ubuntu grey-text text-lighten-4">Dallas, Texas</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="ubuntu white-text">Links</h5>
              <ul>
                <li>
                  <Link
                    className="ubuntu footer-link"
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
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            {/* © 2019 Copyright Text */}
            <Link
              to="simanls.com"
              className="ubuntu footer-link right"
              id="signature"
            >
              Created by Siman Shrestha
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
