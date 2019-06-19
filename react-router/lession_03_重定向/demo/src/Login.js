import React from 'react'
import fakeAuth from './api/Auth';
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
  state = {redirectToReferrer: false}

  login = ()=> {
    fakeAuth.authenticate(()=> {
      this.setState({
        redirectToReferrer:true
      })
    })
  }

  render() {
    console.log('登录页', this.props)
    let { from } = this.props.location.state || { from: { pathname: "/" } }
    let {redirectToReferrer} = this.state
    if(redirectToReferrer) return <Redirect to={from}></Redirect>
    return (
      <div>
        <p>你需要先登录才能访问 {from.pathname}</p>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}

export default Login