import React from 'react'
import DataSource from '../db/DataSource'

// DataSource.getBlogPost(props.id) // 原blogPost里的state:{blogPost: DataSource.getBlogPost(props.id)}
// withSubscription(BlogPost, (DataSource,props) => DataSource.getBlogPost(props.id)) // 外界使用方式

function withSubscription(MyComponent, selector) {
  console.log(MyComponent.displayName, MyComponent.name)
  const myName = MyComponent.displayName || MyComponent.name
  return class extends React.Component {
    static displayName = `hoc->${myName}`
    
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selector(DataSource, props)
      };
      console.log('包裹',  this.state)
    }
  
    componentDidMount() {
      // 添加事件处理函数订阅数据
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      // 清除事件处理函数
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      // 任何时候数据发生改变就更新组件
      this.setState({
        data: selector(DataSource, this.props)
      });
    }
  
    render() {
      return (
        <MyComponent {...this.props} data={this.state.data}></MyComponent>
      );
    }
  }
}

export default withSubscription