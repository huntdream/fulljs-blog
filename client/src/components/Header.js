import React, { Component } from 'react';

import { Button } from 'rmwc';

class Header extends Component {
    render() {
        return (
            <header><Button onClick={this.props.onClick}>Menu</Button></header>
        )
    }
}

export default Header;