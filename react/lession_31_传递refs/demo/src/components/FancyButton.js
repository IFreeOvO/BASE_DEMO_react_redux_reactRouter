import React from 'react'
import logProps from './logProps'

class FancyButton extends React.Component {
  sayHi() {
    alert('hello React!')
  }

  render() {
    return (
      <button onClick={this.props.onClick}>FancyBtn:{this.props.title}</button>
    )
  }
}

export default logProps(FancyButton)