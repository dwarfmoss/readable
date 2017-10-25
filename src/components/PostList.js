import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostHeader from './PostHeader'

class PostList extends Component {
  sortPosts = (sortBy) => {
    switch(sortBy) {
      case 'author' || 'title' :
        
      default :
        return this.props.posts.sort((a,b) => {
          return b[sortBy] - a[sortBy]
        })
    }
  }
  
  render() {
    const sortedPosts = this.sortPosts('voteScore')
    
    return (
      <div className='posts-view'>
        <h3>Posts</h3>
        <ul className='post-list'>
          {sortedPosts.map(post => (
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