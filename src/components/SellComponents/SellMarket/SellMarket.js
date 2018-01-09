import React, {Component} from "react";
import SellMarketCards from '../SellMarketCards/SellMarketCards'

//When a user clicks sell to market, it gets added to the buyInventory page
    //That means I need access to the buyFishArray state living in the appcontainer
    //The buyFish array can be passed to this component as a prop and be updated from here!!!

//Also include total to be sold!

//Loop over array that will be passed from from the sell page
    //Whenever a user clicks on the tag to add an item to the sell to market, it pushes
    //it to an array that will be passed down to this component

class SellMarket extends Component {

    render() {
        return (

            <div>
                <div className="row">
                    <div className="col s12">
                    <div className="card teal lighten-2">
                        <div className="card-content white-text">
                            <span className="card-title">Items to be sold to the Market</span>            


                       
                            <a className="waves-effect waves-light btn black" onClick = {() => this.props.sellToMarket}><i className="material-icons left">attach_money</i>Sell to Market</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SellMarket;

