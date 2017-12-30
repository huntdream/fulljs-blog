import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Home extends Component {

    render() {
        return (
            <Row>
                {Array(10).fill(0).map((item, index) =>
                    <Col span={8} key={index}>
                        <div className="gutter-box">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
                            aperiam at autem beatae, blanditiis consectetur deleniti eligendi eum fuga id inventore,
                            ipsum
                            libero
                            non qui repudiandae sint tenetur veniam!
                            </div>
                    </Col>
                )}
            </Row>
        )
    }
}

export default Home;