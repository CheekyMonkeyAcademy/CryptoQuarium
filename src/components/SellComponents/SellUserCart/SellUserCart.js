import React, {Component} from "react";
import SellMarket from "../SellMarket"

class SellUserCart extends Component {
    render(){
        return(
            <div>
                <SellMarket 
                    itemsToBeSold = {this.props.itemsToBeSold}
                />
            </div>
        )
    }
}

export default SellUserCart;