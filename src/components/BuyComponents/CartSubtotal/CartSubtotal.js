import React, {Component} from "react";

class CartSubtotal extends Component {

    render() {
        return (

            <div>

                <div className="row">
                    <div className="col s12">
                        <div className="card red lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Subtotal</span>
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