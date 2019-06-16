import React from 'react';
import DataSource from '../db/DataSource'
import Comment from './Comment'

class CommentList extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" 就是全局的数据源
      comments: DataSource.getComments()
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
      comments: DataSource.getComments()
    });
  }

  handleAddOneComment = () => {
    DataSource.addComment({
      id: Date.now(),
      msg: '新评论' + Date.now()
    })
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <button onClick={this.handleAddOneComment}>添加评论</button>
      </div>
    );
  }
}

export default CommentList