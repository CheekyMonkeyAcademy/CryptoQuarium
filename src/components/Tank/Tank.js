import React, {Component} from "react";
// import Water from "../Water";
import Fish from "../Fish";
import "./Tank.css";

class Tank extends Component {
        render(){
            return (
                <div className="container">
                    <div className="row">
                        <div className="tankBorder">
                            <div id="box">
                                <figure className="front"></figure>
                                <figure className="back"></figure>
                                <figure className="right"></figure>
                                <Fish>Fish</Fish>
                                {/* <Water> Water </Water> */}
                                <figure className="left"></figure>
                                <figure className="top"></figure>
                                <figure className="bottom"></figure>                                
                            </div>                            
                        </div>
                    </div>
                </div>
            )
        }
    };


export default Tank;