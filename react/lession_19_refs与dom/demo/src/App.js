import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello'
import CustomTextInput from './components/customTextInput'
import AutoFocusTextInput from './components/AutoFocusTextInput'
import MyInput from './components/myInput'

function App() {
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
        <Hello></Hello>

        <CustomTextInput></CustomTextInput>
        <AutoFocusTextInput></AutoFocusTextInput>
        风
        <MyInput></MyInput>
      </header>
    </div>
  );
}

export default App;
