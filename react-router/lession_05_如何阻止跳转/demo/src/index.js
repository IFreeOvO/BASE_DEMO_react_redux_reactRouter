import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>
      <Route exact path='/' component={Form}></Route>
      <Route exact path='/one' render={()=> <h1 >One</h1> }></Route>
      <Route exact path='/two' render={()=> <h1>two</h1>}></Route>
    </Router>
  )
}


// 用prompt标签阻止跳转
class Form extends React.Component {
  state={
    isBlock: false
  }
  render() {
    return (
      <form onSubmit={(e)=> {
        e.preventDefault()
      }}>
      <Prompt when={this.state.isBlock} message='确定要离开吗'></Prompt>  
        <label>是否阻止跳转?
        <p>
          {this.state.isBlock? 'Yes,现在处于阻止模式':'No,现在不阻止'}
        </p>
        <input type="text" size='50' placeholder='请输入内容' onChange={(e)=>{
          this.setState({
            isBlock: e.target.value.length > 0
          })
        }}/>
        </label>
        <input type="submit"/>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
