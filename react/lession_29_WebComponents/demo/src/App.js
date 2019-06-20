import React from 'react';
import './App.css';
import './word-count'

class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  handleClick = () => {
    console.log(this.ref)
    this.ref.current.sayHi()
  }

  render() {
    return (
      <div contentEditable={true}>
        你好  ↓是webcomponent自带语法
        <p ref={this.ref} is='word-count' onClick={this.handleClick}></p>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <HelloMessage></HelloMessage>
    </div>
  );
}

export default App;
