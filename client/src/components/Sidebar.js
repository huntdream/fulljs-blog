import React, { Component } from 'react';
import { PersistentDrawer, PersistentDrawerContent, PersistentDrawerHeader, ListItem, ListItemText } from 'rmwc';
import { Link } from 'react-router-dom';

const links = [
    {
        to: "/articles",
        label: "全部文章"
    },
    {
        to: "/category",
        label: "分类目录"
    },
    {
        to: "/tags",
        label: "标签"
    }
];

const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    fontFamily: "微软雅黑"
}

class Sidebar extends Component {

    render() {
        return (
            <div>
                <PersistentDrawer open={this.props.isOpen} onClose={this.props.onClose}>
                    <PersistentDrawerHeader style={{ backgroundColor: '#f6f6f6' }}>
                        <Link to="/" style={linkStyle}> 首页</Link>
                    </PersistentDrawerHeader>
                    <PersistentDrawerContent>
                        {links.map((link, index) => (
                            <Link to={link.to} key={index} style={linkStyle}>
                                <ListItem>
                                    <ListItemText>
                                        {link.label}
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        ))}
                    </PersistentDrawerContent>
                </PersistentDrawer>
            </div >
        )
    }
}

export default Sidebar;