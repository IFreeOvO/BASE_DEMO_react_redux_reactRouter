import React from 'react'

// 高阶组件里的context

const ThemeContext = React.createContext('light')
const UserContext = React.createContext({
  name: 'Guest'
})
const Ctx = React.createContext('dark')

// function Button(props) {
//   return (
//     <button className={['btn', 'btn-' + props.theme].join(' ')}>按钮</button>
//   )
// }

// function ThemeButton(props) {
//   return (
//     <Ctx.Consumer>
//       {themeName => {
//         console.log('theme->', themeName)
//         return <Button {...props} theme={themeName} />
//       }}
//     </Ctx.Consumer>
//   )
// }

function Profile(props) {
  return (
    <div>
      用户:{props.user}
      主题:{props.theme}
    </div>
  )
}

function withTheme(Component) {
  return function TC(props) {
    console.log('参数', props)
    return (
      <Ctx.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </Ctx.Consumer>
    )
  }
}

function withLogin(Component) {
  return function TC(props) {
    console.log('参数', props)
    return (
      <UserContext.Consumer>
        {user => <Component {...props} user={user.name} />}
      </UserContext.Consumer>
    )
  }
}

function Toolbar(props) {
  return withTheme(withLogin(Profile))()

  // return (
  //   <Ctx.Consumer>
  //     {themeName => (
  //       <UserContext.Consumer>
  //         {user => {
  //           console.log('收到主题', themeName)
  //           console.log('收到用户', user)
  //           return (
  //             <div>
  //               <Profile user={user.name} theme={themeName}></Profile>
  //               <div className={`toolbar toolbar-${themeName}`}>
  //                 <ThemeButton />
  //                 <button onClick={props.onChangeTheme}>换色</button>
  //               </div>
  //             </div>
  //           )
  //         }}
  //       </UserContext.Consumer>
  //     )}
  //   </Ctx.Consumer>
  // )
}

const THEMES = ['dark', 'light']
class Qt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      themeV: THEMES[1],
      count: 0
    }
  }

  onChangeTheme() {
    this.setState({
      themeV: THEMES[this.state.count % 2],
      count: this.state.count + 1
    })
  }

  render() {
    // console.log('初始>', this.state)
    const { loginUser, theme } = this.props
    console.log('初始>', loginUser, theme)
    return (
      <div>
        <h1>高阶context</h1>
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={loginUser}>
            <Toolbar
              theme="dark"
              onChangeTheme={this.onChangeTheme.bind(this)}
            />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default Qt
