import React from "react";

//Possible pages we will need:
    //Login 
    //User personal aquarium - "MyAquarium"
    //Buy/Sell your fish
    //Crypto "Bank Account"
    //Site home page
        //User logs in and has access to their own personal aquarium site

const Navbar = props =>
    <ul className="nav nav-tabs">
        <li
            onClick = {() => { props.handlePageChange("Login"); } }
            className = {props.currentPage === "Login" ? "active": ""}
        >
            <a>Home</a>
        </li>

        <li
            onClick = {() => {props.handlePageChange("MyAquarium"); }}
            className = {props.currentPage === "MyAquarium" ? "active": ""}
        >
            <a>Home</a>
        </li>

        <li
            onClick = {() => {props.handlePageChange("FishMarket"); }}
            className = {props.currentPage === "FishMarket" ? "active": ""}
        >
            <a>Home</a>
        </li>

        <li
            onClick = {() => {props.handlePageChange("CryptoAccount"); }}
            className = {props.currentPage === "CryptoAccount" ? "active": ""}
        >
            <a>Home</a>
        </li>

        <li
            onClick = {() => {props.handlePageChange("Home"); }}
            className = {props.currentPage === "Home" ? "active": ""}
        >
            <a>Home</a>
        </li>
    </ul>;

    export default Navbar;