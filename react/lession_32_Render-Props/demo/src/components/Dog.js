import React from 'react'

class Dog extends React.Component {

  render() {
    return (
      <div
        style={{
          height: 80,
          width: 80,
          border: '1px solid red',
          background:'gray',
          position:'absolute',
          left: this.props.mouse.x?this.props.mouse.x: 0,
          top:this.props.mouse.y?this.props.mouse.y: 0
        }}
      >小狗</div>
    )
  }
}

export default Dog
