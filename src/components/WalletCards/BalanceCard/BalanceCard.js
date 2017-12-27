import React, {Component} from "react";


//This is a stateful component because the balance will always be updating

class BalanceCard extends Component {
    state = {
        currentBalance: 0
    };

    render(){
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Account Balance</span>
                            <p> {this.state.currentBalance} </p>
                        </div>                
                    </div>
                </div>
            </div>
        );
    }
}

export default BalanceCard;