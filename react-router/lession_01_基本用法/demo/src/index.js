import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavMenu(props) {
  console.log('NavMenu->',props)
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
// const Topics = () => <h2>Topics</h2>

function Topics({ match }) {
  console.log(match)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

// path 类似于正则表达式, url才是真实路径
function BasicExample(props) {
  console.log('BasicExample->',props)
  return (
    <Router>
      <div>
        <NavMenu></NavMenu>
        <hr/>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/about' component={About}></Route>
        <Route  path='/topics' component={Topics}></Route>
      </div>
    </Router>
  );
}

ReactDOM.render(<BasicExample />, document.getElementById("root"));
