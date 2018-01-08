import React, {Component} from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellUserCart from "../SellComponents/SellUserCart/SellUserCart";

class Sell extends Component {

    render(){
        return (
<div>
                <div className="row">
                    <div className="col s8">
                        <h5>Sell Your Fish Stock</h5>
                    </div>           
                </div>
                
                <div className="row">
                    <div className="col s8">
                        <SellUserInventory />                
                    </div>

                    <div className="col s4">
                        <SellUserCart  />
                    </div>
                </div>
            </div>
        )
    }
}


export default Sell;