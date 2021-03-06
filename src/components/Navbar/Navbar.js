import React from "react";
import canbcheeky1 from '../../Images/canbcheeky1.png';
import { Link } from "react-router-dom";
import "./Navbar.css";
import CollapsibleNav from '../CollapsibleNav/CollapsibleNav';
import $ from 'jquery';
import { relative } from "path";


const Navbar = props =>
    
    <div className="navbar-fixed">

    <nav className="#607d8b blue-grey">
        <div className="nav-wrapper">
            <a className="brand-logo right" href="/PlugPage">
                <img alt="" src={canbcheeky1} style={{ width: 240, marginTop: 15 }} />
            </a>
          
            <a data-activates="mobile-demo" class="button-collapse">                
                <CollapsibleNav 
                    thisUserCred={props.thisUserCred}
                />     
            </a>

            <ul className="left hide-on-med-and-down">
                {/* We're setting up a switch here - either we're active with credentials and we
                are using logout - or we need credentials and we use login */}
                {props.thisUserCred.userId ?
                    <li                    
                        className={
                            window.location.pathname === "/Logout" ? "active" : ""
                        }
                    >                    
                        <Link to="/Logout">Logout</Link>
                    </li> 
                :    <li
                        className={
                            window.location.pathname === "/Login" ? "active" : ""
                        }
                    >                    
                        <Link to="/Login">Login</Link>
                    </li>
                }

                <li                    
                    className={
                        window.location.pathname === "/" || 
                        window.location.pathname === "/Home" 
                        ? "active" 
                        : ""
                    }
                >                    
                    <Link to="/Home">Home</Link>
                </li>

                <li                    
                    className={
                        window.location.pathname === "/MyAquarium" ? "active" : ""
                    }
                >                    
                    <Link to="/MyAquarium">My Aquarium</Link>
                </li>

                <li                   
                    className={
                        window.location.pathname === "/FishMarket" ? "active" : ""
                    }
                >                    
                    <Link to="/FishMarket">Fish Market</Link>
                </li>

                <li                
                    className={
                        window.location.pathname === "/Wallet" ? "active" : ""
                    }
                >
                    <Link to="/Wallet">Wallet</Link>
                </li>
            </ul>
        </div>
    </nav>

    </div>
    

export default Navbar;