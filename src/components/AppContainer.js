import React, {Component} from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAquarium from "./pages/MyAquarium";
import Wallet from "./pages/Wallet";
import FishMarket from "./pages/FishMarket";
import axios from 'axios';

//This is a stateful component that will handle pageChange logic

//Will need to import in other pages and components!!!

class AppContainer extends Component {    
    state = {
        currentPage: "Home", 
        currentBalance: 0,         
        thisUserCred: [],     
        subTotal: 0, 
        // cartArray: [], 
        // buyFishArray: [] 
    };

    
    //FUNCTION TO HANDLE THE SUBTOTAL MATH
    updateSubtotalState = () => {
        console.log("am i getting here?")
        // Loop over the cart array to find the price of each item in there
        this.state.cartArray.forEach((item) => {
            console.log("this is item price")
            console.log(item.price);

            //Add the price (you will need to burrow into each fish object to grab the price)
            const finalSubtotal = this.state.subTotal + item.price

            //Update the state of the subtotal
            this.setState({subTotal: finalSubtotal})         
        });          
    }    

    //FUNCTION TO GET LOGGEDIN USER CREDENTIALS FROM THE DATABASE
    componentDidMount() {
        axios.get('/api/getUserAuthenticated')
        .then((userCredentials) => {
            console.log(`So... we theoretically have user creds?`);
            console.log(userCredentials.data);
                this.setState({thisUserCred: this.state.thisUserCred.concat([userCredentials.data])
                })
                this.setState({currentBalance: this.state.thisUserCred[0].walletBalance})
            console.log("This is user cred")
            console.log(this.state.thisUserCred[0].walletBalance)
        })
        .catch((err)=> {
            console.log(`user auth vomited - so - it didn't get you credentials`)
            console.log(err)
        })
    }

    //FUNCTION FOR HANDLING ACCOUNT MATH ON CHECKOUT CLICK
    updateBalanceAfterCheckout = () => {
        console.log("Am I clicking the checkout button")
    }

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
        } else if (this.state.currentPage === "Wallet"){
            return <Wallet 
                        currentBalance={this.state.currentBalance}
                    />
        } else if (this.state.currentPage === "FishMarket"){
            return <FishMarket 
                        checkoutChangeBalance = {this.updateBalanceAfterCheckout}
                        subTotal = {this.state.subTotal}
                        updateSubtotalState = {this.updateSubtotalState}
                    />
        }
    }

    //We are giving the Navbar the current page property and passing the handlePageChange function
    //Logic: if X condition, return a certain component
    render() {
        return (
            <div>
                <Navbar
                    currentPage = {this.state.currentPage}
                    handlePageChange = {this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default AppContainer;