import React, { Component } from 'react';
import { TextInput, Button } from 'carbon-components-react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Create new Account</h3>
        <div className="form-group">
          <label>Name</label>
          <TextInput
            type="text"
            className="form-control"
            placeholder="John App"
          />
        </div>

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

        <Button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign Up
        </Button>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">log in?</a>
        </p>
      </form>
    );
  }
}
