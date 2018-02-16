import React, { Component } from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellMarket from "../SellComponents/SellMarket/SellMarket";
import axios from 'axios';
import "../BuyComponents/InventoryCards/InventoryCards.css";
import { open } from "fs";


// let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])

//The onChange event will call a function that updates the price of the specified fish item
class Sell extends Component {

    state = {
        itemsToBeSold: [], 
        myFishArray: [],    
        // isModalOpen: false                                        
    }

    handlePriceChange = (event, id) => { 
        console.log("*****LOOK HERE******");
        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 
        console.log(fishIndex)   
        console.log(`${id}`)        
        
        let newFishArray = Array.from(this.state.myFishArray);
        console.log(newFishArray)        

        newFishArray[fishIndex].price = event.target.value; 
        console.log(newFishArray)       
                
        if(event.target.value < 0.01){   
            newFishArray[fishIndex].priceValid = "red";
            newFishArray[fishIndex].priceAlert = "Must sell for more than 0.01";
            
        } else if(event.target.value >= 0.01){
            newFishArray[fishIndex].priceValid = "green";
            newFishArray[fishIndex].priceAlert = " ";
        }
        
        this.setState({
            myFishArray: newFishArray
        }, ()=> {
            console.log(this.state.myFishArray)
        })
    }    


    thisItemToMarket = (id) => {       

        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 
        this.state.myFishArray[fishIndex].priceAlert = " ";
         
        if (this.state.myFishArray[fishIndex].price < 0.01){          
            this.openModal(fishIndex)
            console.log("not enough money...")
                        
        } else if (this.state.myFishArray[fishIndex].price >= 0.01){           
            this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]]
                )}, (state) => {
                    this.state.myFishArray[fishIndex].priceAlert = " "
                })
            document.getElementById("card"+id).style.display = "none"; 
        }    
    }

    openModal = (id) => {            
        console.log("I'm opening!")
        console.log(id)
    }

    closeModal = (id) => {         
        console.log("I'm closing!")
    }
   
    //FUNCTION TO GET ALL USERS FISH
    getAllUserFish = () => {        
        axios.get('/api/allUserFish')
            .then((allUserFish) => {
                allUserFish.data.forEach((fish) => {
                    this.setState({ myFishArray: this.state.myFishArray.concat([fish])})                    
                })
                console.log("THIS IS MY FISH ARRAY!")
                console.log(this.state.myFishArray)
            })
            .catch((err) => {
                console.log(err)
        })
    }

    sellToMarket = () => {
        console.log(`Annnd we're calling 'sell to market' - we clicked this button, hooray!`)
        
        axios.put('/api/userSellTheseFish/', this.state.itemsToBeSold)
        .then((success) => {
            this.setState({itemsToBeSold: []});
            window.location.href="/FishMarket"; // TODO discuss:  send to fish market or...?
        })
        .catch((err)=> {
            console.log(`Selling fish broke`);
            console.log(err);
        });
    }

    stopSellingThisFish = (id) => {
        console.log(`received request to stop selling fish id: ${id}`);

        let idTarget = {'target': id}

        axios.put('/api/stopSellingThisFish/', idTarget)
        .then((success) => {
            document.getElementById('onSale'+ id).style.display = "none";
        })
        .catch((err)=> {
            console.log(`Stop selling this fish broke`);
            console.log(err);
        });
    }

    render() {
        return (
            <div>

                <br/>
                <div className="container red">
                    <div className="row">
                        <h5 className="col s6 push-s4 bold_text" style={{ padding:25 }}>SELL YOUR CRYPTO-FISH</h5>
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
                                handlePriceChange = {this.handlePriceChange}
                                stopSellingThisFish = {this.stopSellingThisFish}
                                // closeModal = {this.closeModal}
                                // isModalOpen = {this.state.isModalOpen}        
                            />
                        </div>

                    <div className="col s4">
                        <SellMarket 
                            itemsToBeSold = {this.state.itemsToBeSold} 
                            sellToMarket = {this.sellToMarket}
                        />

                    </div>
                </div>
            </div>    
        </div>           

        )
    }
}


export default Sell;