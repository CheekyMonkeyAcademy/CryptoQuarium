import React, {Component} from "react";
// import axios from 'axios';
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
                        key = {fish.id}
                        inputColors= {this.props.inputColors}
                        stopSellingThisFish = {this.props.stopSellingThisFish}
                        // closeModal={this.props.closeModal}
                        // isModalOpen= {this.props.isModalOpen}
                    />
                }, this)}        
                
            </div>
        )
    }
}




export default SellUserInventory;