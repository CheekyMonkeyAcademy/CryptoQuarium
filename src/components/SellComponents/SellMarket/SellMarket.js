import React, {Component} from "react";

class SellMarket extends Component {
    
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col s12">
                    <div className="card teal lighten-2">
                        <div className="card-content white-text">
                            <span className="card-title">Items to be sold to the Market</span>

                                
                       
                            <a className="waves-effect waves-light btn black" onClick = {() => this.props.sellToMarket}><i className="material-icons left">done</i>checkout</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SellMarket;

