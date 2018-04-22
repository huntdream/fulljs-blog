import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { host } from '../config/host'

class Article extends Component {
  constructor() {
    super()
    this.state = {
      article: '',
      isFetching: false
    }
    this.renderArticle = this.renderArticle.bind(this)
  }

  componentDidMount() {
    let link = this.props.match.params.link
    this.setState({
      isFetching: true
    })
    fetch(host + '/posts/' + link)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({
            article: res.post
          })
          document.title = this.state.article.title
        } else {
          console.log(res.message)
        }
      })
      .then(res =>
        this.setState({
          isFetching: false
        })
      )
  }

  renderArticle(article) {
    return (
      <div className="article">
        <h1 className="article-title">{article.title}</h1>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{
            __html: article.content
          }}
        />
      </div>
    )
  }

  render() {
    let { isFetching, article } = this.state
    if (isFetching) {
      return (
        <div style={{ alignSelf: 'center' }}>
          <CircularProgress size={30} thickness={4} />
        </div>
      )
    }
    return (
      <React.Fragment>
        <div className="article-wrapper">
          {this.renderArticle(article)}
          <div className="comment-wrapper">
            <div className="comment-label">Comments</div>
            <div className="comment-outer">hah</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Article
