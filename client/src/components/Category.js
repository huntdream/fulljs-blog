import React, { Component } from 'react'

class Category extends Component {
  constructor() {
    super()
    this.state = {
      category: []
    }
  }

  render() {
    return (
      <div className="category">
        <ul>
          <li>Hello</li>
        </ul>
      </div>
    )
  }
}

export default Category
