import React from 'react'
import './App.css'
import Dynamic from './components/dynamic'
import Qt from './components/qt'
import More from './components/more'
import FancyBtn from './components/FancyBtn'

const Ctx = React.createContext('dark')

function Button(props) {
  return (
    <button className={['btn', 'btn-' + props.theme].join(' ')}>按钮</button>
  )
}

function ThemeButton(props) {
  return (
    <Ctx.Consumer>
      {theme => {
        console.log('theme->', theme)
        return <Button {...props} theme={theme} />
      }}
    </Ctx.Consumer>
  )
}

function Toolbar(props) {
  return (
    <Ctx.Consumer>
      {theme => (
        <div className={`toolbar toolbar-${theme}`}>
          <ThemeButton />
        </div>
      )}
    </Ctx.Consumer>
  )
}

class Test extends React.Component {
  componentDidMount() {
    this.props.myRef.current = this
    console.log('Test加载', this.props.myRef)
  }

  sayHello = ()=> {
    console.log('TEST -> 点击')
  }

  render() {
    console.log('Test', this.props, this.ref)
    return <div onClick={this.props.onClick}>啊啊啊</div>
  }
}

// 'light' 会覆盖原来的'dark'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  handleClick = () => {
    console.log('app 点击->', this.ref)
    // this.ref.current.sayHi()
    this.ref.current.sayHello()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Ctx.Provider value="light">
            <Toolbar />
          </Ctx.Provider>

          <Dynamic />

          <Qt loginUser={{ name: '飒飒' }} theme="light" />
          <More loginUser={{ name: '高阶' }} theme="light" />

          <h1>转发refs</h1>
          <Test myRef={this.ref} onClick={this.handleClick}/>
          {/*<FancyBtn ref={this.ref} onClick={this.handleClick} />*/}
        </header>
      </div>
    )
  }
}

export default App
