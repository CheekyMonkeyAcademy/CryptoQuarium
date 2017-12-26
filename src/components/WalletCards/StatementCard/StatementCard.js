import React, {Component} from "react";
import StatementModal from "../../StatementModal"

//This is a stateful component because I just think so for right now

//When someone clicks view recent statements link
    //A scrollable box appears with all recent account activity

//For modal- set initial state to handle when the modal is shown

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
            isOpen: false
        };    
    
    } //Closing of constructor here!

    //Toggle Modal
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    //THIS HAS AN ASYNC ISSUE
    // handleClick = (event) => {
    //     //Registers click
    //     console.log('click happened');
    //     //Change the state of showModal from false to true
    //     //ASYNC PROBLEM!!!
    //         //Not changing the state once the button is clicked the first time!
    //     this.setState({showModal:true});        
    //     console.log(this.state.showModal)            
    // }

    //Function to call the modal component
    //HANDLE THIS LOGIC IN MODAL COMPONENT
    // getModal = (event) => {
    //     if (this.state.showModal === true) {
    //         return <StatementModal />;
    //     } else {
    //         return null;
    //     }
    // }

    render(){
        return (
            <div className="row">
                <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Recent Wallet Statements</span>
                        <p>{this.state.lastTransactionOne}</p>
                        <p>{this.state.lastTransactionTwo}</p>
                        <p>{this.state.lastTransactionThree}</p>
                    </div>
                    <div className="card-action">                        
                        <button onClick = {this.toggleModal} data-target="modal1" label="Action" className="btn modal-trigger">View Account Summary</button>         
                        <StatementModal show={this.state.isOpen} onClose={this.toggleModal} />
                    </div>
                </div>
                </div>
            </div>               
        );
    }
}


export default StatementCard;