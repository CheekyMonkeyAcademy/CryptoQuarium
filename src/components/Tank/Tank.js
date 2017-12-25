import React, {Component} from "react";
import Water from "../Water";
import Fish from "../Fish";
import "./Tank.css";

class Tank extends Component {
        render(){
            return (
                <div className="container">
                    <div className="row">
                        <div className="tankBorder">
                            <div id="box">
                                <figure class="front"></figure>
                                <figure class="back"></figure>
                                <figure class="right"></figure>
                                <Fish>Fish</Fish>
                                <Water> Water </Water>
                                <figure class="left"></figure>
                                <figure class="top"></figure>
                                <figure class="bottom"></figure>                                
                            </div>                            
                        </div>
                    </div>
                </div>
            )
        }
    };


export default Tank;