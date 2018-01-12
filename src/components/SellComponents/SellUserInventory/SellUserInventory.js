import React, {Component} from "react";
import axios from 'axios';
import SellCards from '../SellCards'

class SellUserInventory extends Component {
    
    //FUNCTION THAT CALLS ALL THIS USERS FISH FROM THE DATABASE
    componentDidMount(){
        {this.props.getAllUserFish()}    
    }

    render(){
        return(
            <div>

                {this.props.myFishArray.map(fish => {
                    return <SellCards {...fish}
                        thisItemToMarket = {this.props.thisItemToMarket}
                        handlePriceChange = {this.props.handlePriceChange}
                        value = {this.props.value}
                        key = {fish.id}
                    />
                }, this)}        
                
            </div>
        )
    }
}

export default SellUserInventory;