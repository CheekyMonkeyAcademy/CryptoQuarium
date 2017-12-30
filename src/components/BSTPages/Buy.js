import React, {Component} from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css"

   
class Buy extends Component {
    state = {
        cartArray : []
    }
    
    // clickItem = (id, clickItem) => {    
    //     console.log(`You clicked ${id}`);
    //     // this.setState({cartArray: this.state.cartArray.concat([id])}, () => {
    //     //     console.log(this.state.cartArray)  
    //     //     }
    //     // );                  
    // } 

    clickItem = () => {
        console.log("You got here")
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
                        <BuyInventory onClick={this.clickItem} />                
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