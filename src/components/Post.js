import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentList from './CommentList'

class Post extends Component {

  render() {
    const { selectedPost } = this.props
    
    return (
      <div className='post-view'>
        <div className='post'>
          <h3>{selectedPost.title}</h3>
          <p>
            {selectedPost.body}
          </p>
          <CommentList />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ selectedPost }) {
  return {
    selectedPost,
  }
}

export default withRouter(connect(mapStateToProps)(Post))
