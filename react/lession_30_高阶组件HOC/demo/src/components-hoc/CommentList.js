import React from 'react';
import DataSource from '../db/DataSource'
import Comment from './Comment'
import withSubscription from './withSubscription';

class CommentList extends React.Component {
  handleAddOneComment = () => {
    DataSource.addComment({
      id: Date.now(),
      msg: '新评论' + Date.now()
    })
  }

  render() {
    return (
      <div>
        {this.props.data.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <button onClick={this.handleAddOneComment}>添加评论</button>
      </div>
    );
  }
}

export default withSubscription(CommentList, (ds) => ds.getComments())