### React注意事项
1.尽可能让多个`setState`合并为一个调用
2.`state`和`props`可能是异步的, 如果要一起用，需要使用`(preState,props)=> {}`
3.`react`里阻止默认行为必须用`preventDefault`
4.```
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