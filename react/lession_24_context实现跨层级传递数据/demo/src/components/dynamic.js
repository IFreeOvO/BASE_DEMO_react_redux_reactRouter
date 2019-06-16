import React from 'react'

// 动态context

const Ctx = React.createContext('dark')

function Button(props) {
  return (
    <button className={['btn', 'btn-' + props.theme].join(' ')}>按钮</button>
  )
}

function ThemeButton(props) {
  return (
    <Ctx.Consumer>
      {({themeName}) =>  {
        console.log('theme->', themeName)
        return <Button {...props} theme={themeName} />
      }}
    </Ctx.Consumer>
  )
}

function Toolbar(props) {
  return (
    <Ctx.Consumer>
      {({themeName, toggleTheme}) => 
        <div className={`toolbar toolbar-${themeName}`}>
          <ThemeButton />
          <button onClick={toggleTheme}>换色</button>
        </div>
      }
      
    </Ctx.Consumer>
  )
}


const THEMES = ['dark', 'light']
// provider 里的value是用来修改默认值
class Dynamic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      themeV: THEMES[0],
      count: 0
    }
  }

  onChangeTheme() {
    this.setState({
      themeV: THEMES[this.state.count%2],
      count: this.state.count+1
    })

  }

  render() {
    const {themeV} = this.state
    return (
      <div>
        <h1>动态context</h1>
        <Ctx.Provider value={
          {
            themeName: themeV,
            toggleTheme: this.onChangeTheme.bind(this)
          }
        }>
          <Toolbar onChangeTheme={this.onChangeTheme.bind(this)}></Toolbar>
        </Ctx.Provider>
      </div>
    )
  }
}

export default Dynamic
