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
        // isModalOpen: false                                        
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

    initialFalseModalState = (id) => {
        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 

        let marketFishArray = Array.from(this.state.myFishArray)
        marketFishArray[fishIndex].isModalOpen = false;

        this.setState({
            myFishArray: marketFishArray
        }, () => {
            console.log("Establishing initial false modal state")
            console.log(this.state.myFishArray)
        })
    }
   
    thisItemToMarket = (id) => {       

        let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 
        this.state.myFishArray[fishIndex].priceAlert = " ";

        // let marketFishArray = Array.from(this.state.myFishArray);
        // marketFishArray[fishIndex].isModalOpen = false;
         
        if (this.state.myFishArray[fishIndex].price < 0.01){          
            // marketFishArray[fishIndex].isModalOpen = true;
                        
        } else if (this.state.myFishArray[fishIndex].price >= 0.01){
            // marketFishArray[fishIndex].isModalOpen = false;
            this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]]
                )}, (state) => {
                    this.state.myFishArray[fishIndex].priceAlert = " "
                })
            document.getElementById("card"+id).style.display = "none"; 
        }    
    }

    openModal = (id) => {  
        
        // this.setState({isModalOpen: true})          
        console.log("I'm opening!")
    }

    closeModal = (id) => {
        // let fishIndex =  this.state.myFishArray.findIndex(fish => fish.id === id) 
        // this.setState({isModalOpen: false})    
        // // this.state.myFishArray[fishIndex].isModalOpen = false   
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
                                // closeModal = {this.closeModal}
                                // isModalOpen = {this.state.isModalOpen}        
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