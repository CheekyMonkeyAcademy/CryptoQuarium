import React, {Component} from "react";
import CartItems from "../CartItems/CartItems"



class BuyCart extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                    <div className="card teal lighten-2">
                        <div className="card-content white-text">
                            <span className="card-title">Shopping Cart</span>
                                <CartItems />
                        </div>
                        <div className="card-action">
                            <a className="waves-effect waves-light btn black"><i className="material-icons left">done</i>checkout</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyCart;
