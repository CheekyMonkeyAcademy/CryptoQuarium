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
        // tierOne: true,
        // tierTwo: false, 
        // tierThree: false, 
        // tierFour: false,
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

    handleOptionChange = (changeEvent) => {
        console.log("changing buttons")
        this.setState({selectedOption: changeEvent.target.value})
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
                                <label className="active" htmlfor="who">Name</label>                            
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
                                <label className="active" htmlfor="tellUse">Tell Us About Your Company</label>
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
                                <label className="active" htmlfor="project"> Tell Us About Your Project</label>
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
                                <label className="active" htmlfor="deadlines">What Are Your Deadlines</label>
                        </div>
                    </div>

                     <div className="row">
                        <div className="input-field col s6">
                            <p>What is your budget?</p>
                                <p>
                                    <input 
                                        name="radio" 
                                        type="radio"                                          
                                        checked = {this.state.selectedOption === 'tierOne'}
                                        value = 'tierOne'
                                        onChange={(changeEvent) => this.handleOptionChange(changeEvent)}    
                                    />
                                    <label htmlfor="rangeOne">tierOne</label>
                                </p>
                                <p>
                                    <input 
                                        name="radio" 
                                        type="radio"                                         
                                        checked = {this.state.selectedOption === 'tierTwo'}                                       
                                        value = 'tierTwo'
                                        onChange={(changeEvent) => this.handleOptionChange(changeEvent)} 
                                    />
                                    <label htmlfor="rangeTwo">tierTwo</label>
                                </p>
                                <p>
                                    <input 
                                        name="radio" 
                                        type="radio"                                       
                                        checked = {this.state.selectedOption === 'tierThree'}
                                        value= 'tierThree'
                                        onChange={(changeEvent) => this.handleOptionChange(changeEvent)}  
                                    />
                                    <label htmlfor="rangeThree">tierThree</label>
                                </p>
                                <p>
                                    <input 
                                        name="radio" 
                                        type="radio"                                         
                                        checked = {this.state.selectedOption === 'tierFour'}
                                        value= 'tierFour'
                                        onChange={(changeEvent) => this.handleOptionChange(changeEvent)}                                     
                                    />
                                    <label htmlfor="rangeFour">tierFour</label>
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

