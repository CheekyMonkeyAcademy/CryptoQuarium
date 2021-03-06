import React, {Component} from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import MyAquarium from "./pages/MyAquarium";
import Wallet from "./pages/Wallet";
import FishMarket from "./pages/FishMarket";
import PlugPage from "./pages/PlugPage";
import HireForm from "./pages/HireForm";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { relative } from "path";


class AppContainer extends Component {    
    state = {
        currentPage: "Home", 
        currentBalance: 0,         
        thisUserCred: [],     
        subTotal: 0,
        cartArray: [],
        buyFishArray: [],
        fishTemplateOrUserFish: false,        
    };
   
    //ORIGINAL IN BUY COMPONENT
    addToCart = (id) => {
        // We are looking for the index of the target fish... so... find index of all fish where the fish is filtered to the fish with the target ID
        // This will prevent issues when we concatenate below.  
        let fishIndex = this.state.buyFishArray.findIndex((fish) => fish===this.state.buyFishArray.filter(fish => fish.id===id)[0]);
        let targetToggle = document.getElementById("fishTemplateOrUserFishInput");

        // If something is added to the cart we disable the toggle - this disallows us from switching between carts (and screwing up pathing)
        targetToggle.setAttribute("disabled","disabled");

        // If we're on fish market for user fish - we add things this way...
        if (this.state.fishTemplateOrUserFish === true) {
            document.getElementById("card"+id).style.display = "none";
            this.setState({          
                cartArray: this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])
            }, () => {
                this.updateSubtotalState(this.state.subTotal + this.state.buyFishArray[fishIndex].price); 
            });         
        }
        // If we're in the fish market store - we add things this way...
        else {
            let fishToAddToArray = this.state.buyFishArray[fishIndex];
            let newCartArray = this.state.cartArray;
            let fishIndexInCart = newCartArray.findIndex((fish) => fish===newCartArray.filter(fish => fish.id===id)[0]);

            // add our quantity desired - either add one, or set to 1... if it exists, add, if not concatenate
            if (fishIndexInCart !== -1){
                // if there is no quantity available, add it - otherwise do nothing
                fishToAddToArray.quantityToBuy ? "" : fishToAddToArray.quantityToBuy = 0;
                
                // increment the quantity
                newCartArray[fishIndexInCart].quantityToBuy += 1;
            }
            else {
                fishToAddToArray.quantityToBuy = 1;
                newCartArray = this.state.cartArray.concat(fishToAddToArray);
                // re-declare the fish index since it exists now
                fishIndexInCart = newCartArray.findIndex((fish) => fish===newCartArray.filter(fish => fish.id===id)[0]);
            }

            if (newCartArray[fishIndexInCart].quantityAvailable >= newCartArray[fishIndexInCart].quantityToBuy){
                this.setState({          
                    cartArray: newCartArray
                }, () => {
                    this.updateSubtotalState(this.state.subTotal + fishToAddToArray.price); 
                });
            }
            else {
                // TODO:  Add modal (?) Quanitity to buy is too high - so we'll need to throw an error to the user
            }
        }
    }   
    
    toggleFishMarket = () => {
        let targetToggle = document.getElementById("fishTemplateOrUserFishInput");
        this.setState({fishTemplateOrUserFish: targetToggle.checked}, this.updateBuyFishArrayState(targetToggle.checked))
    }

    updateBuyFishArrayState = (trueOrFalse) => {
        this.setState({buyFishArray: []}); 
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
        this.setState({subTotal: value});               
    }

    checkAndUpdateAuthenticatedUser = () => {
        axios.get('/api/getAuthenticatedUser')
        .then((userCredentials) => {
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
            console.log(`user auth vomited - so - it didn't get your credentials`);
            console.log(err);
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
                    this.updateBuyFishArrayState(false);
                })
                .catch((err)=> {
                    console.log(`Purchasing fish broke`);
                    console.log(err);
                    this.checkAndUpdateAuthenticatedUser();
                    this.updateBuyFishArrayState(false);
                })
            }
            else {
                axios.post('/api/userPurchaseFish/', this.state.cartArray)
                .then((success) => {
                    this.setState({cartArray: []})   
                    this.setState({subTotal: 0});
                    this.checkAndUpdateAuthenticatedUser();
                    // reset the buy fish array to update quantities
                    this.setState({buyFishArray: []});
                    axios.get('/api/allFishTemplates')
                    .then((allfish) => {    
                        allfish.data.forEach((fish) => {
                            this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                        })
                    })
                })
                .catch((err)=> {
                    console.log(`Purchasing fish broke`);
                    console.log(err)
                    this.checkAndUpdateAuthenticatedUser();
                })
            }
            // Re-enable the target toggle after fish are purchased
            let targetToggle = document.getElementById("fishTemplateOrUserFishInput");
            targetToggle.removeAttribute("disabled");
     
        } else if (this.state.subTotal >= this.state.currentBalance){
            // TODO forward this error to the user - modal?
            console.log(`You DO NOT have enough money to purchase these items`);
        }
    }

    removeOneFromCart = (id) => {
        let fishIndex = this.state.cartArray.findIndex((fish) => fish===this.state.cartArray.filter(fish => fish.id===id)[0]);
        let fishToRemoveFromArray = this.state.cartArray[fishIndex];
        let newCartArray = this.state.cartArray;
        let fishIndexInCart = newCartArray.findIndex((fish) => fish===newCartArray.filter(fish => fish.id===id)[0]);

        // If we're on fish market for user fish - we remove things this way...
        if (this.state.fishTemplateOrUserFish === true) {
            document.getElementById("card"+id).style.display = "block";
            
            newCartArray.splice(fishIndexInCart, 1);
            
            this.setState({          
                cartArray: newCartArray
            }, () => {
                this.updateSubtotalState(this.state.subTotal - fishToRemoveFromArray.price); 
            });      
        }
        // If we're in the fish market store - we remove things this way...
        else {
            // remove one of the target or remove the entire thing
            if (fishToRemoveFromArray.quantityToBuy > 1){ 
                newCartArray[fishIndexInCart].quantityToBuy -= 1;
            }
            else {
                newCartArray.splice(fishIndexInCart, 1);
            }

            this.setState({          
                cartArray: newCartArray
            }, () => {
                this.updateSubtotalState(this.state.subTotal - fishToRemoveFromArray.price); 
            });
        }

        if (newCartArray.length === 0){
            console.log(`re-enable the toggle... cart is empty`);
            let targetToggle = document.getElementById("fishTemplateOrUserFishInput");
            targetToggle.removeAttribute("disabled");
        }
    }

    //The reason why I was having issues with all my sidenav attempts appearing behind our
        // other page content was because of a STACKING CONTEXT ISSUE. I needed to add a position relative to
        // the parent component of the navbar to get the dropdown to appear over the main content!
    render() {
  
        return (
            <Router>
                <div className="magicDiv" style={{position:relative}}>             
                    <Navbar 
                        thisUserCred = {this.state.thisUserCred}                                                                  
                    />   
                   
                    <Route exact path="/plugpage" render={() => <PlugPage />}/>
                    <Route exact path="/hireform" render={() => <HireForm />} />
                    <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/home" component={this.state.thisUserCred.userId ? Home : Login} />
                    <Route exact path="/" component={this.state.thisUserCred.userId ? Home : Login} />
                    
                    <Route exact path="/myaquarium" component={this.state.thisUserCred.userId ? MyAquarium : Login}/>
                    <Route exact path="/wallet" render={() => 
                        this.state.thisUserCred.userId ? 
                            <Wallet currentBalance={this.state.currentBalance} />
                        :   <Login />
                    }/>
                    <Route exact path="/fishmarket" render={() => 
                        this.state.thisUserCred.userId ? 
                            <FishMarket 
                                checkoutChangeBalance = {this.updateBalanceAfterCheckout}
                                subTotal = {this.state.subTotal}
                                cartArray = {this.state.cartArray}
                                buyFishArray = {this.state.buyFishArray}
                                addToCart = {this.addToCart}
                                updateBuyFishArrayState = {this.updateBuyFishArrayState}
                                updateSubtotalState = {this.updateSubtotalState}
                                toggleFishMarket = {this.toggleFishMarket}
                                removeOneFromCart = {this.removeOneFromCart}
                                fishTemplateOrUserFish = {this.state.fishTemplateOrUserFish}
                            />
                        :   <Login />
                    }/>
                        </div>
            </Router>
        );
    }
}

export default AppContainer;