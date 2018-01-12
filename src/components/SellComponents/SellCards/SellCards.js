import React from "react";
//Cards in this component will basically look the same,
    //So I will reuse the same CSS because I don't want to do more CSS than I have to

import "../../BuyComponents/InventoryCards/InventoryCards.css";
import PlaceHolderimg from '../../../Images/fish/fish1.png';


// local_offer
//Add an input field with default value of props.price

const SellCards = props => (
    
    <div> 
        
        <div className="row">

            <div className="col s12 m6">
                <div className="card cyan lighten-5">                    
                    <div className="card-action">
                        
                        
                        <div className="row">
                            <div className="col s12">

                                <div className="row">
                                    <div className="col s12">
                                        {props.species}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s12">
                                        {props.id}
                                    </div>
                                </div>

                                <form className="row">
                                    <div className="input-field col s4">
                                        <input  onChange={() => props.handlePriceChange()} placeholder={props.price} type="number" min= "0" max="9999999" className="validate" />                                        
                                    </div>

                                    <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => props.thisItemToMarket(props.id)}>
                                        <i className="material-icons">local_offer</i>
                                    </a>

                               
                                </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>  
</div>  
);
    
export default SellCards;

// <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => props.thisItemToMarket(props.id)}>
// <i className="material-icons">local_offer</i>
// </a>