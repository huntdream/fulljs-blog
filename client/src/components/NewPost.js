import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import FormItem from './FormItem/FormItem';
import 'react-quill/dist/quill.snow.css';

class NewPost extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      link: '',
      text: ''
    };
    this._onChange = this._onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _onChange(e, label) {
    this.setState({
      [label]: e.target.value
    });
    console.log(e.target);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submited');
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <FormItem
            label="Title"
            refName="title"
            onChange={e => this._onChange(e, 'title')}
          />
          <FormItem
            label="Link"
            refName="link"
            onChange={e => this._onChange(e, 'link')}
          />
          <div className="text-editor">
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              theme="snow"
            />
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
