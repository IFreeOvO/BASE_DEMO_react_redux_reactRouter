import React from 'react'
// import MouseWithCat from './components/MouseWithCat'
import Mouse from './components/Mouse'
import Dog from './components/Dog'
import Cat from './components/Cat'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Mouse render={
          (mouse) => <Dog mouse={mouse}/>
        }/>
        <Cat></Cat>
      </div>
    )
  }
}

export default App
