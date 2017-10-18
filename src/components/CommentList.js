import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Comment from './Comment'

class CommentList extends Component {

  render() {
    const { comments } = this.props
    
    return (
      <div className='comments'>
        <h4>Comments</h4>
        <ul className='comment-list'>
          {comments.map(comment => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments,
  }
}

export default withRouter(connect(mapStateToProps)(CommentList))