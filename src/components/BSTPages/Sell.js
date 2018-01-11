import React, { Component } from "react"
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

        let fishIndex = this.state.myFishArray.findIndex(fish => this.state.myFishArray.filter(fish => fish.id === id[0]))
        // this.state.cartArray.concat([this.state.buyFishArray[fishIndex]])
        // this.setState({itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray[fishIndex]])
        this.setState({
            itemsToBeSold: this.state.itemsToBeSold.concat([this.state.myFishArray])
        },
            // console.log(this.state.myFishArray)
            console.log(this.state.itemsToBeSold)
        )
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
                        <h5 className="col s6 push-s4 bold_text">SELL YOUR QUIPTO-FISH</h5>
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
                            />
                        </div>

                        <div className="col s4">
                            <SellUserCart />
                        </div>
                    </div>
                </div>
            </div>               

        )
    }
}


export default Sell;