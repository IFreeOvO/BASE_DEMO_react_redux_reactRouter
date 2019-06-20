// import { add } from "./math";

// import('./math').then(math=> {
//   console.log(math.add(10,20))
// })

import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
// import MyButton from './MyButton'

const LoadableOtherComponent = Loadable({
  loader: ()=> import('./MyButton'),
  loading: ()=>(<div>加载中</div>)
})

const MyButtonContainer = ()=> (
  <LoadableOtherComponent></LoadableOtherComponent>  
)

// const MyButtonContainer = ()=> (
//   <MyButton></MyButton>
// )

ReactDOM.render(
  <MyButtonContainer></MyButtonContainer>,
  document.getElementById('root')
)