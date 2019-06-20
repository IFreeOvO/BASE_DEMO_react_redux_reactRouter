import React from 'react'

export default class MyButton extends React.Component {
  constructor() {
    super()
    this.btnRef = React.createRef()
  }

  componentWillMount() {
    console.log(this.btnRef)
  }
  render() {
    return (
      <button ref={this.btnRef}>按钮</button>
    )
  }
}