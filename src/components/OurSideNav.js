import React, {Component} from "react";
// import SideNav, {Nav, NavIcon, NavText} from 'react-sidenav';
import { render } from 'react-dom';
import { withRR4, Nav, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SideNav } from "react-sidenav/SideNav";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import MyAquarium from "./pages/MyAquarium";

class OurSideNav extends Component {
    

    render() {
        return (
            <Router>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{width:200}}>
                        <SideNav highlightBgColor='blue' highlightColor='white'>
                            <Nav id="logout">
                                <NavText>Logout</NavText>
                            </Nav>

                            <Nav id="Login">
                                <NavText>Login</NavText>
                            </Nav>

                            <Nav id="home">
                                <NavText>Home</NavText>
                            </Nav>

                            <Nav id="myaquarium">
                                <NavText>My Aquarium</NavText>
                            </Nav>

                            <Nav id="wallet">
                                <NavText>Wallet</NavText>
                            </Nav>

                            <Nav id="fishmarket">
                                <NavText>Fish Market</NavText>
                            </Nav>
                        </SideNav>
                    </div>

                    <div style={{padding: 20}}>
                        <Route exact path="/logout" component={Logout}/>
                        <Route exact path="/login" component={Login}/>
                        
                    </div>
                </div>
            </Router>
        );
    }
}

export default OurSideNav;

{/* <OurSideNav 
                        thisUserCred = {this.state.thisUserCred}>
                    {this.state.thisUserCred.userId ? 
                        <a id="logout" className="menu-item" href="/logout">Logout</a> 
                        : <a id="login" className="menu-item" href="/login">Login</a>
                        }
                        <a id="home" className="menu-item" href="/home">Home</a>
                        <a id="myaquarium" className="menu-item" href="/myaquarium">My Aquarium</a>
                        <a id="wallet" className="menu-item" href="/wallet">Wallet</a>
                        <a id="fishmarket" className="menu-item" href="/fishmarket">Fish Market</a>
                    </OurSideNav> */}