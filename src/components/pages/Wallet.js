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
            // console.log(statementHistory.data[0].walletBalanceChangeReason)
            // const myHistory = statementHistory.data[0]
            const myHistory = statementHistory.data
            this.setState({statementHistory: myHistory}, () => {
                console.log("this is my history")
                console.log(myHistory)
                console.log("this is statment HISTORY!!!!")
                console.log(this.state.statementHistory)
            })                    
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

                    {this.state.statementHistory.map(statement => {
                        console.log(this.state.statementHistory)
                        return <StatementCard {...statement} 
                            
                        />
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Wallet;
{/* <StatementCard myStatementHistory = {this.state.statementHistory} /> */}

// {this.state.statementHistory.map(statement => {
//     console.log(this.statementHistory)
//     return <StatementCard {...statement}
    
//         myStatementHistory = {this.state.statementHistory}
//     />
// })}

// ×
// Objects are not valid as a React child (found: object with keys {id, walletBalanceChangeReason, walletBalanceChange, lastWalletBalance, createdAt, updatedAt, UserId}). If you meant to render a collection of children, use an array instead.