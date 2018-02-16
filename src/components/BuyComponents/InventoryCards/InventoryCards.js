import React, {Component} from "react";
import "./InventoryCards.css"
import Fish from '../../AllFish/Fish';
import PufferFish from '../../AllFish/PufferFish';

class InventoryCards extends Component {
    state = {
        noMove: true
    }
    renderFish = () => {
        switch (this.props.codeSpecies) {
        case 'Fish': 
            return <div className="thisFish">
                <Fish 
                    {...this.props}
                    noMove = {this.state.noMove}
                    key={this.props.id}
                />
            </div>
        case 'PufferFish':
            return <div className="thisPufferFish">
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

render (){
    return (
    <div className="container"> 
        <div className="row">
            <div className="col s5"> {/* TODO Should be S6 */}
                <div className="card card-action cyan lighten-5"  id={"card"+this.props.id}>
                    <div className="card-image"> 
                        {this.renderFish()}
                        <a className="btn-floating halfway-fab waves-effect waves-light green" id={this.props.id} onClick={() => this.props.onClick(this.props.id)}><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>{this.props.species}</p>
                        {/* <p>Fish Id:{this.props.id}</p> */}
                        <p>Price: ${this.props.price}</p>
                        {this.props.quantityAvailable ? <p>Quantity Remaining: {this.props.quantityAvailable}</p> : ''}
                    </div>
                </div>
            </div>
        </div>
    </div>    
)
}
}
    
export default InventoryCards;

