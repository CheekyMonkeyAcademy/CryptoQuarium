import React, { Component } from "react";
import BalanceCard from "../WalletCards/BalanceCard/BalanceCard";
import StatementCard from "../WalletCards/StatementCard/StatementCard";
import axios from 'axios';



//MOVED THE STATE OF CURRENTBALANCE AND THISUSERCRED TO APPCONTAINER

class Wallet extends Component {
    state={
        statementHistory: []
    }

    componentDidMount(){
        axios.get('/api/viewWalletHistory')
        .then((statementHistory)=> {
            const myHistory = statementHistory.data
            this.setState({statementHistory: myHistory}, () => {})                    
        })
        .catch((err)=> {
            console.log(`Error: No statement history for you!`)
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <br/>
                 <div className="container">
                    <h3 className="logo center #757575 grey darken-1 z-depth-5">My CryptoAquarium Wallet</h3>
                </div>
                <br/>
                <div className="container">
                    <BalanceCard currentBalance={this.props.currentBalance}/>
                    <h3 className="logo center #757575 grey darken-1 z-depth-5">Recent Wallet Statements</h3>
                    {this.state.statementHistory.map(statement => {
                        return <StatementCard {...statement} key={statement.id}/>
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Wallet;