import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => <h2>首页</h2>
const About = () => <h2>关于</h2>
const Users = () => <h2>我们</h2>

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>

      <Route path='/' exact component={Index}></Route>
      <Route path='/about'  component={About}></Route>
      <Route path='/users'  component={Users}></Route>
    </div>
  </Router>
)

export default AppRouter
