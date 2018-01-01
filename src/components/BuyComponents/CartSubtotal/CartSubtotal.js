import React, {Component} from "react";

class CartSubtotal extends Component {

    render() {
        return (

            <div>

                <div class="row">
                    <div class="col s12">
                        <div class="card red lighten-2">
                            <div class="card-content white-text">
                                <span class="card-title">Subtotal</span>
                                    <p>${this.props.subTotal}</p>
                            </div>                        
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CartSubtotal;