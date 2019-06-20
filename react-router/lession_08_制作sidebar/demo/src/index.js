import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>主页!</div>,
    main: () => <h2>主页</h2>
  },
  {
    path: "/cloth",
    sidebar: () => <div>衣服!</div>,
    main: () => <h2>衣服</h2>
  },
  {
    path: "/computer",
    sidebar: () => <div>电脑!</div>,
    main: () => <h2>电脑</h2>
  }
];

const App = () => {
  return (
    <Router>
      <>
      <div className="menuContainer">
        <ul className="menu">
          <li>
            <Link to="/">主页</Link>
          </li>
          <li>
            <Link to="/cloth">衣服</Link>
          </li>
          <li>
            <Link to="/computer">电脑</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          <Route path={route.path} exact={route.exact} key={index} component={route.sidebar}></Route>
        ))}

      </div>

      <div className='main'>
        {routes.map((route, index) => (
          <Route path={route.path} exact={route.exact} key={index} component={route.main}></Route>
        ))}
      </div>
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
