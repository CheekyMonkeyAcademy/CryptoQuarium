import React, {Component} from "react";
import axios from 'axios';
import SellCards from '../SellCards'

class SellUserInventory extends Component {
    state={
        myFishArray: []
    }

//  You can run:  app.post('/api/userPurchaseFish/:id'
// ID being that of target fish
// (usually 1 or 2)

    //FUNCTION THAT CALLS ALL THIS USERS FISH FROM THE DATABASE
    componentDidMount(){
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
        return(
            <div>
                
                {this.state.myFishArray.map(fish =>{
                    return <SellCards {...fish}
                        key = {fish.id}
                    />
                })}        
               
            </div>
        )
    }
}

export default SellUserInventory;