import React from 'react'

// 转发refs
class FancyButton extends React.Component {
  ck = () => {
    console.log('fancy 点击->',this.props)
  }

  sayHi() {
    console.log('触发按钮->')
  }

  render() {
    return (
      <button onClick={this.props.onClick}>按钮</button>
    )
  }
}

export default React.forwardRef((props,ref)=><FancyButton {...props} ref={ref}></FancyButton>)