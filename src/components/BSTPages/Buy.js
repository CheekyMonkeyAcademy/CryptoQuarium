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
                <div className="row">
                    <div className="col s8">
                        <h5>Buy Fish and Accoutrement</h5>
                        <div>
                            Source:
                            Fish Market
                            <label className="switch">
                                <input id="fishTemplateOrUserFishInput" onChange={this.props.toggleFishMarket} type="checkbox"></input>
                                <span className="slider round"></span>
                            </label>
                            Other Users Market
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s8">
                        <BuyInventory
                            addToCart={this.props.clickItem}
                            buyFishArray={this.props.buyFishArray}
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
        )
    }
}

export default Buy;
