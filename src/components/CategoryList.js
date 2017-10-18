import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Category from './Category'

class CategoryList extends Component {
  render() {
    const { categories } = this.props
    
    return (
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
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps)(CategoryList))