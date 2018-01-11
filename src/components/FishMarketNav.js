import React from "react";
import "../Style/FishMarket.css"


const FishMarketNav = props =>

    <div className="all">
        <br/><br/>
        <div className="container">
            <h3 className="logo center #757575 grey darken-1 z-depth-5">Crypto Fish Market</h3>
        </div>
        <br/>
        <div className="store1 center row"></div>
        <br/>
        <hr />
        <br /><br />
        <div className="container">
            <div className="nav-content row">
                {/* <ul id="nav-mobile" className="right hide-on-med-and-down"> */}
                <buttom
                    onClick={() => { props.handlePageChange("Buy"); }}
                    className={props.currentPage === "Buy" ? "active" : ""}>
                    <a><button className="btn btn-large green waves-effect pulse col s2 offset-s1">Buy</button>
                    </a>
                </buttom>

                <buttom
                    onClick={() => { props.handlePageChange("Sell"); }}
                    className={props.currentPage === "Sell" ? "active" : ""}>
                    <a><button className="btn btn-large red waves-effect col s2 offset-s2">Sell</button>
                    </a>
                </buttom>

                <buttom
                    onClick={() => { props.handlePageChange("Trade"); }}
                    className={props.currentPage === "Trade" ? "active" : ""}>
                    <a><button className="btn btn-large orange waves-effect waves-darker col s2 offset-s2">Trade</button>
                    </a>
                </buttom>
            </div>
        </div>
    </div>




export default FishMarketNav;