import React from "react"

const CartItems = props => (
    <div>
        <div className="row">
            <div className="col s12">
                <div className="card white">
                    <div className="card-content black-text">
                        <span className="card-title">Item Name</span>
                            <p>Item Description: Lorem ipsum yada yada nada nada</p>
                    </div>
                    <div className="card-action black-text">
                        <p>$ {props.price}</p>
                        <div>
                            <div className="input-field inline black-text">
                                <input id="email" type="email" className="validate" placeholder="Quantity" />
                                <label for="email" data-error="wrong" data-success="right"></label>

                                
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>    
    </div>

        
    

);

export default CartItems; 

