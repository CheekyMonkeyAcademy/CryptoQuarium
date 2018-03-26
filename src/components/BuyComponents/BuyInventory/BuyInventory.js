import React, {Component} from "react";
import "./BuyInventory.css"
import InventoryCards from "../InventoryCards"

class BuyInventory extends Component {

    render(){
        return(
            <div className="inventoryBorder">
                {this.props.fishTemplateOrUserFish ? 
                    ""
                : <h3 class="center-align">Fish colors will randomize on fish purchase - no two fish are alike!</h3>}
                {this.props.buyFishArray.map(fish => {
                    return <InventoryCards {...fish}
                        addToCart ={this.props.addToCart}
                        key = {fish.id}                         
                    />
                }, this)}
            </div>
        )
    }
}

export default BuyInventory;

 