import React, {Component} from "react";
import SellInventoryCards from "../SellInventoryCards"

class SellInventory extends Component {

    componentDidMount(){
        {this.props.grabUserFishInventory()}
    }

    render(){
        return(
            <div className="inventoryBorder">

                 {this.props.userFishToSell.map(fish => {
                    return <SellInventoryCards {...fish}
                        onClick ={this.props.addToCart}
                        key = {fish.id}                         
                    />
                }, this)}

            </div>
        )
    }
}

export default SellInventory;