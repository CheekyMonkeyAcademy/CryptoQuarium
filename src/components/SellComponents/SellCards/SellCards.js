import React, {Component} from "react";
import Fish from '../../AllFish/Fish';
import PufferFish from '../../AllFish/PufferFish';
import "./SellCards.css";

// https://reactjs.org/docs/conditional-rendering.html
class SellCards extends Component {
    state = {
        noMove: true
    }    

    renderFish = () => {
        switch (this.props.codeSpecies) {
        case 'Fish': 
            return <Fish 
                    {...this.props}
                    noMove = {this.state.noMove}     
                    key={this.props.id}
                />
            
        case 'PufferFish':
            return <PufferFish 
                    {...this.props} 
                    noMove = {this.state.noMove}     
                    key={this.props.id}
                />
        default:
            console.log(`unable to find target fish`);
        }
    }

    render(){
        return(
            <div className="container"> 
                <div className="col m12 l6 fishBoxHeight"> 
                    <div className="card card-action cyan lighten-5"  id={"card"+this.props.id}>
                        <div className="card-image"> 
                            <div className="fishHeight">
                                {this.renderFish()}
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12">{this.props.species}</div>
                            </div>
                            <div>

                            </div>
                            <input className = {this.props.priceValid} 
                                placeholder="Enter Price" 
                                onChange={(event) => this.props.handlePriceChange(event, this.props.id)} 
                                id={"input" + this.props.id} 
                                value={this.props.price ? this.props.price : ''}
                            />
                            {this.props.forSale ? 
                                <div className="center" id={"onSale" + this.props.id}><button waves='light' className="btn red" onClick={() => this.props.stopSellingThisFish(this.props.id)}>Stop Selling?</button></div>
                            :   <a onClick={() => this.props.thisItemToMarket(this.props.id)}>
                                    <i className="material-icons">local_offer</i>                        
                                </a>
                            }
                            <h6>{this.props.priceAlert}</h6>                    
                        </div>                       
                    </div>
                </div>          
            </div>
        )
    }
}


export default SellCards;
