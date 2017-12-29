import React, {Component} from "react";
import CartItems from "../CartItems/CartItems"



class BuyCart extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col s12">
                    <div class="card teal lighten-2">
                        <div class="card-content white-text">
                            <span class="card-title">Shopping Cart</span>
                                <CartItems />
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn black"><i class="material-icons left">done</i>checkout</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyCart;