import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {
        exact: true,
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

const style = {
    isActive: {
        backgroundColor: "rgb(229, 229, 229)",
        borderRight: "2px solid rgb(63, 145, 220)"
    }
}


class Sider extends Component {
    state = {
        collapsed: false,
    }

    render() {
        return (
            <aside style={{ width: 256 }}>
                <div className="info">
                    <div className="info--avatar">
                        <img className="harf-radius" src="https://avatars0.githubusercontent.com/u/7903755?s=460&v=4" alt="Avatar" />
                    </div>
                    <div className="info--about">
                        <p>Yu Mao</p>
                    </div>
                </div>
                <div className="menu">
                    {links.map((link, index) => (
                        <div className="menu--item" key={index}>
                            <NavLink exact={link.exact} to={link.to} activeStyle={style.isActive}>
                                {link.label}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </aside >
        )
    }
}

export default Sider;