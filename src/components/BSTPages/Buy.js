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
                        <div className="col s12 center-align">
                            <h5>BUY FISH FOR YOUR AQUARIUM</h5>    
                        </div>
                    </div>
                    <hr/>
                    <div className="row buy-fish-div center-align">
                        <div className="col s3">Fish Market</div>
                        <div className="col s2"><i className="small material-icons">arrow_back</i></div>
                        <div className="col s2">
                            <label className="switch">
                                <input id="fishTemplateOrUserFishInput" onChange={this.props.toggleFishMarket} type="checkbox"></input>
                                <span className="slider round black"></span>
                            </label>
                        </div>
                        <div className="col s2"><i className="small material-icons">arrow_forward</i></div>
                        <div className="col s3">Other Users Market</div>
                    </div>
                </div>

                <br/>

                <div>
                    <div className="row">
                        <div className="col l8 m6 s12">
                            <BuyInventory
                                addToCart={this.props.addToCart}
                                buyFishArray={this.props.buyFishArray}
                                updateBuyFishArrayState={this.props.updateBuyFishArrayState}
                                fishTemplateOrUserFish = {this.props.fishTemplateOrUserFish}
                            />
                        </div>

                        <div className="col l3 m6 s12">
                            <BuyCart                                 
                                shoppingCart={this.props.cartArray}
                                subTotal={this.props.subTotal}
                                checkoutChangeBalance={this.props.checkoutChangeBalance}
                                removeOneFromCart = {this.props.removeOneFromCart}
                            />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Buy;
