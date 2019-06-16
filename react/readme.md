### React注意事项
1.尽可能让多个`setState`合并为一个调用
2.`state`和`props`可能是异步的, 如果要一起用，需要使用`(preState,props)=> {}`
3.`react`里阻止默认行为必须用`preventDefault`
4.
```
// 这个方式绑定事件的缺点是每次渲染都会创建一个函数
// 如果他作为回调传入低阶组件可能会产生额外的渲染
onClick={() => {this.handleClick('abc')}
```
5.事件参数e要排在传递参数的后面,如`function clickFn(xxx, e)`
```
// 要想这样使用
 <button onClick={this.handleClick.bind(this, "传参啊")}>
                {this.state.isToggle ? "打开" : "关闭"}
              </button>
```
6.如果遇到多个组件共用状态数据的情况，建议将这些共用状态提升至父组件中
7.不能在函数组件上使用 ref 属性，因为他们没有实例
8.
>如果 ref 回调以内联函数的方式定义(内联是指`<div onClick={()=>{}}></div>`这样)，在更新期间会被调用两次，第一次参数是 null ，之后参数是 DOM 元素。这是因为在每次渲染中都会创建一个新的函数实例。因此，React 需要清理旧的 ref 并且设置新的。通过将 ref 的回调函数定义成类的绑定函数的方式可以避免上述问题

9.在React中，`<input type="file" />` 始终是一个不受控制的组件
10.大多数情况下，你可以使用 `React.PureComponent` 而不是自己编写 `shouldComponentUpdate` 。但 `React.PureComponent` 仅会进项浅比较，因此如果 `props` 或者 `state` 可能会导致浅比较失败的情况下就不能使用 `React.PureComponent`
11.复杂类型浅比较失败可以用`[...state.words, 'marklar']`和`Object.assign({},originObj, newObj)`返回新指来解决