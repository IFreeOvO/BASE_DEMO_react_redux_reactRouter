import React from 'react';
import Cat from './Cat'

class MouseWithCat extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      x:0,
      y:0
    }
  }

  handleMouseMove(e) {
    this.setState({
      x:e.clientX,
      y:e.clientY
    })
  }

  render() {
    // console.log('渲染')
    const mouse = {x: this.state.x, y: this.state.y}
    return (
      <div style={{height:300,border:'1px solid #333'}}  onMouseMove={this.handleMouseMove.bind(this)}>
        <h1>移动您的鼠标</h1>
        <div>鼠标坐标为：({this.state.x},{this.state.y})</div>
        <Cat mouse={mouse}/>
      </div>
    )
  }
}

export default MouseWithCat