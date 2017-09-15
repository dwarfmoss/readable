import React, { Component } from 'react'

class PostHeader extends Component {

  render() {
    const { post } = this.props
    
    return (
      <div className='post-header'>
        {post.title}
      </div>
    )
  }
}

export default PostHeader
