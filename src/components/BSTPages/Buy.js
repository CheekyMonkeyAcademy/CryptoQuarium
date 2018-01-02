import React, {Component} from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css"
import axios from 'axios';

   
class Buy extends Component {
    state = {
        cartArray : [], 
        buyFishArray : [],
        subTotal: 0
    }    

    clickItem = (id) => {
        // We are looking for the index of the target fihs... so... find index of all fish where the fish is filtered to the fish with the target ID
        // This will prevent issues when we concatenate below.  
        let fishIndex = this.state.buyFishArray.findIndex((fish) => fish===this.state.buyFishArray.filter(fish => fish.id===id)[0]);
        this.setState({cartArray: this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])}, () => {
            // console.log("This is cart array")
            // console.log(this.state.cartArray)  
        }); 
    }    

    updateBuyFishArrayState = () => {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {
            // console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                })
                // console.log("This is fish array")
                // console.log(this.state.buyFishArray)
        })
        .catch((err)=> {
            console.log(err)
        })       
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
                        <BuyInventory 
                            addToCart={this.clickItem} 
                            buyFishArray={this.state.buyFishArray}
                            updateBuyFishArrayState={this.updateBuyFishArrayState}
                        />                
                    </div>

                    <div className="col s4">
                        <BuyCart 
                            shoppingCart={this.state.cartArray}   
                            subTotal={this.state.subTotal}                          
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Buy;