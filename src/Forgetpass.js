import React from 'react';
import { TextInput, Button } from 'carbon-components-react';
import './login.css';
export default function Forgetpass() {
  return (
    <form>
      <h3>Forgot Password?</h3>
      <h6>Enter your email to reset your password.</h6>
      <br></br>
      <div className="form-group">
        <label>Email</label>
        <TextInput
          type="text"
          className="form-control"
          placeholder="john@appleseed.com"
        />
      </div>
      <Button type="submit" className="btn btn-dark btn-lg btn-block">
        Reset Password
      </Button>
      <a href="/sign-in" className="ssolink">
        Go back to Sign in
      </a>
    </form>
  );
}
