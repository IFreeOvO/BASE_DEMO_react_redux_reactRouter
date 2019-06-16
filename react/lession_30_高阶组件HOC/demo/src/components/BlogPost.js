import React from 'react';
import DataSource from '../db/DataSource'

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" 就是全局的数据源
      blogPost: DataSource.getBlogPost(props.id)
    };
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
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  handleUpdataBlog = () => {
    const {blogPost}=this.state

    const blogPostNew = Object.assign({},blogPost,{msg: '修改后的文章'+Date.now()})

    DataSource.updataBlogPost(blogPostNew)
  }

  render() {
    return (
      <div>
        <div>{this.state.blogPost.msg}</div>
        <button onClick={this.handleUpdataBlog}>提交文章修改</button>
      </div>
    );
  }
}

export default BlogPost