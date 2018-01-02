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


    //MASSIVE TODO!!! THIS WORKS FOR NOW- BUT WILL DEFINITELY NEED TO BE REVISITED
        //ID FOR FISH START AT 1,2,3 ETC
        //AND THE ARRAY STARTS WITH 0,1,2 ETC
        //CURRENTLY ADDED IN -1 TO FIX- BUT WILL CREATE PROBLEMS LATER DOWN THE ROAD
        //POSSIBLE FIX: this.state.fishThing[this.state.filter(filter to get the specific index of the matching ID)]
            //A FILTER OF THE ARRAY TO LOOK FOR THE APPROPRIATE ID ASSOCIATED WITH THE FISH
    clickItem = (id) => {
        console.log("You got here")
        console.log(`clicked: ${id}`)
        this.setState({cartArray: this.state.cartArray.concat([this.state.buyFishArray[id-1]])}, () => {
            console.log("This is cart array")
            console.log(this.state.cartArray)  
           //Call the update subtotal function here!
 +            //Everytime the cart state is updated, the subtotal gets updated too!
 +            this.updateSubtotalState() 
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
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Buy;