import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import PostList from './PostList'
import Post from './Post'
import CategoryList from './CategoryList'
import './App.css'
import { fetchAllCategories, fetchPosts } from '../actions'

class App extends Component {
  state = {
    newPostModal: false,
  }
  
  componentDidMount() {
    this.props.setAllCategories()
    this.props.setPosts('')
  }
  
  openNewPostModal = () => this.setState(() => ({ newPostModal: true }))
  closeNewPostModal = () => this.setState(() => ({ newPostModal: false }))
  
  render() {
    const { newPostModal } = this.state
    
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
            <form>
              <input></input>
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
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
