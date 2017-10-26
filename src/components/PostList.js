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
      <div className='posts-view'>
        <h3>
          <div>Vote</div>
          <div>Title</div>
          <div>Author</div>
          <div>Comments</div>
        </h3>
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