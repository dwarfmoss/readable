import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostHeader from './PostHeader'

class PostList extends Component {
  sortPosts = (sortBy) => {
    switch(sortBy) {
      case 'author' || 'title' :
        return this.props.posts.sort((a, b) => {
          const valueA = a[sortBy].toUpperCase();
          const valueB = b[sortBy].toUpperCase();
          if(valueA < valueB) {
            return -1
          }
          
          if(valueA > valueB) {
            return 1
          }
          
          return 0
        })
      default :
        return this.props.posts.sort((a,b) => {
          return b[sortBy] - a[sortBy]
        })
    }
  }
  
  filterPosts = (category) => {
    
  }
  
  render() {
    const sortedPosts = this.sortPosts('voteScore')
    
    return (
      <ul className='post-list'>
        {sortedPosts.map(post => (
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