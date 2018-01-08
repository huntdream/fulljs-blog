import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
    container: {
        columnCount: '4',
        columnGap: '1em'
    },
    postWrapper: {
        display: 'inline-block',
        width: '100%'
    },
    post: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        alignSelf: 'center',
        borderBottom: '2px solid #eee',
        marginBottom: '.5em',
        paddingBottom: '.5em'
    }
};

style.loading = {
    position: 'absolute',
    top: '50%',
    left: '50%'
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    fetchPosts(table) {
        fetch(`http://localhost:3000/${table}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    posts: data,
                    loading: false
                })
            }
            )
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
            <div style={style.container}>
                {posts.map((post, index) =>
                    <div key={index} style={style.postWrapper}>
                        <Link to={`/${post.name}/${post.title}`}>
                            <div className="gutter-box" style={style.post}>
                                <header style={style.header}>{post.title}</header>
                                <div>
                                    {post.content}
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;