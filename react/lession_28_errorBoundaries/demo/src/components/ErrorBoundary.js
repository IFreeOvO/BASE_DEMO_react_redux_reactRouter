import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // 捕获错误
  componentDidCatch(error,info) {
    this.setState({hasError: true})
    console.log('报错',error, info)
  }

  render() {
    const { hasError } = this.state
    if(hasError) {
      return <h1>出错了</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary