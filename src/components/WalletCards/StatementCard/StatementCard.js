import React, {Component} from "react";
// import StatementModal from "../StatementModal"



//This is a stateful component because I just think so for right now

//When someone clicks view recent statements link
    //A scrollable box appears with all recent account activity

//For modal- set initial state to handle when the modal is shown
//Set onclick to toggle value

class StatementCard extends Component {
    
    constructor(props){
    //Not really sure what this line is doing- got it from react site
    //https://reactjs.org/docs/faq-functions.html
    //There is only one reason when one needs to pass props to super():
        //When you want to access this.props in constructor.
        //Not sure entirely what that means-- ASK RON!
    //BUT it is registering my clicks and changing my state
    super(props)
    
    this.state = {
        lastTransactionOne: "- 5.00 purchased blowfish",
        lastTransactionTwo: "+ 60.00 sold fishfood",
        lastTransactionThree: "- 19.00 purchased goldfish", 
        showModal: false
    };
    
    this.handleClick = this.handleClick.bind(this);
    }

    //Handle click event for button in statement card
    handleClick = () => {
        //Registers click
        console.log('click happened');
        //Change the state of showModal from false to true
        this.setState({showModal:true})
        console.log(this.state.showModal)
    }

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
                        <button onClick = {this.handleClick} data-target="modal1" className="btn modal-trigger">View Account Summary</button>         
                    </div>
                </div>
                </div>
            </div>               
        );
    }
}


export default StatementCard;