import React, { Component } from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellUserCart from "../SellComponents/SellUserCart/SellUserCart";
import axios from 'axios';

// <input onChange={(event) => this.props.doSomethingWithEvent(event)} /> 
// doSomethingWithEvent = (event) => {
//     const value = event.target.value;
// }

//Ron says to use state, when the user enters a price in the input, it updates the price of the item
//AND THEN gets added to the sell cart
    //Add two buttons - one to lock in the desired price of the item and another to sell the fish    
    //The user HAS to enter a price to sell the item
    //This needs to be handled on the front end AND on the back end
    //The user needs to see that the price of their fish got updated 
    //and the back end needs to know about it too

    //Take the input value, update the fish on the backend, update the price on the front And then gets added to the cart for sale!
    //Make the value in the sellCards a props.price. This props.price value will be stored as a props and then updated to the front end and back end
    //And then added to the cart for subtotal
    //Math will then ensue
    // let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])

    //The onChange event will call a function that updates the price of the specified fish item
class Sell extends Component {

    state = {

        itemsToBeSold: [], 
        myFishArray: [], 
        //New price should be fish id and price
        newPrice: 0   
        // newPrice: {
        //             fishId: 0,
        //             newValue: 0
        //     }      
    }

    //This will be an onChange event passed to the input space
    handlePriceChange = (event, id) => { 
        console.log("*****LOOK HERE******")  
        console.log(event.target.value)
        console.log(event.target.id)
        this.setState({
            newPrice: event.target.value})
            
        //axios call should go here to update price of fish!!!!
            //Get fish object to kyle in an array
    }
   
    thisItemToMarket = (id) => {        
        console.log("Am I clicking my sell tag?")      
        //0 on out side is referencing the filter
        let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])
        
        // this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]])
        // }, (state) => {
        //     console.log(this.state.itemsToBeSold)
        // }) 
    }

    //FUNCTION TO GET ALL USERS FISH
    getAllUserFish = () => {
        axios.get('/api/allUserFish')
            .then((allUserFish) => {
                allUserFish.data.forEach((fish) => {
                    this.setState({ myFishArray: this.state.myFishArray.concat([fish]) })
                })
                console.log("THIS IS MY FISH ARRAY!")
                console.log(this.state.myFishArray)
            })
            .catch((err) => {
                console.log(err)
        })
    }

    render() {
        return (
            <div>

                <br/>
                <div className="container red">
                    <div className="row">
                        <h5 className="col s6 push-s4 bold_text" style={{ padding:25 }}>SELL YOUR QUIPTO-FISH</h5>
					</div>
                </div>
                <br/><br/>
                <div>
                    <div className="row">
                        <div className="col s8">
                            <SellUserInventory
                                thisItemToMarket={this.thisItemToMarket}
                                getAllUserFish={this.getAllUserFish}
                                myFishArray={this.state.myFishArray}
                                newPrice= {this.state.newPrice}
                                handlePriceChange = {this.handlePriceChange}
								value={this.state.value}
                            />
                        </div>


                    <div className="col s4">
                        <SellUserCart itemsToBeSold = {this.state.itemsToBeSold} />

                    </div>
                </div>
            </div>    
        </div>           

        )
    }
}


export default Sell;