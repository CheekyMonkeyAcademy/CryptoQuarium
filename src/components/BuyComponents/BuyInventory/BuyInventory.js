import React, {Component} from "react";
import "./BuyInventory.css"
import InventoryCards from "../InventoryCards"

class BuyInventory extends Component {

    render(){
        return(
            <div className="inventoryBorder">
                {this.props.buyFishArray.map(fish => {
                    return <InventoryCards {...fish}
                        onClick ={this.props.addToCart}
                        key = {fish.id}                         
                    />
                }, this)}
            </div>
        )
    }
}

export default BuyInventory;

 