import React, {Component} from 'react';
// import {Collapsible, CollapsibleItem} from 'react-materialize';
import {Dropdown, NavItem, Button} from 'react-materialize'

import './CollapsibleNav.css';

class CollapsibleNav extends Component {
    render(){
        return (
            <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
            </ul>

        )
    }    
}

export default CollapsibleNav;

