import React from "react";
import "./InventoryCards.css"

//Props will possibly need to be added here

const InventoryCards = () =>
    <div> 
        <div class="row">
            <div class="col s2">
                <div className="card">
                    <div className="card-image">
                        <img className="subCrabImage" src="http://via.placeholder.com/140x100" />
                        <span className="item"></span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add_shopping_cart</i></a>
                    </div>
                    <div class="itemDescription">
                        <p>Red Fish</p>
                    </div>
                </div>  
            </div>
        </div>    
    </div> 

    export default InventoryCards;