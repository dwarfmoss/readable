import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import PostHeader from './PostHeader'
import v4 from 'uuid'
import { createPost } from '../actions'

class PostList extends Component {
  state = {
    newPostModal: false,
    newPostTitle: '',
    newPostBody: '',
    newPostAuthor: '',
    newPostCategory: '',
  }
  
  sortPosts = (sortBy) => {
    switch(sortBy) {
      case 'author' || 'title' :
        return this.props.readable.posts.sort((a, b) => {
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
        return this.props.readable.posts.sort((a,b) => {
          return b[sortBy] - a[sortBy]
        })
    }
  }
  
  openNewPostModal = () => this.setState({ newPostModal: true })
  closeNewPostModal = () => this.setState({ newPostModal: false })
  
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })
  
  handleClick = (event) => {
    event.preventDefault()
    this.props.createNewPost({
      id: v4(),
      timestamp: Date.now(),
      title: this.state.newPostTitle,
      body: this.state.newPostBody,
      author: this.state.newPostAuthor,
      category: this.state.newPostCategory
    })
  }
  
  render() {
    const {
      newPostModal,
      newPostTitle,
      newPostBody,
      newPostAuthor,
      newPostCategory
    } = this.state
    
    const sortedPosts = this.sortPosts('voteScore')
    
    return (
      <div className='post-list-view'>
        <div className='posts-header'>
          <h3>
            <div>Vote</div>
            <div>Title</div>
            <div>Author</div>
            <div>Comments</div>
          </h3>
          <div className='new-post'>
            <h3 onClick={this.openNewPostModal}>Create Post</h3>
          </div>
        </div>
        <ul className='post-list'>
          {sortedPosts.map(post => (
            <li key={post.id}>
              <PostHeader post={post} />
            </li>
          ))}
        </ul>
        
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={newPostModal}
          onRequestClose={this.closeNewPostModal}
          contentLabel='Modal'
        >
          <div>
            <form id='new-post'>
              <label htmlFor='new-post-title'>Title</label>
              <input
                id='new-post-title'
                name='newPostTitle'
                type='text'
                value={newPostTitle}
                onChange={this.handleChange}
                form='new-post'
                autoFocus='true'
                required='true'
              ></input>
              <label htmlFor='new-post-body'>Body</label>
              <textarea
                id='new-post-body'
                name='newPostBody'
                type='textarea'
                value={newPostBody}
                onChange={this.handleChange}
                form='new-post'
                required='true'
              ></textarea>
              <label htmlFor='new-post-author'>Author</label>
              <input
                id='new-post-author'
                name='newPostAuthor'
                type='text'
                value={newPostAuthor}
                onChange={this.handleChange}
                form='new-post'
                required='true'
              ></input>
              <label htmlFor='new-post-category'>Category</label>
              <input
                id='new-post-category'
                name='newPostCategory'
                value={newPostCategory}
                onChange={this.handleChange}
                form='new-post'
                required='true'
              ></input>
              <input type='submit' form='new-post' formMethod='post' onClick={this.handleClick}></input>
            </form>
          </div>
        </Modal>
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
    createNewPost: (newPost) => dispatch(createPost(newPost, 'post')),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))