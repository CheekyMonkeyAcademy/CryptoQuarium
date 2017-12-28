import React, {Component} from "react";
import "./BuyInventory.css"
import InventoryCards from "../InventoryCards"
import axios from 'axios';
//Add in State, as it will change on buying habits of the user


class BuyInventory extends Component {
    state = {
        fishArray:[]
    }
    // .concat([newObject])});
    componentDidMount() {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {
          console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({fishArray: this.state.fishArray.concat([fish])});
                    // this.setState({fishArray: this.state.fishArray.concat([newObject])});
            })        
            console.log(this.state.fishArray)              
        })
        .catch((err) => {
          console.log(err);
        })    
      }

     

    render(){
        return(

            <div className="inventoryBorder">
                <InventoryCards />
            </div>
        )
    }

}

export default BuyInventory;