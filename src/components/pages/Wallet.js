import React, { Component } from "react";
import BalanceCard from "../WalletCards/BalanceCard/BalanceCard";
import StatementCard from "../WalletCards/StatementCard/StatementCard";
// import axios from 'axios';

class Wallet extends Component {
    state = {
        currentWalletBalance:10
    }

    // updateWalletFunds = () => {

    // }


    render() {
        return (
            <div>
                My CryptoAquarium Wallet
                <BalanceCard />
                <StatementCard />
            </div>
        )
    }
}

export default Wallet;