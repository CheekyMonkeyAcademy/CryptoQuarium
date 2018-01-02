import React, { Component } from "react";
import BalanceCard from "../WalletCards/BalanceCard/BalanceCard";
import StatementCard from "../WalletCards/StatementCard/StatementCard";
import axios from 'axios';



//This is also set up to be a stateful component, but this can change as well
//Wallet will always be updated!

class Wallet extends Component {

    componentDidMount() {
        fetch('/api/userCredentials')
        .then((userCredentials) => {
            console.log(`So... we theoretically have user creds?`);
            console.log(userCredentials);
        })
        .catch((err)=> {
            console.log(`this thing vomited - so - it didn't get you credentials`)
            console.log(err)
        })
        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        // .then(function(response) {
        // // The response is a Response instance.
        // // You parse the data into a useable format using `.json()`
        //     return response.json();
        // }).then(function(data) {
        // // `data` is the parsed version of the JSON returned from the above endpoint.
        //     console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        // });     
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