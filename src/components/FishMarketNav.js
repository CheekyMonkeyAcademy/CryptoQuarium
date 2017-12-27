import React from "react";
import "../Style/FishMarket.css"


const FishMarketNav = props =>    
    <nav className="nav-extended">
        <div className="nav-wrapper">
            <a className="brand-logo">FishMarket</a>                   
        </div>

        <div className="nav-content">
            <ul className="tabs tabs-transparent">
                <li
                    onClick = {() => { props.handlePageChange("Buy"); } }
                    className = {props.currentPage === "Buy" ? "active": ""}
                >
                    <a>Buy</a>
                </li>

                <li
                    onClick = {() => {props.handlePageChange("Sell"); }}
                    className = {props.currentPage === "Sell" ? "active": ""}
                >
                    <a>Sell</a>
                </li>

                <li
                    onClick = {() => {props.handlePageChange("Trade"); }}
                    className = {props.currentPage === "Trade" ? "active": ""}
                >
                    <a>Trade</a>
                </li>
            </ul>
        </div>
    </nav>;
    


export default FishMarketNav;