import React, {Component} from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css"
import axios from 'axios';

   
class Buy extends Component {
    state = {
        cartArray : [], 
        buyFishArray : [] 
    }    

    //AT THE MOMENT, YOU ARE TRACKING THE ITEM ID. TO GET THE NAME(A MORE USER FRIENDLY PROPERTY OF THE ITEM), ADJUST WHAT IS ATTACHED TO THE CLICK BUTTON IN THE INVENTORYCARD COMPONENT, AND ALL THE WAY UP FROM GRANDCHILD TO GRANDPARENT
    clickItem = (id) => {
        console.log("You got here")
        console.log(`clicked: ${id}`)
        this.setState({cartArray: this.state.cartArray.concat([id])}, () => {
            console.log("This is cart array")
            console.log(this.state.cartArray)  
        }); 
    }

    updateBuyFishArrayState = () => {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {
            console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                })
                console.log("This is fish array")
                console.log(this.state.buyFishArray)
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
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Buy;