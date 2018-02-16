import React, { Component } from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellUserCart from "../SellComponents/SellUserCart/SellUserCart";
import axios from 'axios';
import "../BuyComponents/InventoryCards/InventoryCards.css";
import { open } from "fs";

class Sell extends Component {

    state = {
        itemsToBeSold: [], 
        myFishArray: [],    
        modalIsOpen: false                                        
    }

    handlePriceChange = (event, id) => { 
        console.log("*****LOOK HERE******")    
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
        console.log("Am I clicking my sell tag?")     

        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 
        this.state.myFishArray[fishIndex].priceAlert = " ";

       
        if (this.state.myFishArray[fishIndex].price < 0.01){             
                this.openModal();       
                                               
        } else if (this.state.myFishArray[fishIndex].price >= 0.01){           
            this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]]
                )}, (state) => {
                    this.state.myFishArray[fishIndex].priceAlert = " "
                })
            document.getElementById("card"+id).style.display = "none"; 
        }    
    }

    
    getParent = (id) => {
        return document.querySelector(".container");
        console.log(id)
    }

    openModal = () => {     
                     
        this.setState({modalIsOpen:true}, () => {
            console.log("open modal")
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
                                closeModal = {this.closeModal}
                                modalIsOpen = {this.state.modalIsOpen}        
                                getParent = {this.getParent}
                                
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