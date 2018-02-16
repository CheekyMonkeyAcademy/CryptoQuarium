import React from "react";
import "../Style/FishMarket.css"


const FishMarketNav = props =>

    <div className="all">
        <br/><br/>
        <div className="container">
            <h3 className="logo center #757575 grey darken-1 z-depth-5">Crypto Fish Market</h3>
        </div>
        <br/>
        <br />
        <div className="container">
            <div className="nav-content row">
                <div
                    onClick={() => { props.handlePageChange("Buy"); }}
                    className={props.currentPage === "Buy" ? "active" : ""}>
                    <a><button className="btn btn-large green waves-effect col s4 offset-s1">Buy</button>
                    </a>
                </div>
                <div
                    onClick={() => { props.handlePageChange("Sell"); }}
                    className={props.currentPage === "Sell" ? "active" : ""}>
                    <a><button className="btn btn-large red waves-effect col s4 offset-s2">Sell</button>
                    </a>
                </div>
            </div>
        </div>
        <hr />
    </div>




export default FishMarketNav;