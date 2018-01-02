import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

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
                <Button type="primary" onClick={this.toggleCollapsed} style={{ margin: "9px 0" }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                >

                    {links.map((link, index) => (
                        <Menu.Item key={index}>
                            <Link to={link.to} key={index}>
                                <Icon type={link.icon} />
                                <span>{link.label}</span>
                            </Link>

                        </Menu.Item>
                    ))}
                </Menu>
            </aside >
        )
    }
}

export default Sider;