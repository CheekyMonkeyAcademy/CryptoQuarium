import React from "react"

const SellMarketCards = props => (
    <div>
        
        <div className="row">
            <div className="col s12">
                <div className="card white">
                    <div className="card-content black-text">
                        <span className="card-title">Item Name</span>
                            <p>Item Description: Lorem ipsum yada yada nada nada</p>
                    </div>
                    <div className="card-action black-text">
                        <p>Item Id: {props.id}</p>
                        <p>Species: {props.species}</p>
                        <p>Price $ {props.price}</p>                        
                    </div>
                </div>
            </div>
        </div>    
    </div>
    

);

export default SellMarketCards; 
