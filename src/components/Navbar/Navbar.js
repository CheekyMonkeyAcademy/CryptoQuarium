import React from "react";
import canbcheeky1 from '../../Images/canbcheeky1.png';
import { Link } from "react-router-dom"

//Possible pages we will need:
//Login 
//User personal aquarium - "MyAquarium"
//Buy/Sell your fish
//Crypto "Bank Account"
//Site home page
//User logs in and has access to their own personal aquarium site

//TODO:: Add logic that limits what pages users have access to based on whether they are logged in or not

const Navbar = props =>
    <nav>
        <div className="nav-wrapper">
        {/* Still working on the upper right logo */}
            <a className="brand-logo right">
                <img alt="" src={canbcheeky1} style={{ width: 200, marginTop: 15 }} />
            </a>
        
            <ul className="left hide-on-med-and-down">
                <li
                    // onClick={() => { props.handlePageChange("Login"); }}
                    // className={props.currentPage === "Login" ? "active" : ""}
                    className={
                        window.location.pathname === "/Login" ? "active" : ""
                    }
                >
                    {/* <a>Login</a> */}
                    <Link to="/Login">Login</Link>
                </li>

                <li
                    // onClick={() => { props.handlePageChange("Home"); }}
                    // className={props.currentPage === "Home" ? "active" : ""}
                    className={
                        window.location.pathname === "/" || 
                        window.location.pathname === "/Home" 
                        ? "active" 
                        : ""
                    }
                >
                    {/* <a>Home</a> */}
                    <Link to="/Home">Home</Link>
                </li>

                <li
                    // onClick={() => { props.handlePageChange("MyAquarium"); }}
                    // className={props.currentPage === "MyAquarium" ? "active" : ""}
                    className={
                        window.location.pathname === "/MyAquarium" ? "active" : ""
                    }
                >
                    {/* <a>MyAquarium</a> */}
                    <Link to="/MyAquarium">MyAquarium</Link>
                </li>

                <li
                    // onClick={() => { props.handlePageChange("FishMarket"); }}
                    // className={props.currentPage === "FishMarket" ? "active" : ""}
                    className={
                        window.location.pathname === "/FishMarket" ? "active" : ""
                    }
                >
                    {/* <a>FishMarket</a> */}
                    <Link to="/FishMarket">FishMarket</Link>
                </li>

                <li
                    // onClick={() => { props.handlePageChange("Wallet"); }}
                    // className={props.currentPage === "Wallet" ? "active" : ""}
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