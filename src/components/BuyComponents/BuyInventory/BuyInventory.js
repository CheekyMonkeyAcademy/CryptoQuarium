import React, {Component} from "react";
import "./BuyInventory.css"
import InventoryCards from "../InventoryCards"
//Add in State, as it will change on buying habits of the user


class BuyInventory extends Component {
    render(){
        return(
            <div className="inventoryBorder">
                <InventoryCards />
            </div>
        )
    }

}

export default BuyInventory;