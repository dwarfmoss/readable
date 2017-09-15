import React, { Component } from 'react'
import PostHeader from './PostHeader'

class PostList extends Component {
  render() {
    const { posts } = this.props
    return (
      <ul className='post-list'>
        {posts.map(post => (
          <li key={post.id}>
            <PostHeader post={post} />
          </li>
        ))}
      </ul>
    )
  }
}

export default PostList