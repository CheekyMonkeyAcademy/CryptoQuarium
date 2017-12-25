import React, {Component} from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAquarium from "./pages/MyAquarium";
import CryptoAccount from "./pages/CryptoAccount";
import FishMarket from "./pages/FishMarket";

//This is a stateful component that will handle pageChange logic

//Will need to import in other pages and components!!!

class AppContainer extends Component {
    //This is class because state will change, depending on which page the user is on
    state = {
        currentPage: "Home"
    };

    //This function sets the state for the current page
    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    //Series of if/else statements that will render the corresponding component
    //for the page that is selected as current page
    renderPage = () => {
        if (this.state.currentPage === "Home"){
            return <Home />
        } else if(this.state.currentPage === "Login"){
            return <Login />
        } else if (this.state.currentPage === "MyAquarium"){
            return <MyAquarium />
        } else if (this.state.currentPage === "CryptoAccount"){
            return <CryptoAccount />
        } else if (this.state.currentPage === "FishMarket"){
            return <FishMarket />
        }
    }

    //We are giving the Navbar the current page property and passing the handlePageChange function
    //Logic: if X condition, return a certain component
    render() {
        return (
            <div>
                <Navbar
                    currentPage = {this.state.currentPage}
                    handlePageChange = {this.state.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default AppContainer;