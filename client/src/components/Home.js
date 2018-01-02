import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const style = {};

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

    fetchPosts() {
        fetch('http://localhost:3000/posts')
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
        this.fetchPosts();
    }

    render() {
        const { posts, loading } = this.state;
        if (loading) {
            return (
                <Button shape="circle" loading style={style.loading} />
            )
        }
        return (
            <Row>
                {Array(10).fill(0).map((item, index) =>
                    <Col span={8} key={index}>
                        <Link to={`/${posts.post_name}`}>
                            <div className="gutter-box">
                                {posts.post_name}
                            </div>
                        </Link>
                    </Col>
                )}
            </Row>
        )
    }
}

export default Home;