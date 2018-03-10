import React, {Component} from 'react';
import {Dropdown, NavItem, Button, Icon} from 'react-materialize';
import './CollapsibleNav.css';

class CollapsibleNav extends Component {
    render(){
        return (
            <Dropdown trigger={
                <Button><Icon small>dehaze</Icon></Button>
              }>
              <NavItem>one</NavItem>
              <NavItem>two</NavItem>
              <NavItem divider />
              <NavItem>three</NavItem>
            </Dropdown>

        )
    }    
}

export default CollapsibleNav;