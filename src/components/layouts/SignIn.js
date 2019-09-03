import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const credentials = this.state;
    this.props.signIn(credentials);
    e.preventDefault();
  };

  render() {
    const authError = this.props.authError;
    const { auth } = this.props;

    if (auth.uid) {
      return <Redirect to={"/admin"} />;
    }

    return (
      <div className="container">
        <h1>Admin Sign In</h1>
        <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Log in
            </button>
          </div>
          <div className="red-text center">
            {authError ? <p>Invalid login, try again</p> : null}
          </div>
        </form>
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
