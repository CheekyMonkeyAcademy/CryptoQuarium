import React from "react"

const CartItems = props => (
    <div>
        <div class="row">
            <div class="col s12">
                <div class="card white">
                    <div class="card-content black-text">
                        <span class="card-title">Item Name</span>
                            <p>Item Description: Lorem ipsum yada yada nada nada</p>
                    </div>
                    <div class="card-action black-text">
                        <p>$ {props.price}</p>
                        <div>
                            <div class="input-field inline black-text">
                                <input id="email" type="email" class="validate" placeholder="Quantity" />
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

