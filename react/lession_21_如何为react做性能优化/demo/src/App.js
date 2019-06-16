import React from 'react'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    setInterval(() => {
      this.setState((preState) => ({
        counter: preState.counter+1
      }))
    },1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('更新', nextState)
    // 由于进行的是浅层比较，所以在比较object类型时可能会检查不出变化
    if(nextState.counter === 5) {
      return true
    }
    // false 则阻止页面更新
    return false
  }
  render() {
    console.log('app渲染')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input type="text" />
          <span>{this.state.counter}</span>
        </header>
      </div>
    )
  }
}

export default App
