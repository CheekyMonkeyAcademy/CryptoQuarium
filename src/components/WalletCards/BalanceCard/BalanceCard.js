import React, {Component} from "react";


//This is a stateful component because the balance will always be updating

class BalanceCard extends Component {
    // state = {
    //     currentBalance: 0       
    // };

    render(){
        return (
            <div className="row">
                <div className="col s8 push-s2">
                    <div className="card #757575 grey darken-1">
                        <div className="card-content white-text">
                            <h1 className="card-title">Account Balance</h1>
                            <hr/>
                            <h4>${this.props.currentBalance}  </h4>
                        </div>                
                    </div>
                </div>
            </div>
        );
    }
}

export default BalanceCard;

// {this.state.currentBalance}