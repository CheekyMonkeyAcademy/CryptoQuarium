import React, { Component } from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css";
import "../../Style/ToggleSlider.css";

class Buy extends Component {

    render() {
        return (
            <div>
            <br/>
                <div className="container green">
                    <div className="row">
                        <div className="col s6 push-s4">
                            <h5>BUY FISH AND ACCOUTREMENT</h5>    
                        </div>
                    </div>
                    <hr/>
                    <div className="row buy-fish-div">
                        <div className="col s2">Fish Market</div>
                        <div className="col s2"><i class="small material-icons">arrow_back</i></div>
                        <div className="col s2">
                            <label className="switch">
                                <input id="fishTemplateOrUserFishInput" onChange={this.props.toggleFishMarket} type="checkbox"></input>
                                <span className="slider round black"></span>
                            </label>
                        </div>
                        <div className="col s2"><i class="small material-icons">arrow_forward</i></div>
                        <div className="col s4">Other Users Market</div>
                    </div>
                </div>

                <br/>

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
