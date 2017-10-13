import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class Category extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.setPosts(this.props.category.path)
  }
  
  render() {
    const { category } = this.props
    
    return (
      <NavLink to={`/${category.path}`} className='category' onClick={this.handleClick}>
        {category.name}
      </NavLink>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPosts: (category) => dispatch(fetchPosts(category)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))