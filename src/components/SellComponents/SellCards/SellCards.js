import React, {Component} from "react";
import "../../BuyComponents/InventoryCards/InventoryCards.css";
import Fish from '../../AllFish/Fish';
import PufferFish from '../../AllFish/PufferFish';
import "./SellCards.css";
// import PriceValAlert from '../PriceValAlert'

// https://reactjs.org/docs/conditional-rendering.html
class SellCards extends Component {
    state = {
        noMove: true
    }
    renderFish = () => {
        switch (this.props.codeSpecies) {
        case 'Fish': 
            return <div className="frame thisFish">
                <Fish 
                    {...this.props}
                    noMove = {this.state.noMove}     
                    key={this.props.id}
                />
            </div>
        case 'PufferFish':
            return <div className="frame thisPufferFish">
                <PufferFish 
                    {...this.props} 
                    noMove = {this.state.noMove}     
                    key={this.props.id}
                />
            </div>
        default:
            console.log(`unable to find target fish`);
        }
    }

    render(){
        return(
    <div className="container">
        <div className="col s5 card-action sell-card card cyan lighten-5" id={"card" + this.props.id}>
            <div className="row">
                <div className="card-image">
                    {this.renderFish()}
                </div>
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">{this.props.species}</div>
                    </div>
                    <div className="row">
                        <div className="col s12">Fish Id:{this.props.id}</div>
                    </div>                   
                       <input onChange={(event) => this.props.handlePriceChange(event)} id={this.props.id}/>
                       <a onClick={() => this.props.thisItemToMarket(this.props.id)}><i className="material-icons">local_offer</i></a>
                       {/* <PriceValAlert /> */}
                       

                </div>
            </div>
        </div>
    </div>
        )
    }
}


export default SellCards;

//First attempt at cond't rendering
{/* <h6 id={this.props.id}>{this.props.sellAlert}</h6> */}