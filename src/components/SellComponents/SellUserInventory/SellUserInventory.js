import React, {Component} from "react";
import axios from 'axios';


class SellUserInventory extends Component {
    state={
        myFishArray: []
    }

    componentDidMount(){
         axios.get('/api/allUserFish') 
         .then((allUserFish) => {
            allUserFish.data.forEach((fish) => {
                 this.setState({myFishArray: this.state.myFishArray.concat([fish])})
             })
             console.log(this.state.myFishArray)
         })
         .catch((err)=> {
             console.log(err)
         })
    }

    render(){
        return(
            <div>
                SellUserInventory Side
                
               
            </div>
        )
    }
}

export default SellUserInventory;