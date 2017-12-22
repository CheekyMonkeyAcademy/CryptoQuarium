import React, {Component} from "react";
import Fish from "../Fish";
// import "./Aquarium.css";

class Tank extends Component {
        render(){
            return (
                <div className="container">
                    <div className="row">
                        This is my Tank
                        <Fish>Fish</Fish>
                    </div>
                </div>
            )
        }
    };


export default Tank;