import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentList from './CommentList'

class Post extends Component {
  render() {
    return (
      <div className='post-view'>
        <div className='post'>
          <h3>The Post Title</h3>
          <p>
            The post Body.
          </p>
          <CommentList />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ readable }) {
  return {
    readable,
  }
}

export default withRouter(connect(mapStateToProps)(Post))
