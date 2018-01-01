import React, {Component} from "react";
import Fish from "../Fish";
import "./Tank.css";

class Tank extends Component {
    render() {
        return (
<div id="wrap"> 
<div className="window">
    <div className="fishtank_wrap">
        <div className="fishtank">
        <div className="bubble_wrap">
        <div className="bubbles b0"></div>
        <div className="bubbles b1"></div>
        <div className="bubbles b2"></div>
        <div className="bubbles b3"></div>
        <div className="bubbles b4"></div>
        <div className="bubbles b5"></div>
        </div>
        <div className="bubble_wrap bw2">
        <div className="bubbles b6"></div>
        <div className="bubbles b7"></div>
        <div className="bubbles b8"></div>
        </div>
        <div className="water"></div>
        <Fish></Fish>
        

            <div className="ground"></div>
            <div className="rock_1"></div>
            <div className="rock_2"></div>
            <div className="rock_3"></div>
            <div className="rock_4"></div>
            <div className="rock_5"></div>
            <div className="plant_1_wrap">
                <div className="plant_1"></div>
                <div className="plant_2"></div>
                <div className="plant_3"></div>
            </div>
            <div className="plant_2_wrap">
                <div className="plant_4"></div>
                <div className="plant_5"></div>
            </div>
            <div className="long_plant">
                <div className="l_plant_1"></div>
                <div className="l_plant_2"></div>
                <div className="l_plant_3"></div>
            </div>
            <div className="long_plant2">

                <div className="l_plant_2"></div>
                <div className="l_plant_3"></div>
            </div>
            <div className="water"></div>

        </div>
    </div>
</div>
</div>
        )
    }
};

export default Tank;