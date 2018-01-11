import React, { Component } from "react";
import "./CartSubtotal.css";

class CartSubtotal extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card #212121 grey darken-4">
                        <div className="card-content white-text">
                            <span className="card-title">Subtotal</span>
                            <p>${this.props.subTotal}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartSubtotal;