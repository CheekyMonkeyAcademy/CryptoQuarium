import React, { Component } from "react";
import BalanceCard from "../WalletCards/BalanceCard/BalanceCard";
import StatementCard from "../WalletCards/StatementCard/StatementCard";



//This is also set up to be a stateful component, but this can change as well
//Wallet will always be updated!

class Wallet extends Component {
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