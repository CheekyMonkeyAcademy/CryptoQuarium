import React, {Component} from "react";


//This is a stateful component because the balance will always be updating

class BalanceCard extends Component {
    state = {
        currentBalance: 0
    };

    render(){
        return (
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Account Balance</span>
                            <p> {this.state.currentBalance} </p>
                        </div>                
                    </div>
                </div>
            </div>
        );
    }
}

export default BalanceCard;