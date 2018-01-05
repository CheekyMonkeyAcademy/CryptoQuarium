import React, {Component} from "react";
import CartItems from "../CartItems/CartItems"
import CartSubtotal from "../CartSubtotal/CartSubtotal"


class BuyCart extends Component {

      
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col s12">
                    <div className="card teal lighten-2">
                        <div className="card-content white-text">
                            <span className="card-title">Shopping Cart</span>

                                {this.props.shoppingCart.map(items =>{
                                    return <CartItems {...items}
                                    key = {items.id}                                        
                                    />
                                }, this)}
                                
                        </div>
                        <div className="card-action card-content white-text">                           
                           <CartSubtotal subTotal={this.props.subTotal}/>
                            <a className="waves-effect waves-light btn black" onClick = {() => this.props.checkoutChangeBalance()}><i className="material-icons left">done</i>checkout</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyCart;
// () => props.onClick(props.id)
// () => this.props.checkoutBalanceToUpdate
//() => this.closeModal()