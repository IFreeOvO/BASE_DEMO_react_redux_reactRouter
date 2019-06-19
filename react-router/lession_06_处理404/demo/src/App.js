import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import Home from './Home'
import WillMatch from './WillMatch'
import NotFound from './NotFound'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/old-match">Old Match Redirect</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/also-will-not-match">Also Will Not Match</Link>
          </li>
        </ul>
      </React.Fragment>

      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/old-match" to="/will-match" />
        <Route path="/will-match" component={WillMatch} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
