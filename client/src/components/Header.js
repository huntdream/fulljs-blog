import React, {Component} from 'react';

import {Button, Icon} from 'rmwc';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <header><Button onClick={this.props.onClick}>Hello</Button></header>
        )
    }
}

export default Header;