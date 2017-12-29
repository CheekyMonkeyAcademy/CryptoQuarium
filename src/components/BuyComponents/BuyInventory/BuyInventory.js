import React, {Component} from "react";
import "./BuyInventory.css"
import InventoryCards from "../InventoryCards"
import axios from 'axios';
//Add in State, as it will change on buying habits of the user


class BuyInventory extends Component {
    state = {
        fishArray:[], 
        cartArray: []
    }

    //Function handling 'add item to cart' button on inventory card
        //The prop being passed in in this case is the id
    clickItem = (id, clickItem) => {
        //Am I grabbing the correct id when I click? --YES!!!!!!
        console.log(`You clicked ${id}`);
        this.setState({cartArray: this.state.cartArray.concat([id])}, () => {
            console.log(this.state.cartArray)  
            }
        );                  
    }
    

    
    

    //On this route, take fish from database and push them into the fishArray 
        //defined in the state above
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
                    clickItem = {this.clickItem}
                    key={fish.id} />
                })}
            
            </div>
        )
    }

}

export default BuyInventory;

    