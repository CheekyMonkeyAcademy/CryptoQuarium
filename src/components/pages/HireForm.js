import React, {Component} from "react";


//what is your target audience?
    //Attach any files you see necessary, submit, let's work together

class HireForm extends Component {

    state = {
        who: 'name',
        email: 'you@email.com',
        phone:  '555-555-5555', 
        company: 'Tell us about your organization',
        project: 'Tell us about your project',
        deadlines: 'What are your deadlines?',
        budgetCheck: true,
        audience: 'Who is your targeted audience?'
    }

    //target.type = text, number, radio, etc.
        //If the type is checkbox, return if target is checked or not
            //if the type is NOT a checkbox, the value is the target.value
    //target.type === 'checkbox' ? target.checked : target.value
    
    //Handler function that updates form state
        //Below setState is also using COMPUTED PROPERTY NAMES 
            //Put an expression in brackets, that will be computed and used as the property name
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        }, () => {
            console.log("I am in the HIRE PAGE")            
        })
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
                                value={this.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label for="who">Name</label>                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="email"
                                type="email"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label for="email">Email</label>
                        </div>

                        <div className="input-field col s6">
                            <input 
                                name="phone"
                                type="tel"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label for="phone">Phone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="company"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label for="tellUse">Tell Us About Your Company</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="project"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label for="project"> Tell Us About Your Project</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                name="deadline"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label for="deadlines">What Are Your Deadlines</label>
                        </div>
                    </div>

                     <div className="row">
                        <div className="input-field col s6">
                            <p>What is your budget?</p>
                                <p>
                                    <input 
                                        name="budgetCheck" 
                                        type="radio" 
                                        id="rangeOne" 
                                        defaultChecked ={true}
                                        value= '5-9'
                                        onChange={(event) => this.handleInputChange(event)}     
                                    />
                                    <label for="rangeOne">5-9</label>
                                </p>
                                <p>
                                    <input 
                                        name="budgetCheck" 
                                        type="radio" 
                                        id="rangeTwo" 
                                        value={this.state.name}
                                        onChange={(event) => this.handleInputChange(event)}
                                    />
                                    <label for="rangeTwo">10-14</label>
                                </p>
                                <p>
                                    <input 
                                        name="budgetCheck" 
                                        type="radio" 
                                        id="rangeThree"  
                                        value={this.state.name}
                                        onChange={(event) => this.handleInputChange(event)}
                                    />
                                    <label for="rangeThree">15-19</label>
                                </p>
                                <p>
                                    <input 
                                        name="budgetCheck" 
                                        type="radio" 
                                        id="rangeFour"
                                        value={this.state.name}
                                        onChange={(event) => this.handleInputChange(event)}                                    
                                    />
                                    <label for="rangeFour">20-24</label>
                                </p>
                        </div>

                        <div className="input-field col s6">
                            <input 
                                name="audience"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                                <label for="audience">Who Is Your Target Audience?</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 center-align">
                            <a class="waves-effect waves-light btn" style={{backgroundColor:'white', color:'black'}}>Attach any files you feel would be necessary</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 center-align">
                            <a class="waves-effect waves-light btn" style={{backgroundColor:'#ef5350'}}>Submit</a>
                        </div>
                    </div>                    
                </form>
            </div>

            </div>
        )
    }
}

export default HireForm

