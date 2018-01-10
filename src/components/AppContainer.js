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
        cartArray: [],
        buyFishArray: [],
        fishTemplateTrueOrUserFishFalse: true 
    };

    //ORIGINAL IN BUY COMPONENT
    clickItem = (id) => {
        // We are looking for the index of the target fish... so... find index of all fish where the fish is filtered to the fish with the target ID
        // This will prevent issues when we concatenate below.  
        let fishIndex = this.state.buyFishArray.findIndex((fish) => fish===this.state.buyFishArray.filter(fish => fish.id===id)[0]);
        
        this.setState({            
            cartArray: this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])
        }, (state) => {
            this.updateSubtotalState(this.state.subTotal + this.state.buyFishArray[fishIndex].price); 
        });             
    }   
    
    toggleFishMarket = () => {
        console.log(`Toggling fish market APP CONTAINER, hooray!`);
        let targetToggle = document.getElementById("fishTemplateTrueOrUserFishFalseInput");
        console.log(`currently: ${targetToggle.checked}`);
        this.setState({fishTemplateTrueOrUserFishFalse: targetToggle.checked}, this.updateBuyFishArrayState())
    }
     

    
    //ORIGINAL IN BUY COMPONENT
    updateBuyFishArrayState = () => {
        this.state.buyFishArray = []; // TODO make this more graceful - we are over populating the array
        if (this.state.fishTemplateTrueOrUserFishFalse){
            axios.get('/api/allFishTemplates')
            .then((allfish) => {    
                // console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                })
            })
            .catch((err)=> {
                console.log(err)
            })
        }
        else (
            axios.get('/api/allUserFishOnSale')
            .then((allfish) => {    
                // console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                })
            })
            .catch((err)=> {
                console.log(err)
            })
        )
    } 
    
    //FUNCTION TO HANDLE THE SUBTOTAL MATH
    updateSubtotalState = (value) => {
        console.log("am i getting here? NOW")
        this.setState({subTotal: value});               
    }

    checkAndUpdateAuthenticatedUser = () => {
        axios.get('/api/getAuthenticatedUser')
        .then((userCredentials) => {
            console.log(`So... we theoretically have user creds?`);
            console.log(userCredentials.data);
            // Changed this to only have one set of user credentials data instead of a contact (would create multiple sets of the same)
            this.setState({thisUserCred: userCredentials.data})
            this.setState({currentBalance: this.state.walletBalance})
            console.log("This is user cred")
            console.log(this.state.thisUserCred.walletBalance)
        })
        .catch((err)=> {
            console.log(`user auth vomited - so - it didn't get your credentials`)
            console.log(err)
        })
    }

    //FUNCTION TO GET LOGGEDIN USER CREDENTIALS FROM THE DATABASE
    componentDidMount() {
        this.checkAndUpdateAuthenticatedUser();
    }
    
    //FUNCTION FOR HANDLING ACCOUNT MATH ON CHECKOUT CLICK
    //THIS FUNCTION NEEDS THE CARTARRAY
        //I WANT TO CLEAR THE ARRAY AFTER ACCEPTED PURCHASE SO THERE IS AN EMPTY CART FOR THE NEXT PURCHASE
    updateBalanceAfterCheckout = () => {
        console.log("Am I clicking the checkout button");
        console.log(`Subtotal: ${this.state.subTotal}`);
        console.log(`Balance: ${this.state.thisUserCred.walletBalance}`);
       //I NEED TO PASS UP THE CART ARRAY TO EMPTY IT HERE--BUT IT IS BEING USED HEAVILY TWO COMPONENTS DOWN >:(
        if(this.state.subTotal <= this.state.thisUserCred.walletBalance){
            console.log(`You CAN purchase these items!`);

            if (this.state.fishTemplateTrueOrUserFishFalse){
                axios.post('/api/userPurchaseFish/', this.state.cartArray)
                .then((success) => {
                    this.setState({cartArray: []})   
                    this.setState({subTotal: 0});  
                })
                .catch((err)=> {
                    console.log(`Purchasing fish broke`);
                    console.log(err)
                })
            }
            else {
                axios.post('/api/userPurchaseOtherUserFish/', this.state.cartArray)
                .then((success) => {
                    this.setState({cartArray: []})   
                    this.setState({subTotal: 0});  
                })
                .catch((err)=> {
                    console.log(`Purchasing fish broke`);
                    console.log(err);
                })
            }
            
            this.checkAndUpdateAuthenticatedUser();
            console.log(`Go to wallet page and see your updated balance!`)
     
        } else if (this.state.subTotal >= this.state.currentBalance){
            // TODO forward this error to the user - modal?
            console.log(`You DO NO have enough money to purchase these items`)
        }
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
                        // updateSubtotalState = {this.updateSubtotalState}
                        //I AM PASSING CLICKITEM/FISHARRAY/CARTARRAY/UPDATESUBTOTAL TO FISH MARKET
                        cartArray = {this.state.cartArray}
                        buyFishArray = {this.state.buyFishArray}
                        clickItem = {this.clickItem}
                        updateBuyFishArrayState = {this.updateBuyFishArrayState}    
                        updateSubtotalState = {this.updateSubtotalState}
                        fishTemplateTrueOrUserFishFalse = {this.fishTemplateTrueOrUserFishFalse}  
                        toggleFishMarket = {this.toggleFishMarket}                 
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