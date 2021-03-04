import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './login';
import SignUp from './signup';
import SsoSignin from './Signinsso';
import Forgotpass from './Forgetpass';
import Main from './Main';
function App() {
  useEffect(() => {
    toggelTab();
  }, []);
  const toggelTab = () => {
    if (document.getElementById('signUpTab').style.display === 'block') {
      document.getElementById('signUpTab').style.display = 'none';
      document.getElementById('signinTab').style.display = 'block';
    } else {
      document.getElementById('signUpTab').style.display = 'block';
      document.getElementById('signinTab').style.display = 'none';
    }
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a href="/sign-in">
              <img
                src="https://mk0wesecureappxd7u2i.kinstacdn.com/wp-content/uploads/2020/08/WeSecureApp-Logo-2.svg"
                className="attachment-full size-full lazyloaded webapplogo"
                alt=""
                data-ll-status="loaded"
              />
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    id="signinTab"
                    to={'/sign-in'}
                    onClick={toggelTab}
                  >
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    id="signUpTab"
                    to={'/sign-up'}
                    onClick={toggelTab}
                  >
                    Create an account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/ssosign-in" component={SsoSignin} />
              <Route path="/forgotpass" component={Forgotpass} />
              <Route path="/main" component={Main} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
