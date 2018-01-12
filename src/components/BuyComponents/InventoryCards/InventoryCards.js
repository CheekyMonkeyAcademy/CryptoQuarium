import React from "react";
import "./InventoryCards.css"
import PlaceHolderimg from '../../../Images/fish/fish1.png';


const InventoryCards = props => (
    <div className="container"> 
        <div className="row">
            <div className="col s3">
                <div className="card card-action cyan lighten-5"  id={"card"+props.id}>
                    <div className="card-image">      
                        <img alt="" src={PlaceHolderimg} style={{ width: 150, marginTop: 120 }} />                  
                        <a className="btn-floating halfway-fab waves-effect waves-light green" id={props.id} onClick={() => props.onClick(props.id)}><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>{props.species}</p>
                        <p>Fish Id:{props.id}</p>
                        <p>Price: ${props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
);
    
export default InventoryCards;

