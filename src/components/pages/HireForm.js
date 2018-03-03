import React, {Component} from "react";


//what is your target audience?
    //Attach any files you see necessary, submit, let's work together

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

    //target.type = text, number, radio, etc.
        //If the type is checkbox, return if target is checked or not
            //if the type is NOT a checkbox, the value is the target.value
    //target.type === 'checkbox' ? target.checked : target.value
    
    //Handler function that updates form state
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

    handleOptionChange = (event) => {
        console.log("changing buttons")
        this.setState({selectedOption: event.target.value})
    }

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
                            <a className="waves-effect waves-light btn" style={{backgroundColor:'white', color:'black'}}>Attach any files you feel would be necessary</a>
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

