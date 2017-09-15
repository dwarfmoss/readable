import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PostList from './PostList'
import Category from './Category'
import './App.css'
import { getCategories, getPosts } from "../util/readableAPI"
import { initCategories } from '../actions'

class App extends Component {
  componentDidMount() {
    getCategories().then(data => {
      this.props.setCategories(data.categories)
    })
  }
  
  render() {
    const { categories } = this.props
    
    return (
      <div className='App'>
        <div className='App-header'>
          
        </div>
        <ul className='category-list'>
          {categories.map(category => (
            <li key={category.name}>
              <Category category={category} />
            </li>
          ))}
        </ul>
        <p>
          Talking to the backend yields these categories: <br/>
          {categories}
        </p>
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
    setCategories: (data) => dispatch(initCategories(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
