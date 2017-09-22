import React, { Component } from 'react'
import VoteScore from './VoteScore'

class PostHeader extends Component {

  render() {
    const { post } = this.props
    
    return (
      <div className='post-header'>
        <div className='post-title'>
          {post.title}
        </div>
        <VoteScore voteScore={post.voteScore} />
      </div>
    )
  }
}

export default PostHeader
