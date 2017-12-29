import React, {Component} from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css"
//LIFTING UP STATE: I need the two child component of the Buy page (BuyCart and Buy Inventory) to communicate with each other
    //I am moving the arrays stored in the state of the BuyInventory component up to the BuyPage
    //This state will be passed to the children(BuyCart and BuyInventory) via Props-- so that the components are always in sync with each other

    //STEPS:
        //1. Add a constructor to the BuyPage and set its initial state to the arrays needed in both components
        //2. Need to change what happens when an Inventory Item is clicked
            //The BuyPage Component now stores which Inventory are clicked on

class Buy extends Component {

   constructor(props) {
       super(props);
       this.state = {        
            fishArray: [], 
            cartArray: []
        }
    }
   

    render(){
        return (
                
            <div>
                <div className="row">
                    <div className="col s8">
                        <h5>Buy Fish and Accoutrement</h5>
                    </div>           
                </div>
                
                <div className="row">
                    <div className="col s8">
                        <BuyInventory fishArray={this.state.fishArray} cartArray={this.state.cartArray}/>                
                    </div>

                    <div className="col s4">
                        <BuyCart />
                    </div>
                </div>
            </div>
        )
    }
}

    

export default Buy;