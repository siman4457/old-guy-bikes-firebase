import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class BikeGallery extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://via.placeholder.com/600x450.jpg" />
          <p className="legend">Bike 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/337x450.jpg" />
          <p className="legend">Bike 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x450.jpg" />
          <p className="legend">Bike 3</p>
        </div>
        {/* <div>
          <img src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img style={{ width: 200, height: 200 }} src="/bike1.jpg" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    );
  }
}

// ReactDOM.render(<BikeGallery />, document.querySelector(".demo-carousel"));

export default BikeGallery;
// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
