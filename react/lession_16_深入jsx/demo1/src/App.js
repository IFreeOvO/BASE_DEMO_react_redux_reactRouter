import React from 'react';
import './App.css';
import MyButton from './components/MyButton'
import Dynamic from './components/dynamic'
import List from './components/list'

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} 通过点导入.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlueDatePicker></BlueDatePicker>
        <MyButton></MyButton>


        <h1>动态决定组件</h1>
        <Dynamic componentName='test'></Dynamic>  

        <h1>直接渲染数据</h1>
        <List></List>
      </header>

      
    </div>
  );
}

export default App;
