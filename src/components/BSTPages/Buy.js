import React, { Component } from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css";
import "../../Style/ToggleSlider.css";


// import axios from 'axios';

//Add a checkbox that toggles with axios call is getting used
//buy from other users or buy from 'us'

class Buy extends Component {
    //NEED: CART ARRAY AND SUBTOTAL IN APPCONTAINER
    // state = {
    //     cartArray : [], 
    //     buyFishArray : [],
    //     // subTotal: 0
    // }    

    //I AM MOVING THIS FUNCTION TO APPCONTAINER SO UPDATEBALANCE FUNCTION CAN MAKE ACCESS OF THE CARTARRAY WHICH THIS NEEDS
    // clickItem = (id) => {
    //     // We are looking for the index of the target fish... so... find index of all fish where the fish is filtered to the fish with the target ID
    //     // This will prevent issues when we concatenate below.  
    //     let fishIndex = this.state.buyFishArray.findIndex((fish) => fish===this.state.buyFishArray.filter(fish => fish.id===id)[0]);

    //     this.setState({            
    //         cartArray: this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])
    //     }, (state) => {
    //         this.props.updateSubtotalState(this.props.subTotal + this.state.buyFishArray[fishIndex].price); 
    //     });             
    // }    

    // updateBuyFishArrayState = () => {
    //     axios.get('/api/allFishTemplates')
    //     .then((allfish) => {    
    //         // console.log(allfish);
    //         allfish.data.forEach((fish) => {
    //             this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
    //         })
    //     })
    //     .catch((err)=> {
    //         console.log(err)
    //     })
    // }

    render() {
        return (
            <div>
                <div className="container green">
                    <div className="row">
                        <h5 className="col s6">BUY FISH AND ACCOUNTREMENT</h5>    
                    </div>
                    <div className="row swith1">
                        <div className="col s2">Fish Market</div>
                        <div className="col s2">
                            <label className="switch">
                                <input id="fishTemplateOrUserFishInput" onChange={this.props.toggleFishMarket} type="checkbox"></input>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="col s2">Other Users Market</div>
                    </div>
                </div>


                <br/><br/>

                <div>
                    <div className="row">
                        <div className="col s8">
                            <BuyInventory
                                addToCart={this.props.clickItem}
                                buyFishArray={this.props.buyFishArray}
                                updateBuyFishArrayState={this.props.updateBuyFishArrayState}
                            />
                        </div>

                        <div className="col s4">
                            <BuyCart
                                // updateSubtotalState={this.props.updateSubtotalState}
                                // shoppingCart={this.state.cartArray}  
                                shoppingCart={this.props.cartArray}
                                subTotal={this.props.subTotal}
                                checkoutChangeBalance={this.props.checkoutChangeBalance}
                            />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Buy;
