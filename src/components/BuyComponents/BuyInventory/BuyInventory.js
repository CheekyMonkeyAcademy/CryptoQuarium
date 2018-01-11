import React, {Component} from "react";
import "./BuyInventory.css"
import InventoryCards from "../InventoryCards"
// import axios from 'axios';

//NICOLE--LIFT UP THE STATE!!!! THAT IS KEY!!


class BuyInventory extends Component {
   
    componentDidMount(){
      
       {this.props.updateBuyFishArrayState()}        
    }   

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

 