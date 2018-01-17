import React, {Component} from "react";
import StatementModal from "../../StatementModal"
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

        
    render(){
        return (
            <div className="row">
                <div className="col s8 push-s2">
                <div className="card #757575 grey darken-1">
                    <div className="card-content white-text">
                        <h1 className="card-title">Recent Wallet Statements</h1>
                        <hr/>
                        <p>{this.props.myStatementHistory.walletBalanceChangeReason}</p>
                        <p>{this.props.myStatementHistory.walletBalanceChange}</p>
                        <p>{this.props.myStatementHistory.lastWalletBalance}</p>
                        <p>{this.props.myStatementHistory.createdAt}</p>
                    </div>
                    <div className="card-action">                        
                        <a className="waves-effect waves-light btn" onClick={() => this.openModel()}>View Account Activity</a>                      
                        <StatementModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                            <h3>Statement One</h3>
                            <hr />
                            <h3>Statement Two</h3>
                            <p><a className="waves-effect waves-light btn" onClick={() => this.closeModal()}>Close</a></p>                                                 
                        </StatementModal>
                    </div>
                </div>
                </div>
            </div>               
        );
    }

    openModel = () => {
        this.setState({isModalOpen:true});
    }

    closeModal = () => {
        this.setState({isModalOpen:false})
    }
}


export default StatementCard;