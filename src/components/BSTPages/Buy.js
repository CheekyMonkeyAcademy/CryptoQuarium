import React, { Component } from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css";
import "../../Style/ToggleSlider.css";

class Buy extends Component {

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
