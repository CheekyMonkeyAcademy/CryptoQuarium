import React from "react";
import canbcheeky1 from '../../Images/canbcheeky1.png';
import { Link } from "react-router-dom";
import "./Navbar.css";
import CollapsibleNav from '../CollapsibleNav/CollapsibleNav';
import $ from 'jquery';

// import {Collapsible, CollapsibleItem} from 'react-materialize';


const Navbar = props =>
    
    <nav className="#607d8b blue-grey">
        <div className="nav-wrapper">
            <a className="brand-logo right" href="/PlugPage">
                <img alt="" src={canbcheeky1} style={{ width: 240, marginTop: 15 }} />
            </a>
          
            {/* Dropdown */}
            <a class='dropdown-button btn' data-activates="dropdown1">Drop!</a>

            <CollapsibleNav />

            {/* <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
            </ul> */}

            

            {/* <a data-activates="mobile-demo" class="waves-effect waves-light btn button-collapse"><i class="material-icons left">dehaze</i></a> */}

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
    

export default Navbar;