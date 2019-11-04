import React, { Component } from "react";
import { connect } from "react-redux";
import { createBike } from "../../store/actions/bikeActions";
import { Toast } from "react-materialize";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
class CreateBike extends Component {
  //TODO: Make sure user is authenticated in order to see this

  state = {
    bikeName: "",
    price: 0,
    description: "",
    image: null,
    photoURL: "",
    photo: "",
    isUploading: false,
    progress: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ photo: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ photoURL: url }));
  };

  handleSubmit = e => {
    this.props.createBike(this.state);
    e.preventDefault();
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add a New Bike</h5>
            <div className="input-field">
              <label htmlFor="bikeName">Bike Name</label>
              <input type="text" id="bikeName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="price">Price</label>
              <input type="text" id="price" onChange={this.handleChange} />
            </div>

            {/* FILE UPLOAD */}

            <label>Image:</label>
            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            {this.state.photoURL && <img src={this.state.photoURL} />}

            <FileUploader
              accept="image/*"
              name="photo"
              randomizeFilename
              storageRef={firebase.storage().ref("images")}
              // onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              // onProgress={this.handleProgress}
            />

            {/* FILE UPLOAD END */}

            <div className="input-field">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                onChange={this.handleChange}
                className="materialize-textarea"
              />
            </div>
            <div className="input-field">
              <Toast
                type="submit"
                className="black z-depth-0  btn-large"
                options={{ html: "New bike added!" }}
              >
                Submit
              </Toast>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBike: bike => dispatch(createBike(bike))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBike);
