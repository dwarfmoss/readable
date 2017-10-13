import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostList from './PostList'
import Category from './Category'
import './App.css'
import { fetchAllCategories, fetchPosts } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.setAllCategories()
    this.props.setPosts('')
  }
  
  render() {
    const { categories } = this.props
    
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>This is a Header</h1>
        </div>
        <div className='navigation'>
          <div className='categories'>
            <h3>Categories</h3>
            <ul className='category-list'>
              <li>
                <Category category={{name: 'all', path: ''}} />
              </li>
              {categories.map(category => (
                <li key={category.name}>
                  <Category category={category} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='content'>
          <div className='posts'>
            <h3>Posts</h3>
            <Route path='/:category?' component={PostList} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAllCategories: () => dispatch(fetchAllCategories()),
    setPosts: (category) => dispatch(fetchPosts(category)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
