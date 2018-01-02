import React, {Component} from "react";
import SellInventory from "../SellComponents/SellInventory/SellInventory"
import axios from 'axios';


class Sell extends Component {
    state = {
        userFishToSell: []
    }

    grabUserFishInventory = () => {
        axios.get('/api/allUserFish/')
        .then((allfish) => {
            console.log(allfish);
            allfish.data.forEach((fish) => {
                this.state({userFishToSell: this.state.userFishToSell.concat([fish])})
            })
            console.log("This is userFishToSell array")
            console.log(this.state.userFishToSell)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col s8">
                        <SellInventory 
                            userFishToSell= {this.state.userFishToSell}
                            grabUserFishInventory={this.grabUserFishInventory}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col s8">
                        
                    </div>

                    <div className="col s4">
                        User sell stock here
                    </div>
                </div>

            </div>
        )
    }
}

export default Sell;