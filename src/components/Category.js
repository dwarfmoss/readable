import React, { Component } from 'react'

class Category extends Component {
  
  render() {
    const { category } = this.props
    
    return (
      <div className='category'>
        {category.name}
      </div>
    )
  }
}

export default Category