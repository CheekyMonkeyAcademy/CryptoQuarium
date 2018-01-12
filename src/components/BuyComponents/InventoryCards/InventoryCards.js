import React from "react";
import "./InventoryCards.css"
import PlaceHolderimg from '../../../Images/fish/fish1.png';


const InventoryCards = props => (
    <div> 
        <div className="row">
            <div className="col s3">
                <div className="card #757575 grey darken-1">
                    <div className="card-image">      
                        <img alt="" src={PlaceHolderimg} style={{ width: 270, marginTop: 15 }} />                  
                        <a className="btn-floating halfway-fab waves-effect waves-light red" id={props.id} onClick={() => props.onClick(props.id)}><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>{props.species}</p>
                        <p>Fish id:{props.id}</p>
                        <p>Price: ${props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>    
);
    

export default InventoryCards;

