import React, {Component} from "react";
import "./InventoryCards.css"
import Fish from '../../AllFish/Fish';
import PufferFish from '../../AllFish/PufferFish';

class InventoryCards extends Component {
    renderFish = () => {
        switch (this.props.codeSpecies) {
        case 'Fish': 
            return <Fish 
                {...this.props}
                key={this.props.id}
            />
        case 'PufferFish':
            return <PufferFish {...this.props} key={this.props.id}/>
        
        default:
            console.log(`unable to find target fish`);
        }
    }

render (){
    return (
    <div className="container"> 
        <div className="row">
            <div className="col s3">
                <div className="card card-action cyan lighten-5"  id={"card"+this.props.id}>
                    <div className="card-image"> 
                        {this.renderFish()}
                        <a className="btn-floating halfway-fab waves-effect waves-light green" id={this.props.id} onClick={() => this.props.onClick(this.props.id)}><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>{this.props.species}</p>
                        <p>Fish Id:{this.props.id}</p>
                        <p>Price: ${this.props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
)
}
}
    
export default InventoryCards;

