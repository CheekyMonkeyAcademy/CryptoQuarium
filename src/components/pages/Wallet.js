import React, { Component } from "react";
import BalanceCard from "../WalletCards/BalanceCard/BalanceCard";
import StatementCard from "../WalletCards/StatementCard/StatementCard";
import axios from 'axios';



//This is also set up to be a stateful component, but this can change as well
//Wallet will always be updated!

class Wallet extends Component {

    componentDidMount() {
        axios.get('/api/getUserAuthenticated')
        .then((userCredentials) => {
            console.log(`So... we theoretically have user creds?`);
            console.log(userCredentials.data);
        })
        .catch((err)=> {
            console.log(`user auth vomited - so - it didn't get you credentials`)
            console.log(err)
        })
    }

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