import React, {Component} from "react"
import SellUserInventory from "../SellComponents/SellUserInventory/SellUserInventory";
import SellUserCart from "../SellComponents/SellUserCart/SellUserCart";
import axios from 'axios';


class Sell extends Component {

    state = {
        itemsToBeSold: [], 
        myFishArray: []
    }

    thisItemToMarket = (id) => {        
        console.log("Am I clicking my sell tag?")      
        //0 on out side is referencing the filter
        let fishIndex =  this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id)[0])
    
        this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]])
        }, (state) => {
            console.log(this.state.itemsToBeSold)
        })      
    }



    //FUNCTION TO GET ALL USERS FISH
    getAllUserFish = () => {
        axios.get('/api/allUserFish') 
        .then((allUserFish) => {
        allUserFish.data.forEach((fish) => {
                this.setState({myFishArray: this.state.myFishArray.concat([fish])})
            })
            console.log("THIS IS MY FISH ARRAY!")
            console.log(this.state.myFishArray)
        })
        .catch((err)=> {
            console.log(err)
        })
    }    

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col s8">
                        <h5>Sell Your Fish Stock</h5>
                    </div>           
                </div>
                
                <div className="row">
                    <div className="col s8">
                        <SellUserInventory 
                            thisItemToMarket = {this.thisItemToMarket}
                            getAllUserFish = {this.getAllUserFish}
                            myFishArray = {this.state.myFishArray}
                        />                
                    </div>

                    <div className="col s4">
                        <SellUserCart  />
                    </div>
                </div>
            </div>
        )
    }
}


export default Sell;