import React from 'react' 

function Test(props) {
  return (
    <h1>测试---{props.firstName}</h1>
  )
}

function Dev(props) {
  return (
    <h1>开发---{props.lastName}</h1>
  )
}

const components = {
  dev: Dev,
  test: Test
}

class Dynamic extends React.Component {
  render() {
    const MyComponent = components[this.props.componentName]

    const props = {firstName: '厉害', lastName: '牛逼'};
    return (
      <MyComponent {...props}></MyComponent>
    )
  }
}

export default Dynamic