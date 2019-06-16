import React from 'react'
import CommentList from './components-hoc/CommentList'
import BlogPost from './components-hoc/BlogPost'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CommentList></CommentList>
        <BlogPost id={1}></BlogPost>
      </div>
    )
  }
}

export default App
