import React, {Component} from "react";


//what is your target audience?
    //Attach any files you see necessary, submit, let's work together

class HireForm extends Component {

    state = {
        name: 'name',
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
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        }, () => {
            console.log("I am in the HIRE PAGE")
            console.log(this.state.name)
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
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event)}/>
                                <label for="name">Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text"/>
                                <label for="email">Email</label>
                        </div>

                        <div className="input-field col s6">
                            <input type="text"/>
                                <label for="phone">Phone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text"/>
                                <label for="tellUse">Tell Us About Your Company</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text"/>
                                <label for="project"> Tell Us About Your Project</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text"/>
                                <label for="deadlines">What Are Your Deadlines</label>
                        </div>
                    </div>

                     <div className="row">
                        <div className="input-field col s6">
                            <p>What is your budget?</p>
                                <p>
                                    <input name="group1" type="radio" id="test1" />
                                    <label for="test1">5</label>
                                </p>
                                <p>
                                    <input name="group1" type="radio" id="test2" />
                                    <label for="test2">10</label>
                                </p>
                                <p>
                                    <input class="with-gap" name="group1" type="radio" id="test3"  />
                                    <label for="test3">15</label>
                                </p>
                                <p>
                                    <input name="group1" type="radio" id="test4" />
                                    <label for="test4">20</label>
                                </p>
                        </div>

                        <div className="input-field col s6">
                            <input type="text"/>
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

