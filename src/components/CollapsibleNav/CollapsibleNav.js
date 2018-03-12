import React, {Component} from 'react';
import {Dropdown, NavItem, Button, Icon} from 'react-materialize';
import './CollapsibleNav.css';
import { relative } from 'path';


const CollapsibleNav = props => 

            <Dropdown trigger={
                <Button>
                    ☰
                </Button>
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


