import React, {Component} from "react";
import Fish from "../Fish";
import "./Tank.css";

class Tank extends Component {
        render(){
            return (
                <div className="container">
                    <div className="row">
                        <div className="tankBorder">
                            This is a Tank
                            <Fish>Fish</Fish>
                        </div>
                    </div>
                </div>
            )
        }
    };


export default Tank;