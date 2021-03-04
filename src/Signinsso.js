import React from 'react';
import { TextInput, Button } from 'carbon-components-react';
import './login.css';
export default function Signinsso() {
  return (
    <form>
      <h3>Sign in to WeSecureApp with SSO</h3>
      <div className="form-group">
        <label>Enter your team name</label>
        <TextInput
          type="text"
          className="form-control"
          placeholder="Acme Inc."
        />
      </div>
      <Button type="submit" className="btn btn-dark btn-lg btn-block">
        Continue
      </Button>
      <a href="/sign-in" className="ssolink">
        Sign in with email and password
      </a>
    </form>
  );
}
