import React, { Component } from "react";

class EditBike extends Component {
  render() {
    return (
      <div>
        <div className="container valign-wrapper">
          <div class="col s12 m6">
            <div class="card grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">
                  <h2>Editing: Paramount</h2>
                </span>
                <p>*Insert a a photo of the bike and add information*</p>
              </div>
              <div class="card-action">
                <h4>Description</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  eos quisquam harum nobis commodi adipisci similique temporibus
                  eveniet, veritatis reprehenderit, quidem velit molestiae!
                  Totam corporis laborum itaque necessitatibus, ullam repellat?
                </p>
                {/* <a href="#">Text</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBike;
