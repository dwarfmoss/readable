import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Category from './Category'

class CategoryList extends Component {
  render() {
    const { categories } = this.props
    
    const sortedCategories = categories.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      
      if (nameA > nameB) {
        return 1;
      }
      
      // names must be equal
      return 0;
    })
    
    return (
      <div className='categories'>
        <h3>Categories</h3>
        <ul className='category-list'>
          <li>
            <Category category={{name: 'all', path: ''}} />
          </li>
          {sortedCategories.map(category => (
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