import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import { editBike } from "../../store/actions/bikeActions";
import { deleteBike } from "../../store/actions/bikeActions";
import { sellBike } from "../../store/actions/bikeActions";
import { Redirect } from "react-router-dom";

class EditBikeView extends Component {
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

  componentDidMount = () => {
    const bikeName = this.props.location.state.bikeName;
    const price = this.props.location.state.price;
    const description = this.props.location.state.description;
    const photoURL = this.props.location.state.photoURL;

    this.setState({
      bikeName,
      price,
      description,
      photoURL
    });
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

  handleDelete = e => {
    let result = window.confirm("Are you sure you want to delete?");
    if (result) {
      const bikeId = this.props.bikeId;
      this.props.deleteBike(bikeId);

      //Redirect
      let path = "/admin/manageBikes";
      this.props.history.push(path);
    }
  };

  handleSubmit = e => {
    const localBike = this.state;
    // let bikeId = this.props.bikeId;
    // this.props.editBike(localBike, bikeId);
    console.log("success?");
    console.log(localBike);
    //Redirect
    let path = "/admin/manageBikes";
    this.props.history.push(path);
  };

  handleCancel = e => {
    let result = window.confirm(
      "Are you sure you want to cancel your changes?"
    );
    if (result) {
      let path = "/admin/manageBikes";
      this.props.history.push(path);
    }
  };

  handleSold = e => {
    let result = window.confirm(
      "Are you sure you want to mark this bike as sold?"
    );
    if (result) {
      const localBike = this.state;
      let bikeId = this.props.bikeId;
      this.props.sellBike(localBike, bikeId);
      //Redirect
      let path = "/admin/manageBikes";
      this.props.history.push(path);
    }
  };

  render() {
    const { bike, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      if (bike) {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">
                Editing: {bike.bikeName}
              </h5>
              <div className="input-field">
                <label htmlFor="bikeName" className="active">
                  Bike Name
                </label>
                <input
                  type="text"
                  id="bikeName"
                  onChange={this.handleChange}
                  defaultValue={bike.bikeName}
                />
              </div>

              <div className="input-field">
                <label htmlFor="price" className="active">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  onChange={this.handleChange}
                  defaultValue={bike.price}
                />
              </div>

              {/* IMAGE UPLOAD */}
              <label>Image: </label>
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
              {this.state.photoURL && <img src={this.state.photoURL} />}
              <FileUploader
                accept="image/*"
                name="photo"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              {/* FILE UPLOAD END */}

              <div className="input-field">
                <label htmlFor="description" className="active">
                  Description
                </label>
                <textarea
                  id="description"
                  onChange={this.handleChange}
                  className="materialize-textarea"
                  defaultValue={bike.description}
                />
              </div>
            </form>
            <div className="row">
              <button
                className="col s3 black z-depth-0 waves-effect waves-light btn-large"
                onClick={this.handleSubmit}
              >
                Update
              </button>
              <button
                onClick={this.handleSold}
                className="col s3 black z-depth-0 waves-effect waves-light btn-large"
              >
                Mark as sold
              </button>
              <button
                onClick={this.handleCancel}
                className="col s3 black z-depth-0 waves-effect waves-light btn-large"
              >
                Cancel
              </button>
              <button
                onClick={this.handleDelete}
                className="col s3 red z-depth-0 waves-effect waves-light btn-large"
              >
                Delete
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="container center">
            <p>Loading project...</p>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  //id = the document id of the project
  const id = ownProps.match.params.id;
  const bikes = state.firestore.data.bikes;
  const bike = bikes ? bikes[id] : null;

  return {
    bike: bike,
    auth: state.firebase.auth,
    bikeId: id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editBike: (bike, bikeId) => dispatch(editBike(bike, bikeId)),
    deleteBike: bikeId => dispatch(deleteBike(bikeId)),
    sellBike: (bike, bikeId) => dispatch(sellBike(bike, bikeId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "bikes"
    }
  ])
)(EditBikeView);
