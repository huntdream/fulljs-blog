import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="article">
                {this.props.children}
            </div>
        )
    }
}

export default Article;