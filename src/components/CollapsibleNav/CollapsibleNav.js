import React, {Component} from 'react';
import {Dropdown, NavItem, Button, Icon} from 'react-materialize';
import './CollapsibleNav.css';


const CollapsibleNav = props => 

            <Dropdown trigger={
                <Button className="menubtn"><Icon large className="menuIcon">reorder</Icon></Button>
              }>

                {props.thisUserCred.userId ? 
                    <NavItem href="/logout">Logout</NavItem>
                :   <NavItem href="/login">Login</NavItem>
                }
                    <NavItem href="/home">Home</NavItem>
                    <NavItem href="/myaquarium">My Aquarium</NavItem>
                    <NavItem href="/fishmarket">Fish Market</NavItem>
                    <NavItem href="/wallet">Wallet</NavItem>
              
            </Dropdown>


export default CollapsibleNav;


