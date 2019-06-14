import React from 'react'
import PropTypes from 'prop-types'   // 类型校验

class Greeting extends React.Component {
  static defaultProps = {
    name: '默认值'
  }
  // 方法二
  static propTypes = {
    name: PropTypes.string
  }
  render() {
    return (
      <h1>你好,{this.props.name}</h1>
    )
  }
}

// 设置默认值
// Greeting.defaultProps = {
//   name: '默认值'
// }

// 方法一
// Greeting.propTypes = {
//   name: PropTypes.string
// }

export default Greeting