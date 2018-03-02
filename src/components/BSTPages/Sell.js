import React, { Component } from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellMarket from "../SellComponents/SellMarket/SellMarket";
import axios from 'axios';
import "../BuyComponents/InventoryCards/InventoryCards.css";

class Sell extends Component {

    state = {
        itemsToBeSold: [], 
        myFishArray: [],    
        modalIsOpen: false                                        
    }

    handlePriceChange = (event, id) => { 
        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id)    
        let newFishArray = Array.from(this.state.myFishArray);

        newFishArray[fishIndex].price = event.target.value;  
                
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
        })
    }    

    thisItemToMarket = (id) => {  
        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 
        let newFishArray = this.state.myFishArray;
        newFishArray[fishIndex].priceAlert = " ";

        if (newFishArray[fishIndex].price < 0.01){             
                this.openModal();       
                                               
        } else if (newFishArray[fishIndex].price >= 0.01){           
            this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]]
                )}, () => {
                    newFishArray[fishIndex].priceAlert = " "
                    this.setState({myFishArray: newFishArray});
                })
            document.getElementById("card"+id).style.display = "none"; 
        }    
    }

    getParent = (id) => {
        return document.querySelector(".container");
    }

    openModal = () => {     
        this.setState({modalIsOpen:true}, () => {
        });     
    }

    closeModal = () => {         
        this.setState({modalIsOpen:false});
    }
   
    //FUNCTION TO GET ALL USERS FISH
    getAllUserFish = () => {        
        axios.get('/api/allUserFish')
            .then((allUserFish) => {
                allUserFish.data.forEach((fish) => {
                    this.setState({ myFishArray: this.state.myFishArray.concat([fish])})                    
                })
            })
            .catch((err) => {
                console.log(err)
        })
    }

    sellToMarket = () => {
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

    removeFromSelling = (id) => {
        // Splice the item out of the items to be sold array
        let fishIndex =  this.state.itemsToBeSold.findIndex(fish => fish.id === id)    
        let newFishArray = Array.from(this.state.itemsToBeSold);     

        // remove the target that was just clicked
        newFishArray.splice(fishIndex,1);

        // kick it back into current state
        this.setState({
            itemsToBeSold: newFishArray
        }, ()=> {});

        // Make the item visible again
        document.getElementById("card"+id).style.display = "block"; 
    }

    render() {
        return (
            <div>
                <br/>
                <div className="container red center-align">
                    <div className="row">
                        <h5 className="col s12 bold_text">SELL YOUR CRYPTO-FISH</h5>
					</div>
                </div>
                <br/>
                <div>
                    <div className="row">
                        <div className="col l8 m6 s12">
                            <SellUserInventory
                                thisItemToMarket={this.thisItemToMarket}
                                getAllUserFish={this.getAllUserFish}
                                myFishArray={this.state.myFishArray}     
                                handlePriceChange = {this.handlePriceChange} 
                                closeModal = {this.closeModal}
                                modalIsOpen = {this.state.modalIsOpen}        
                                getParent = {this.getParent}
                                stopSellingThisFish = {this.stopSellingThisFish}
                            />
                        </div>
                        <div className="col l3 m6 s12">
                            <SellMarket 
                                itemsToBeSold = {this.state.itemsToBeSold} 
                                sellToMarket = {this.sellToMarket}
                                removeFromSelling = {this.removeFromSelling}
                            />
                        </div>
                    </div>
                </div>    
            </div>           
        )
    }
}


export default Sell;