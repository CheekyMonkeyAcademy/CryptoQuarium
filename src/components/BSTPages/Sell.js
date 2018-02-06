import React, { Component } from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellUserCart from "../SellComponents/SellUserCart/SellUserCart";
import axios from 'axios';
import "../BuyComponents/InventoryCards/InventoryCards.css";


// let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])

//The onChange event will call a function that updates the price of the specified fish item
class Sell extends Component {

    state = {
        itemsToBeSold: [], 
        myFishArray: [],    
        inputColors: "red",       
        newPrice: {
                    fishId: 0,
                    newValue: 0,                     
        }              
    }

    //This will be an onChange event passed to the input space
    handlePriceChange = (event, id) => { 
        console.log("*****LOOK HERE******")    
        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 
        console.log(fishIndex)   
        console.log(`${id}`)        
        
        let newFishArray = Array.from(this.state.myFishArray);
        console.log(newFishArray)        

        newFishArray[fishIndex].price = event.target.value;

        this.validateEnteredPrice(id, event)
        
        this.setState({
            myFishArray: newFishArray
        }, ()=> {
            console.log(this.state.myFishArray)
        })
    }
    
   
    thisItemToMarket = (id) => {        
        console.log("Am I clicking my sell tag?")  
        console.log(`${id}`);  
      
    }

    validateEnteredPrice = (id, event) => {
        let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])
        
        const thisInputBox = document.getElementById("input" + id);        
        console.log(thisInputBox)
        
        if(event.target.value <= 0.01){
            console.log("no")
            thisInputBox.removeClass

        } else if(event.target.value >= 0.01){
            console.log("yes")
        }

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
                                inputColors = {this.state.inputColors}
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