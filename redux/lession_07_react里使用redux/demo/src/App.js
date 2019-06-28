import React from 'react'
import './App.css'
import { connect } from 'react-redux'

class App extends React.Component {
  handleClick = () => {
    console.log(this.props)
    const { dispatch } = this.props
    dispatch({
      type: 'add'
    })
  }

  render() {
    return (
      <div className="App">
        <p>{this.props.user} --- {this.props.count}</p>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps->',state)
  return {
    count: state.counter,
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
