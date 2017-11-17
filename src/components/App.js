import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostList from './PostList'
import Post from './Post'
import CategoryList from './CategoryList'
import './App.css'
import { fetchAllCategories, fetchPosts } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.setAllCategories()
    this.props.setPosts('')
  }
  
  render() {
    
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Readable</h1>
        </div>
        <div className='navigation'>
          <CategoryList />
        </div>
        <div className='content'>
          <div className='posts-view'>
            <Switch>
              <Route exact path='/:category?' component={PostList} />
              <Route strict exact path='/:category?/:post?' component={Post} />
            </Switch>
          </div>
        </div>
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
