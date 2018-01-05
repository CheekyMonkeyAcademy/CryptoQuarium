import React from "react";
import canbcheeky1 from '../../Images/canbcheeky1.png';

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
                <img src={canbcheeky1} style={{ width: 200, marginTop: 15 }} />
            </a>
        
            <ul className="left hide-on-med-and-down">
                <li
                    onClick={() => { props.handlePageChange("Login"); }}
                    className={props.currentPage === "Login" ? "active" : ""}
                >
                    <a>Login</a>
                </li>

                <li
                    onClick={() => { props.handlePageChange("Home"); }}
                    className={props.currentPage === "Home" ? "active" : ""}
                >
                    <a>Home</a>
                </li>

                <li
                    onClick={() => { props.handlePageChange("MyAquarium"); }}
                    className={props.currentPage === "MyAquarium" ? "active" : ""}
                >
                    <a>MyAquarium</a>
                </li>

                <li
                    onClick={() => { props.handlePageChange("FishMarket"); }}
                    className={props.currentPage === "FishMarket" ? "active" : ""}
                >
                    <a>FishMarket</a>
                </li>

                <li
                    onClick={() => { props.handlePageChange("Wallet"); }}
                    className={props.currentPage === "Wallet" ? "active" : ""}
                >
                    <a>Wallet</a>
                </li>
            </ul>
        </div>
    </nav>

export default Navbar;