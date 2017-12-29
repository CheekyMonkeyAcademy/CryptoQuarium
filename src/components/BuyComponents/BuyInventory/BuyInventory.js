import React, {Component} from "react";
import "./BuyInventory.css"
import InventoryCards from "../InventoryCards"
import axios from 'axios';
//Add in State, as it will change on buying habits of the user


class BuyInventory extends Component {
    state = {
        fishArray:[]
    }

    
    componentDidMount() {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {
          console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({fishArray: this.state.fishArray.concat([fish])});                   
                })      
            console.log("This is fish array")  
            console.log(this.state.fishArray)              
        })
        .catch((err) => {
          console.log(err);
        })    
    }     

    render(){
        return(

            <div className="inventoryBorder">
                
                {this.state.fishArray.map(fish => {
                    return <InventoryCards {...fish}
                    key={fish.id} />
                })}
            
            </div>
        )
    }

}

export default BuyInventory;

    