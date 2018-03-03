import React from "react";
import "../Style/FishMarket.css"


const FishMarketNav = props =>

    <div className="all">
        <br/>
        <div className="container">
            <div className="nav-content row">
                <div
                    onClick={() => { props.handlePageChange("Buy"); }}
                    className={props.currentPage === "Buy" ? "active" : ""}>
                    <a><button className="btn btn-large green black-text waves-effect col s4 offset-s1">Buy</button>
                    </a>
                </div>
                <div
                    onClick={() => { props.handlePageChange("Sell"); }}
                    className={props.currentPage === "Sell" ? "active" : ""}>
                    <a><button className="btn btn-large red black-text waves-effect col s4 offset-s2">Sell</button>
                    </a>
                </div>
            </div>
        </div>
    </div>




export default FishMarketNav;