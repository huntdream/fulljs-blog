import React, {Component} from 'react';
import {PersistentDrawer, Button, PersistentDrawerContent, PersistentDrawerHeader, ListItem, ListItemText} from 'rmwc';

class Sidebar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <PersistentDrawer open={this.props.isOpen} onClose={this.props.onClose}>
                <PersistentDrawerHeader style={{ backgroundColor: '#f6f6f6' }}>
                    PersistentDrawerHeader
                </PersistentDrawerHeader>
                <PersistentDrawerContent>
                    <ListItem>
                        <ListItemText>Cookies</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Pizza</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Icecream</ListItemText>
                    </ListItem>
                </PersistentDrawerContent>
            </PersistentDrawer>
            </div>
        )
    }
}

export default Sidebar;