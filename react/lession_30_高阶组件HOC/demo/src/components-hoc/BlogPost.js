import React from 'react';
import DataSource from '../db/DataSource'
import withSubscription from './withSubscription';

class BlogPost extends React.Component {
  handleUpdataBlog = () => {
    const blogPost=this.props.data
    console.log('点击', this.props, blogPost)

    const blogPostNew = Object.assign({},blogPost,{msg: '修改后的文章'+Date.now()})

    DataSource.updataBlogPost(blogPostNew)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>{this.props.data.msg}</div>
        <button onClick={this.handleUpdataBlog}>提交文章修改</button>
      </div>
    );
  }
}


// DataSource.getBlogPost(props.id)
// console.log((ds,props) => {ds.getBlogPost(props.id)})
export default withSubscription(BlogPost,(ds,props) => ds.getBlogPost(props.id))