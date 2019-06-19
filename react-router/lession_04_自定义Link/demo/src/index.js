import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const CustomLink = props => {
  console.log(props)
  const isActive = props.to === props.location.pathname
  return (
    <div>
      <Link to={props.to} style={{background:isActive?"red":""}}>{isActive && '->'}{props.label}</Link>
    </div>
  )
};

const WithRouterCustomLink = withRouter(CustomLink)

const Home = () => <h1>home</h1>;
const About = () => <h1>About</h1>;

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <WithRouterCustomLink label="Home" to="/" />
        <WithRouterCustomLink label="About" to="/about" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </React.Fragment>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
