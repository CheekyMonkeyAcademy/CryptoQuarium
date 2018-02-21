import React, {Component} from "react";
import "./PufferFish.css";
import "../_SharedFish/SharedFishSwimming.css";
import SharedFunctions from "../_SharedFish/SharedFishFunctions.js";

class PufferFish extends Component {
    spot() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--degree', this.props.degree + 'px');
    }

    componentDidMount() {
        this.spot();
        SharedFunctions.setSwim(this.props.id, 30, 40, this.props.noMove ? true : false, ['swim2', 'swim2', 'swim1', 'pause'],0);
        SharedFunctions.setBlink(this.props.id, 5, 10);
        SharedFunctions.colorRedOne(this.props.id, this.props.color1r);
        SharedFunctions.colorGreenOne(this.props.id, this.props.color1g);
        SharedFunctions.colorBlueOne(this.props.id, this.props.color1b);
        SharedFunctions.colorRedTwo(this.props.id, this.props.color2r);
        SharedFunctions.colorGreenTwo(this.props.id, this.props.color2g);
        SharedFunctions.colorBlueTwo(this.props.id, this.props.color2b);
    }

    render() {
        return (
            <div className = "fish_wrap2" id={this.props.id}> 
                <div className="fish2">
                    <div className="tail_fin2"></div>
                    <div className="fish_body2">
                        <div className="eye2"></div>
                        <div className="scale_1_2"></div>
                        <div className="scale_2_2"></div>
                        <div className="scale_3_2"></div>
                        <div className="scale_4_2"></div>
                    </div>
                </div> 
            </div>
        )
    }
};

export default PufferFish;