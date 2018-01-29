import React, { Component } from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellUserCart from "../SellComponents/SellUserCart/SellUserCart";
import axios from 'axios';

// <input onChange={(event) => this.props.doSomethingWithEvent(event)} /> 
// doSomethingWithEvent = (event) => {
//     const value = event.target.value;
// }

// let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])

    //The onChange event will call a function that updates the price of the specified fish item
class Sell extends Component {

    state = {
        itemsToBeSold: [], 
        myFishArray: [],           
        newPrice: {
                    fishId: 0,
                    newValue: 0,                     
        } , 
        isPriceValid: false  
        // sellAlert: "" 
    }

    //This will be an onChange event passed to the input space
    handlePriceChange = (event, id) => { 
        console.log("*****LOOK HERE******")           
        this.setState({
            newPrice: {
                fishId: event.target.id, 
                newValue: event.target.value
            }
        }, () => {
            console.log(this.state.newPrice)
        })      
            
        //axios call should go here to update price of fish!!!!
            //Get fish object to kyle in an array
    }

    // this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]])
    //             }, (state) => {
    //                 console.log(this.state.itemsToBeSold)
    //             })             
    //             document.getElementById("card"+id).style.display = "none";
   
    thisItemToMarket = (id) => {        
        console.log("Am I clicking my sell tag?")  
        console.log(`${id}`)    //Same as line 61!!
        console.log(this.state.newPrice)

        this.validateEnteredPrice(id)        
    }

    validateEnteredPrice = (id) => {
        let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])

        if (this.state.newPrice.newValue[fishIndex] < 0.01){
            //If the price is LESS than 0.01, ALERT "NO"
            alert("NO")
            //Change state to tell user on the front-end
            this.setState({isPriceValid: false}, ()=>{
                console.log(this.state.isPriceValid)
            })

        } else if (this.state.newPrice.newValue[fishIndex] >= 0.01){
            //If the price is GREATER than OR EQUAL TO 0.01, ALERT "YES"
            alert("YES")
            this.setState({isPriceValid: true}, ()=>{
                console.log(this.state.isPriceValid)
            })
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
                                isPriceValid={this.state.isPriceValid}
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