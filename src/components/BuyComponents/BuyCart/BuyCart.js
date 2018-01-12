import React, { Component } from "react";
import CartItems from "../CartItems/CartItems";
import CartSubtotal from "../CartSubtotal/CartSubtotal";
import "./BuyCart.css";
import { Card, CardTitle } from 'react-materialize'


class BuyCart extends Component {

    render() {
        return (
            <div className="row">

                <Card className='big #757575 grey darken-1'
                    header={<CardTitle>Shopping Cart</CardTitle>}>
                    Your fish tank is looking empty, buy some crypto-fish.

                    <CartSubtotal subTotal={this.props.subTotal} />
                    {this.props.shoppingCart.map(items => {
                        return <CartItems {...items}
                            key={items.id}
                        />
                    }, this)}

                    <div className="card-action card-content white-text">
                        <a className="waves-effect waves-light btn green pulse" onClick={() => this.props.checkoutChangeBalance()}><i
                            className="material-icons left">done</i>checkout</a>
                    </div>
                </Card>
            </div>
        )
    }
}

export default BuyCart;
