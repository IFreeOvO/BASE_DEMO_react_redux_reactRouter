import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import fakeAuth from "./api/Auth";

function PrivateRouter({ component: Component, ...rest }) {
  console.log({ component: Component, ...rest })
  
  return (
    <Route
      {...rest}
      render={props =>
        {
          console.log('私有路由',props)
          return fakeAuth.isAuthenticated ? (
            <Component />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      }
    />
  );
}

export default PrivateRouter