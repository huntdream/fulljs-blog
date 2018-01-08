import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        to: "/",
        label: "全部文章",
        icon: "appstore"
    },
    {
        to: "/category",
        label: "分类目录",
        icon: "database"
    },
    {
        to: "/tags",
        label: "标签",
        icon: "tags"
    }
];


class Sider extends Component {
    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <aside style={{ width: 256 }}>

            </aside >
        )
    }
}

export default Sider;