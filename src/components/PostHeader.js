import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import { fetchPostComments, fetchSelectedEntry } from '../actions'

class PostHeader extends Component {
  handleClick = (e) => {
    this.props.selectPost(this.props.post.id)
    this.props.getComments(this.props.post.id)
  }
  
  render() {
    const { post } = this.props
    
    return (
      <div className='post-header'>
        <VoteScore voteScore={post.voteScore} />
        <Link to={`/${post.category}/${post.id}`} onClick={this.handleClick}>
          <div className='post-title'>
            {post.title}
          </div>
          <div className='post-author'>
            {post.author}
          </div>
          <div className='post-num-comments'>
            {post.id.charAt(3)}
          </div>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ readable }) {
  return {
    readable,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: (postId) => dispatch(fetchPostComments(postId)),
    selectPost: (postId) => dispatch(fetchSelectedEntry(postId, 'post')),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostHeader))
