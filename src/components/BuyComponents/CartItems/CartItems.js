import React from "react"

const CartItems = props => (
    <div>
        
        <div className="row">
            <div className="col s12">
                <div className="card #757575 grey darken-1">
                    <div className="card-content black-text">
                        <p>Show the fish here</p>                   
                    </div>
                    <div className="card-action black-text">
                        <p>Species: {props.species}</p>
                        <p>Cost: ${props.price}</p>                        
                    </div>
                </div>
            </div>
        </div>    
    </div>
);

export default CartItems; 