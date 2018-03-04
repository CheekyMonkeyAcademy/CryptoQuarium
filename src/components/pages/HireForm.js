import React, {Component} from "react";
import axios from 'axios';

class HireForm extends Component {

    state = {
        who: ' ',
        email: ' ',
        phone:  ' ', 
        company: ' ',
        project: ' ',
        deadlines: ' ',
        selectedOption: 'tierTwo',      
        audience: ' '
    }

    //Handler function that updates form input change state
        //Below setState is also using COMPUTED PROPERTY NAMES 
            //Put an expression in brackets, that will be computed and used as the property name
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        }, () => {
            console.log("I am in the HIRE PAGE")            
        })
    }

    //Function to handle changing of radio buttons
    handleOptionChange = (event) => {
        console.log("changing buttons")
        this.setState({selectedOption: event.target.value})
    }

    // Form Submission
        // 1. I will need a route to hit!
                // POST method / body is the data
        // 2. onSubmit will be set next to start of Form Tag

    // https://blog.stvmlbrn.com/2017/04/07/submitting-form-data-with-react.html
    // https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
    //Function to handle form submission
    // onSubmit = () => {

    // }



    render(){
        return (
            <div className="container" style={{backgroundColor:'white',padding:'20px'}}>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">       
                            <input 
                                name="who"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label className="active" htmlFor="who">Name</label>                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label className="active" for="email">Email</label>
                        </div>

                        <div className="input-field col s6">
                            <input 
                                name="phone"
                                type="tel"
                                value={this.state.phone}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label className="active" for="phone">Phone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="company"
                                type="text"
                                value={this.state.company}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label className="active" htmlFor="tellUse">Tell Us About Your Company</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="project"
                                type="text"
                                value={this.state.project}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label className="active" htmlFor="project"> Tell Us About Your Project</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="deadline"
                                type="text"
                                value={this.state.deadline}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label className="active" htmlFor="deadlines">What Are Your Deadlines</label>
                        </div>
                    </div>

{/* Id for radio button need to match the htmlFor in the label
Also, radio buttons do not need an 'input-field' */}

                     <div className="row">
                        <div className="col s6">
                            <p>What is your budget?</p>
                                <p>
                                    <input 
                                        name="selectedOption" 
                                        id="selectedOption1"
                                        type="radio"                                          
                                        checked = {this.state.selectedOption === 'tierOne'}
                                        value = "tierOne"
                                        onChange={(event) => this.handleOptionChange(event)}                                          
                                    />
                                    <label htmlFor="selectedOption1">tierOne</label>
                                </p>
                                <p>
                                    <input 
                                        name="selectedOption" 
                                        id="selectedOption2"
                                        type="radio"                                         
                                        checked = {this.state.selectedOption === 'tierTwo'}                                       
                                        value = "tierTwo"
                                        onChange={(event) => this.handleOptionChange(event)}                                       
                                    />
                                    <label htmlFor="selectedOption2">tierTwo</label>
                                </p>
                                <p>
                                    <input 
                                        name="selectedOption" 
                                        id="selectedOption3"
                                        type="radio"                                       
                                        checked = {this.state.selectedOption === 'tierThree'}
                                        value= "tierThree"
                                        onChange={(event) => this.handleOptionChange(event)}                                        
                                    />
                                    <label htmlFor="selectedOption3">tierThree</label>
                                </p>
                                <p>
                                    <input 
                                        name="selectedOption" 
                                        id="selectedOption4"
                                        type="radio"                                         
                                        checked = {this.state.selectedOption === 'tierFour'}
                                        value= "tierFour"
                                        onChange={(event) => this.handleOptionChange(event)}                                                                      
                                    />
                                    <label htmlFor="selectedOption4">tierFour</label>
                                </p>
                        </div>

                        <div className="input-field col s6">
                            <input 
                                name="audience"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label className="active" htmlfor="audience">Who Is Your Target Audience?</label>
                        </div>
                    </div>

                   

                    <div className="row">
                        <div className="input-field col s12 center-align">
                            <a className="waves-effect waves-light btn" style={{backgroundColor:'#ef5350'}}>Submit</a>
                        </div>
                    </div>                    
                </form>
            </div>

            </div>
        )
    }
}

export default HireForm

