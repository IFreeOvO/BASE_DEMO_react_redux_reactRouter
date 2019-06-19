import React,{Fragment} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import AuthButton from "./AuthButton";
import NavMenu from "./NavMenu";
import Login from "./Login";
import PrivateRouter from './PrivateRoute';

function Public() {
  console.log('公共页')
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

const App = () => {
  return (
    <Router>
      <Fragment>
        <AuthButton />
        <NavMenu />
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRouter path='/protected' component={Protected}></PrivateRouter>
      </Fragment>
    </Router>
  );
};

export default App;
