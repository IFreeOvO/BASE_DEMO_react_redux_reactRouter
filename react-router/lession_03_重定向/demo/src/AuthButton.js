import React from 'react'
import {withRouter} from 'react-router-dom'
import fakeAuth from './api/Auth';



const AuthButton = ({history}) => (
  fakeAuth.isAuthenticated
  ? (
    <p>
      Welcome!{" "}
      <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>
        sign out
      </button>
    </p>
  ) : (
    <p>you are not logged in</p>
  )
)

export default withRouter(AuthButton)