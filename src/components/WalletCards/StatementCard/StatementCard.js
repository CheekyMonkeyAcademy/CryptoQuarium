import React, {Component} from "react";
import StatementModal from "../../StatementModal"
import axios from 'axios';

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
            lastTransactionOne: "- 5.00 purchased blowfish",
            lastTransactionTwo: "+ 60.00 sold fishfood",
            lastTransactionThree: "- 19.00 purchased goldfish", 
            isModalOpen: false
        };         
    } //Closing of constructor here!

        
    render(){
        return (
            <div className="row">
                <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Recent Wallet Statements</span>
                        <p>{this.props.myStatementHistory}</p>                       
                    </div>
                    <div className="card-action">                        
                        <a className="waves-effect waves-light btn" onClick={() => this.openModel()}>View Account Activity</a>                      
                        <StatementModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                            <h5>Statement One</h5>
                            <hr />
                            <h5>Statement Two</h5>
                            <p><a className="waves-effect waves-light btn" onClick={() => this.closeModal()}>Close</a></p>                                                 
                        </StatementModal>
                    </div>
                </div>
                </div>
            </div>               
        );
    }

    openModel () {
        this.setState({isModalOpen:true});
    }

    closeModal = () => {
        this.setState({isModalOpen:false})
    }
}


export default StatementCard;