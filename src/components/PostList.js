import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostHeader from './PostHeader'

class PostList extends Component {
  render() {
    const { posts } = this.props
    
    return (
      <div className='posts-view'>
        <h3>Posts</h3>
        <ul className='post-list'>
          {posts.map(post => (
            <li key={post.id}>
              <PostHeader post={post} />
            </li>
          ))}
        </ul>
      </div>
      
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default withRouter(connect(mapStateToProps)(PostList))