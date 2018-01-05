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
            console.log(`What have I spent my crypto money on?`)
            console.log(statementHistory.data)
            console.log(statementHistory.data[0].walletBalanceChangeReason)
            const myHistory = statementHistory.data[0].walletBalanceChangeReason
            this.setState({statementHistory: myHistory})
            console.log("STATE!!!")
            console.log(this.state.statementHistory)            
        })
        .catch((err)=> {
            console.log(`Error: No statement history for you!`)
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                My CryptoAquarium Wallet
                <BalanceCard 
                    currentBalance={this.props.currentBalance}/>
                <StatementCard 
                    myStatementHistory = {this.state.statementHistory}
                />


            </div>
        )
    }
}

export default Wallet;