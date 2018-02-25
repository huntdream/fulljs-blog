import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import FormItem from './FormItem/FormItem';
import 'react-quill/dist/quill.snow.css';
import Button from 'material-ui/Button';
import { dev, prod } from '../config/host';

class NewPost extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      link: '',
      content: ''
    };
    this._onChange = this._onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _onChange(e, label) {
    this.setState({
      [label]: e.target.value
    });
  }

  handleChange(value) {
    this.setState({ content: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, link, content } = this.state;
    const token = localStorage.getItem('token');
    fetch(`${prod}posts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify({ title, link, content })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success) {
          console.log('Successful');
        } else {
          throw Error(res.message);
        }
      })
      .catch(err => console.log(err));
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
              value={this.state.content}
              onChange={this.handleChange}
              theme="snow"
            />
          </div>
          <div className="submit-btn">
            <Button type="submit" variant="raised" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
