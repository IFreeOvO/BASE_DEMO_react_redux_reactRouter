import React from 'react'
import FancyButton from './components/FancyButton'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'abc'
    }
    this.handleClickFancyButton = this.handleClickFancyButton.bind(this)

    this.fancyRef = React.createRef()
  }

  handleClickFancyButton() {
    this.setState({
      title: 123
    })
    console.log('ref->',this.fancyRef)
  }

  render() {
    return (
      <div className="App">
        <FancyButton ref={this.fancyRef} onClick={this.handleClickFancyButton} title={this.state.title}/>
      </div>
    )
  }

}

export default App
