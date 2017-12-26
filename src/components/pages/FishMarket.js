import React, { Component } from "react";
import FishMarketNav from "../FishMarketNav";

//This is set up to be a stateful component because I assume the state of the page
    //will change depending on how users are interacting with the fish- buying/selling/trading

class FishMarket extends Component {
//This is class because state will change, depending on which page the user is on
state = {
    currentPage: "Buy"
};

//This function sets the state for the current page
handlePageChange = page => {
    this.setState({currentPage: page});
};

//Series of if/else statements that will render the corresponding component
//for the page that is selected as current page
renderPage = () => {
    if (this.state.currentPage === "Buy"){
        return <Buy />
    } else if(this.state.currentPage === "Sell"){
        return <Sell />
    } else if (this.state.currentPage === "Trade"){
        return <Trade />
    } 
}

//We are giving the Navbar the current page property and passing the handlePageChange function
//Logic: if X condition, return a certain component
render() {
    return (
        <div>
            <FishMarketNav
                currentPage = {this.state.currentPage}
                handlePageChange = {this.handlePageChange}
            />
            {this.renderPage()}
        </div>
        );
    }
}

export default FishMarket;