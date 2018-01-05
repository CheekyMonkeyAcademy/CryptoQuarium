import React, {Component} from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css";
import axios from 'axios';


   
class Buy extends Component {
    state = {
        cartArray : [], 
        buyFishArray : [],
        subTotal: 0
    }    

    clickItem = (id) => {
        // We are looking for the index of the target fish... so... find index of all fish where the fish is filtered to the fish with the target ID
        // This will prevent issues when we concatenate below.  
        let fishIndex = this.state.buyFishArray.findIndex((fish) => fish===this.state.buyFishArray.filter(fish => fish.id===id)[0]);
        this.setState({cartArray: this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])}, () => {
            //Call the update subtotal function here!
            //Everytime the cart state is updated, the subtotal gets updated too!
            this.updateSubtotalState() 
        }); 
    }    

    updateBuyFishArrayState = () => {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {    
            // console.log(allfish);
            allfish.data.forEach((fish) => {
                this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
            })
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    //FUNCTION TO HANDLE THE SUBTOTAL MATH
    updateSubtotalState = () => {
        // Loop over the cart array to find the price of each item in there
        this.state.cartArray.forEach((item) => {
            console.log("this is item price")
            console.log(item.price);

            //Add the price (you will need to burrow into each fish object to grab the price)
            const finalSubtotal = this.state.subTotal + item.price

            //Update the state of the subtotal
            this.setState({subTotal: finalSubtotal})         
        });          
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
                            updateSubtotalState={this.state.updateSubtotalState}
                            shoppingCart={this.state.cartArray}   
                            subTotal={this.state.subTotal} 
                            checkoutChangeBalance ={this.props.checkoutChangeBalance}                         
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Buy;