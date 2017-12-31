import React, {Component} from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css"
import axios from 'axios';

   
class Buy extends Component {
    state = {
        cartArray : [], 
        buyFishArray : []
        
    }
    
    // clickItem = (id, clickItem) => {    
    //     console.log(`You clicked ${id}`);
    //     // this.setState({cartArray: this.state.cartArray.concat([id])}, () => {
    //     //     console.log(this.state.cartArray)  
    //     //     }
    //     // );                  
    // } 

    clickItem = (id) => {
        console.log("You got here")
        console.log(id)
    }

    updateBuyFishArrayState = () => {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {
            console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({buyFishArray: this.state.buyFishArray.concat([fish])})
                })
                console.log("This is fish array")
                console.log(this.props.buyFishArray)
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
                        <h5>Buy Fish and Accoutrement</h5>
                    </div>           
                </div>
                
                <div className="row">
                    <div className="col s8">
                        <BuyInventory 
                            addToCart={this.clickItem} 
                            buyFishArray={this.state.buyFishArray}
                            updateBuyFishArrayState={this.updateBuyFishArrayState}
                            />                
                    </div>

                    <div className="col s4">
                        <BuyCart />
                    </div>
                </div>
            </div>
        )
    }
}

export default Buy;