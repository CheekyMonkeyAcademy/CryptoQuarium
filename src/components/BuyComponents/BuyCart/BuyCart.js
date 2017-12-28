import React, {Component} from "react";

//State because the cart will always be updating

class BuyCart extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col s12">
                    <div class="card teal lighten-2">
                        <div class="card-content white-text">
                            <span class="card-title">Shopping Cart</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
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