import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import { fetchPostComments, fetchSelectedPost } from '../actions'

class PostHeader extends Component {
  handleClick = (e) => {
    this.props.selectPost(this.props.post.id)
    this.props.getComments(this.props.post.id)
  }
  
  render() {
    const { post } = this.props
    
    return (
      <Link to={`/${post.category}/${post.id}`} className='post-header' onClick={this.handleClick}>
        <div className='post-title'>
          {post.title}
        </div>
        <VoteScore voteScore={post.voteScore} />
      </Link>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: (postId) => dispatch(fetchPostComments(postId)),
    selectPost: (postId) => dispatch(fetchSelectedPost(postId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostHeader))
