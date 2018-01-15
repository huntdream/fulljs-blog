import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class List extends Component {
    constructor() {
        super();

    }

    render() {
        const posts = this.props.posts;
        return (
            <div className="content--list">
                {
                    posts.map((post, index) =>
                        <div key={index} className="list--item">
                            <Link to={`/${post.name}/${post.title}`}>
                                {post.title}
                            </Link>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default List;