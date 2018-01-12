import React, {Component} from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAquarium from "./pages/MyAquarium";
import Wallet from "./pages/Wallet";
import FishMarket from "./pages/FishMarket";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        fishTemplateOrUserFish: false 
    };

    //ORIGINAL IN BUY COMPONENT
    clickItem = (id) => {
        // We are looking for the index of the target fish... so... find index of all fish where the fish is filtered to the fish with the target ID
        // This will prevent issues when we concatenate below.  
        let fishIndex = this.state.buyFishArray.findIndex((fish) => fish===this.state.buyFishArray.filter(fish => fish.id===id)[0]);
        
        // If something is added to the cart we disable the toggle - this disallows us from switching between carts (and screwing up pathing)
        let targetToggle = document.getElementById("fishTemplateOrUserFishInput");
        targetToggle.setAttribute("disabled","disabled");

        console.log(`click item is going with: ${this.state.fishTemplateOrUserFish}`)
        if (this.state.fishTemplateOrUserFish === true) {
            document.getElementById("card"+id).style.display = "none";
        }

        this.setState({            
            cartArray: this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])
        }, (state) => {
            this.updateSubtotalState(this.state.subTotal + this.state.buyFishArray[fishIndex].price); 
        });             
    }   
    
    toggleFishMarket = () => {
        let targetToggle = document.getElementById("fishTemplateOrUserFishInput");
        console.log(`before update (?): ${targetToggle.checked}`);
        this.setState({fishTemplateOrUserFish: targetToggle.checked}, this.updateBuyFishArrayState(targetToggle.checked))
    }

    updateBuyFishArrayState = (trueOrFalse) => {
        this.state.buyFishArray = []; // TODO make this more graceful - we are over populating the array
        console.log(`buy fish array is going with: ${trueOrFalse}`);
        if (trueOrFalse){
            axios.get('/api/allUserFishOnSale')
            .then((allfish) => {    
                allfish.data.forEach((fish) => {
                    this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                })
            })
            .catch((err)=> {
                console.log(err)
            })
        }
        else {
            axios.get('/api/allFishTemplates')
            .then((allfish) => {    
                allfish.data.forEach((fish) => {
                    this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                })
            })
            .catch((err)=> {
                console.log(err)
            })
        }
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
            this.setState({thisUserCred: userCredentials.data}, () => {
                console.log("This is user cred");
                console.log(this.state.thisUserCred);
            })
            this.setState({currentBalance: userCredentials.data.walletBalance}, () => {
                console.log(`Here is current balance: ${this.state.currentBalance}`);
            });
        })
        .catch((err)=> {
            console.log(`user auth vomited - so - it didn't get your credentials`)
            console.log(err)
        })
    }

    componentDidMount() {
        // TODO this doesn't load everything correctly the first time - it requires a page refresh
        this.checkAndUpdateAuthenticatedUser();
        this.updateBuyFishArrayState(false);
    }
    
    updateBalanceAfterCheckout = () => {
        if(this.state.subTotal <= this.state.thisUserCred.walletBalance){
            if (this.state.fishTemplateOrUserFish){
                axios.post('/api/userPurchaseOtherUserFish/', this.state.cartArray)
                .then((success) => {
                    this.setState({cartArray: []})   
                    this.setState({subTotal: 0});  
                    // reset user credentials, balance, etc
                    this.checkAndUpdateAuthenticatedUser();
                    console.log(`Go to wallet page and see your updated balance!`);
                    this.updateBuyFishArrayState(false);
                })
                .catch((err)=> {
                    console.log(`Purchasing fish broke`);
                    console.log(err);
                    this.checkAndUpdateAuthenticatedUser();
                    console.log(`Go to wallet page and see your updated balance!`);
                    this.updateBuyFishArrayState(false);
                })
            }
            else {
                axios.post('/api/userPurchaseFish/', this.state.cartArray)
                .then((success) => {
                    this.setState({cartArray: []})   
                    this.setState({subTotal: 0});
                    this.checkAndUpdateAuthenticatedUser();
                    console.log(`Go to wallet page and see your updated balance!`);  
                })
                .catch((err)=> {
                    console.log(`Purchasing fish broke`);
                    console.log(err)
                    this.checkAndUpdateAuthenticatedUser();
                    console.log(`Go to wallet page and see your updated balance!`);
                })
            }
            // Re-enable the target toggle after fish are purchased
            let targetToggle = document.getElementById("fishTemplateOrUserFishInput");
            targetToggle.removeAttribute("disabled");
     
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
                        // updateBuyFishArrayState = {this.updateBuyFishArrayState}    
                        updateSubtotalState = {this.updateSubtotalState}
                        fishTemplateOrUserFish = {this.fishTemplateOrUserFish}  
                        toggleFishMarket = {this.toggleFishMarket}                 
                    />
            }
    }

    //We are giving the Navbar the current page property and passing the handlePageChange function
    //Logic: if X condition, return a certain component
    // render={props => <Life sayHello={this.sayHello} />}
    // https://stackoverflow.com/questions/43469071/react-react-router-dom-pass-props-to-component
    render() {
        return (

            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/myaquarium" component={MyAquarium}/>
                    <Route exact path="/wallet" render={() => {
                        return <Wallet currentBalance={this.state.currentBalance} />;
                    }}/>
                    <Route exact path="/fishmarket" render={() => {
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
                        />
                    }} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                </div>

            </Router>

        );
    }
}

export default AppContainer;