import React from "react"

const SellMarketCards = props => (
    <div>        
        <div className="row">
            <div className="col s12">

                <div className="card white">                    
                    <div className="card-action black-text">
                        <p>Item Id: {props.id}</p>
                        <p>Species: {props.species}</p>

                        <p>$ {props.price}</p> 
                        <i className="material-icons">cancel</i>                       
                    </div>
                </div>
            </div>
        </div>    
    </div>
);

export default SellMarketCards; 

{/* <span className="card-title">Item Name</span> 
<div className="card-content black-text">                                                                          
                    </div> */}