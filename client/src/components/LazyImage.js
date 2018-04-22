import React, { Component } from 'react'

class LazyImage extends Component {
  constructor() {
    super()
    this.loadedImage = null
  }

  componentDidMount() {
    const image = new Image()

    image.src = this.props.srcLoaded

    image.onload = () => {
      this.loadedImage.style.backgroundImage = `url(${this.props.srcLoaded})`
      this.loadedImage.classList.add('image-fade-in')
    }
  }

  render() {
    return (
      <div className="image-container">
        <div className="image-loaded" ref={node => (this.loadedImage = node)} />
        <div
          className="image-preload"
          style={{ backgroundImage: `url('${this.props.srcPreload}')` }}
        />
      </div>
    )
  }
}

export default LazyImage
