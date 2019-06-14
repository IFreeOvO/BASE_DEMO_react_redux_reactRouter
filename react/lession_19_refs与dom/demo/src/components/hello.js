import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentWillMount() {
    console.log('将要加载')
  }

  componentDidMount() {
    console.log('加载完',this.myRef)
    this.myRef.current.innerHTML = '替换'
    
  }

  componentDidUpdate() {
    console.log('更新')
  }

  componentWillUnmount() {
    console.log('卸载')
  }

  render() {
    console.log(this.myRef)
    return (
      
      <div ref={this.myRef}>你好</div>
    )
  }
}

export default Hello