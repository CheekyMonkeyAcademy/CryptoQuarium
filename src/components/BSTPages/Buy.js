import React, {Component} from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css";
import axios from 'axios';


//Can I possibly ONLY move the subtotal and the function that updates the subtotal to the app container
    //and then pass through the update function as a props???????

//Also can I move the cartArray to the app container
    //and in the function that updates the cartArray, I am passing it through as a prop and updating
    //the props in the buyComponent?????

class Buy extends Component {
    //NEED: CART ARRAY AND SUBTOTAL IN APPCONTAINER
    state = {
        cartArray : [], 
        buyFishArray : [],
        // subTotal: 0
    }    

    //SINCE CLICKITEM IS CALLING THE UPDATESUBTOTALSTATE USING THE BUYFISHARRAY THIS NEEDS TO BE IN THE APPCONTAINER TOO
    //ALSO HOISTING THE BUYFISHARRAY
    clickItem = (id) => {
        // We are looking for the index of the target fish... so... find index of all fish where the fish is filtered to the fish with the target ID
        // This will prevent issues when we concatenate below.  
        let fishIndex = this.state.buyFishArray.findIndex((fish) => fish===this.state.buyFishArray.filter(fish => fish.id===id)[0]);
        
        this.setState({            
            cartArray: this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])
        }, (state) => {
            this.props.updateSubtotalState(this.props.subTotal + this.state.buyFishArray[fishIndex].price);                
        });             
    }    

    //SINCE THIS FUNCTION IS USING THE BUYFISHARRAY STATE WHICH WILL BE MOVED TO THE APP CONTAINER, IT ALSO NEEDS TO BE MOVED
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

    //THIS ALSO NEEDS TO BE MOVED UP TO THE APP CONTAINER
    //FUNCTION TO HANDLE THE SUBTOTAL MATH
    // updateSubtotalState = () => {
    //     // Loop over the cart array to find the price of each item in there
    //     this.state.cartArray.forEach((item) => {
    //         console.log("this is item price")
    //         console.log(item.price);

    //         //Add the price (you will need to burrow into each fish object to grab the price)
    //         const finalSubtotal = this.state.subTotal + item.price

    //         //Update the state of the subtotal
    //         this.setState({subTotal: finalSubtotal})         
    //     });          
    // }    


    //FUNCTIONS BELOW WILL NEED TO BE PASSED THROUGH AS PROPS!
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
                            updateSubtotalState={this.props.updateSubtotalState}
                            shoppingCart={this.state.cartArray}   
                            // subTotal={this.state.subTotal} 
                            subTotal={this.props.subTotal}
                            checkoutChangeBalance ={this.props.checkoutChangeBalance}                         
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Buy;