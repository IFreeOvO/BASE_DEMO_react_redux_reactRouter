import React from "react";
import "./App.css";
import Chosen from "./components/Chosen";

class App extends React.Component {
  constructor() {
    super()
    this.state={
      chooseValue: ''
    }
  }

  handleChoseChange = (value)=> {
    console.log('父组件',value)
    this.setState({
      chooseValue: value
    })
  }

  render() {
    return (
      <div className="App">
        <Chosen onChange={this.handleChoseChange} defaultValue={this.state.chooseValue}>
          <option>vanilla</option>
          <option>chocolate</option>
          <option>strawberry</option>
        </Chosen>
        {this.state.chooseValue}
      </div>
    );
  }
}

export default App;
