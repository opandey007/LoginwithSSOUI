import React, { Component } from 'react';
import { TextInput, Button } from 'carbon-components-react';
import './login.css';
import Main from './Main';
export default class Login extends Component {
  state = {
    loginSuccess: false,
    showLogin: false,
  };

  //   renderMainPage = () => {
  //     this.setState({ loginSuccess: true });
  //   };
  render() {
    //if (!this.state.loginSuccess) {
    return (
      <form>
        <h3>Sign in to WeSecureApp</h3>
        <div className="form-group">
          <label>Email</label>
          <TextInput
            type="email"
            className="form-control"
            placeholder="john@appleseed.com"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <TextInput
            type="password"
            placeholder="••••••••"
            className="form-control"
          />
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/forgotpass">password?</a>
        </p>
        <Button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={this.renderMainPage}
        >
          Sign in
        </Button>
        <a href="/ssosign-in" className="ssolink">
          Sign in with SSO
        </a>
      </form>
    );
    // } else {
    //   return <Main />;
    // }
  }
}
