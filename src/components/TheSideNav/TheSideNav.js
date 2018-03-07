import React, {Component} from 'react';
// import {SideNav, Icon, Button, SideNavItem} from 'react-materialize';
// import 'react-materialize';
import './SideNav.css';
import SideNav from 'react-materialize/lib/SideNav';
import { Button } from 'react-materialize';

class TheSideNav extends Component {
    
    componentDidMount () {
        const { options = {} } = this.props;
        $(this._trigger).sideNav(options);
    }
    
    render(){
        return (
            <SideNav
            trigger={<Button>Our Side Nav</Button>}
            options={{onCloseClick: true}}
            />
        )
    }
    
        
    
}




export default TheSideNav;
