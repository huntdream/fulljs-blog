import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            page: 1
        }
        this.fetchPosts = this.fetchPosts.bind(this);
        this.pageNavgation = this.pageNavgation.bind(this);
    }

    fetchPosts(posts) {
        fetch(`http://localhost:3000/${posts}?&page=${this.state.page}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    this.setState({
                        posts: data.poetries,
                        loading: false,
                    })
                } else {
                    return false;
                }
            }
            )
    }

    async pageNavgation(direction) {
        await this.setState({
            page: this.state.page + direction
        });
        this.fetchPosts('poetries');
        console.log('hello', this.state.page);
    }

    componentDidMount() {
        this.fetchPosts('poetries');
    }

    render() {
        const { posts, loading } = this.state;
        if (loading) {
            return (
                <p>Loading...</p>
            )
        }
        return (
            <div className="content--list">
                {posts.map((post, index) =>
                    <div key={index} className="list--item">
                        <Link to={`/${post.name}/${post.title}`}>
                            {post.title}
                        </Link>
                    </div>
                )}
                <a className="page--navigation prev" onClick={() => this.pageNavgation(-1)}>
                    <i className="arrow left"></i>
                </a>
                <a className="page--navigation next" onClick={() => this.pageNavgation(1)}>
                    <i className="arrow right"></i>
                </a>
            </div>
        )
    }
}

export default Home;