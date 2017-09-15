import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {

  render() {
    const { post } = this.props
    
    return (
      <div className='post'>
        {post.title}
      </div>
    )
  }
}

export default Post
