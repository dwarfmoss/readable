import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
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

function mapStateToProps({ posts }) {
  return { posts }
}

export default withRouter(connect(mapStateToProps)(PostList))