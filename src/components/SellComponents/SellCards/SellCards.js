import React, {Component} from "react";
import "../../BuyComponents/InventoryCards/InventoryCards.css";
import Fish from '../../AllFish/Fish';
import PufferFish from '../../AllFish/PufferFish';


class SellCards extends Component {
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

    render(){
        return(
    <div className="container">
        <div className="col s2 card-action sell-card card cyan lighten-5" id={"card" + this.props.id}>
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
                   
                </div>
            </div>
        </div>
    </div>


        )
    }
}

export default SellCards;
{/* <div className="input-field col s4">
<input onChange={() => this.props.handlePriceChange()} placeholder={this.props.price} type="number" min="0" max="9999999" className="validate" />
</div>
<a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.props.thisItemToMarket(this.props.id)}>
<i className="material-icons">local_offer</i>
</a> */}


                                {/* <div className="row">
                                    <input type="number" value={props.newPrice} id={"key" + props.id}  onChange={props.handlePriceChange}
                                     />
                                </div> */}

// -------------------------THIS WAS USED PRIOR TO ADDING CSS---------------------------

//     <div>
//         <div className="row">
//             <div className="col s12 m6">
//                 <div className="card cyan lighten-5">
//                     <div className="card-action">
//                         <div className="row">
//                             <div className="col s12">
//                                 <div className="row">
//                                     <div className="col s12">
//                                         {props.species}
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col s12">
//                                         {props.id}
//                                     </div>
//                                 </div>
//                                 <form className="row">
//                                     <div className="input-field col s4">
//                                         <input onChange={() => props.handlePriceChange()} placeholder={props.price} type="number" min="0" max="9999999" className="validate" />
//                                     </div>
//                                     <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => props.thisItemToMarket(props.id)}>
//                                         <i className="material-icons">local_offer</i>
//                                     </a>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// export default SellCards;

// <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => props.thisItemToMarket(props.id)}>
// <i className="material-icons">local_offer</i>
// </a>

// -------------------------^^^THIS WAS USED PRIOR TO ADDING CSS^^^---------------------------

