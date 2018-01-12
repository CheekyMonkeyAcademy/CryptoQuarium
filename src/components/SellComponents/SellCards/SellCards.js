import React from "react";
//Cards in this component will basically look the same,
    //So I will reuse the same CSS because I don't want to do more CSS than I have to
import "../../BuyComponents/InventoryCards/InventoryCards.css";
import PlaceHolderimg from '../../../Images/fish/fish1.png';

// local_offer

    
const SellCards = props => (
    
    <div>
        <div className="row">
            <div className="col s3">
                <div className="card #757575 grey darken-1">
                    <div className="card-image">
                    <img alt="" src={PlaceHolderimg} style={{ width: 270, marginTop: 15 }} />                         
                        <a className="btn-floating halfway-fab waves-effect waves-light red" id={props.id} onClick={() => props.thisItemToMarket(props.id)}><i className="material-icons">local_offer</i></a>
                    </div>
                    <div className="card-content">
                        <p>{props.species}</p>
                        <p>id:{props.id}</p>
                        <p>${props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>    
);
    
export default SellCards;



