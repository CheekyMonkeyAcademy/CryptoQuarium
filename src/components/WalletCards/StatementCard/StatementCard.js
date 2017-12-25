import React, {Component} from "react";


//This is a stateful component because I just think so for right now

//When someone clicks view recent statements link
    //A scrollable box appears with all recent account activity

class StatementCard extends Component {
    state = {
        lastTransactionOne: "- 5.00 purchased blowfish",
        lastTransactionTwo: "+ 60.00 sold fishfood",
        lastTransactionThree: "- 19.00 purchased goldfish"
    }
    render(){
        return (
            <div class="row">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Recent Wallet Statements</span>
                        <p>{this.state.lastTransactionOne}</p>
                        <p>{this.state.lastTransactionTwo}</p>
                        <p>{this.state.lastTransactionThree}</p>
                    </div>
                    <div class="card-action">
                        <a>View Wallet Activity</a>                        
                    </div>
                </div>
                </div>
            </div>               
        );
    }
}

export default StatementCard;