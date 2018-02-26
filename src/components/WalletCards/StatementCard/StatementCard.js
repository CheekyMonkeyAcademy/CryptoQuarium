import React, {Component} from "react";
import StatementModal from "../../StatementModal";
import Moment from 'react-moment';
import 'moment-timezone';

// import axios from 'axios';

//This is a stateful component because I just think so for right now

//When someone clicks view recent statements link
    //A scrollable box appears with all recent account activity

//For modal- set initial state to handle when the modal is shown
//Got Modal from here: https://peteris.rocks/blog/modal-window-in-react-from-scratch/

class StatementCard extends Component {
    
    constructor(props){
        //Not really sure what this line is doing- got it from react site
        //https://reactjs.org/docs/faq-functions.html
        //There is only one reason when one needs to pass props to super():
            //When you want to access this.props in constructor.
            //Not sure entirely what that means-- ASK RON!
    
        super(props)
        
        this.state = {
            isModalOpen: false
        };         
    } //Closing of constructor here!

    // <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
    render(){
        return (
            <div className="col s8 push-s2">
                <div className="card #757575 grey darken-1">
                    <div className="card-content white-text">
                        <p>Transaction: {this.props.walletBalanceChangeReason}</p>
                        <p>Amount: {this.props.walletBalanceChange}</p>
                        <p>Last Wallet Balance: {this.props.lastWalletBalance}</p>
                        <p>Purchase Time: <Moment>{this.props.createdAt}</Moment></p>
                    </div>                   
                </div>
            </div>
        );
    }

}


export default StatementCard;

