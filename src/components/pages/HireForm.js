import React, {Component} from "react";


//what is your target audience?
    //Attach any files you see necessary, submit, let's work together

class HireForm extends Component {

    render(){
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" className="validate" />
                                <label for="name">Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" className="validate" />
                                <label for="email">Email</label>
                        </div>

                        <div className="input-field col s6">
                            <input type="text" className="validate" />
                                <label for="phone">Phone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" className="validate" />
                                <label for="tellUse">Tell Us About Your Company</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" className="validate" />
                                <label for="project"> Tell Us About Your Project</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" className="validate" />
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
                            <input type="text" className="validate" />
                                <label for="audience">Who Is Your Target Audience?</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <a class="waves-effect waves-light btn" style={{backgroundColor:'white', color:'black'}}>Attach any files you feel would be necessary</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <a class="waves-effect waves-light btn" style={{backgroundColor:'#ef5350'}}>Submit</a>
                        </div>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default HireForm

