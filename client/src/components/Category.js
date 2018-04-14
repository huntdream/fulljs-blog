import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { host } from '../config/host'

class Category extends Component {
  constructor() {
    super()
    this.state = {
      category: [],
      expand: false
    }
    this.showCategoryDetail = this.showCategoryDetail.bind(this)
  }

  componentDidMount() {
    fetch(host + '/category')
      .then(res => res.json())
      .then(data =>
        this.setState({
          category: data.data
        })
      )
      .catch(err => console.log(err))
  }

  showCategoryDetail(e) {
    e.preventDefault()
    console.log('hello,want to expand details?no way!')
    this.setState(prevState => {
      return {
        expand: !prevState.expand
      }
    })
  }

  render() {
    const { expand, category } = this.state
    return (
      <div className="category-wrapper">
        <ul>
          {category.filter(item => item._id !== null).map((item, index) => (
            <li key={index} className="category-item">
              <a
                className="category"
                data-count={item.count}
                onClick={this.showCategoryDetail}
              >
                {item._id}
              </a>
              {expand ? <div className="category-detail">expand</div> : ''}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Category
