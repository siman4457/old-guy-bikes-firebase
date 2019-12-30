import React, { Component } from "react";
import { Toast } from "react-materialize";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s6 center">
              {/* <form onSubmit={this.handleSubmit} className="white"> */}
              <form
                action="mailto:siman4457@gmail.com"
                method="post"
                enctype="text/plain"
                className="white"
              >
                <h5 className="grey-text text-darken-3">Contact me</h5>
                <div class="row">
                  <div class="input-field col s6">
                    <label for="first_name">First Name</label>
                    <input
                      id="first_name"
                      type="text"
                      class="validate"
                      required
                    />
                  </div>

                  <div class="input-field col s6">
                    <label for="last_name">Last Name</label>
                    <input
                      id="last_name"
                      type="text"
                      class="validate"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="validate" required />
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <label for="comment">Comment or inquiry</label>
                    <textarea
                      id="comment"
                      class="materialize-textarea"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="input-field">
                  <Toast
                    type="submit"
                    className="black z-depth-0  btn-large"
                    options={{ html: "Sent!" }}
                  >
                    Submit
                  </Toast>
                </div>
              </form>
              <br />
            </div>
            <div className="col s6">
              <img className="contact-image" src="/contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
