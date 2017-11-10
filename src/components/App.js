import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import PostList from './PostList'
import Post from './Post'
import CategoryList from './CategoryList'
import './App.css'
import { fetchAllCategories, fetchPosts, createPost } from '../actions'
import v4 from 'uuid'

class App extends Component {
  state = {
    newPostModal: false,
    newPostTitle: '',
    newPostBody: '',
    newPostAuthor: '',
    newPostCategory: '',
  }
  
  componentDidMount() {
    this.props.setAllCategories()
    this.props.setPosts('')
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
    
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Readable</h1>
        </div>
        <div className='navigation'>
          <CategoryList />
        </div>
        <div className='content'>
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
          <div className='posts-view'>
            <Switch>
              <Route exact path='/:category?' component={PostList} />
              <Route strict exact path='/:category?/:post?' component={Post} />
            </Switch>
          </div>
        </div>
        
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
    );
  }
}

function mapStateToProps({ categories, posts, comments }) {
  return {
    categories,
    posts,
    comments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAllCategories: () => dispatch(fetchAllCategories()),
    setPosts: (category) => dispatch(fetchPosts(category)),
    createNewPost: (newPost) =>
      dispatch(createPost(newPost)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
