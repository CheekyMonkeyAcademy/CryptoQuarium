import React, {Component} from "react";
import "./Fish.css";
import "../_SharedFish/SharedFishSwimming.css";
import SharedFunctions from "../_SharedFish/SharedFishFunctions.js";

class Fish extends Component {
    componentDidMount() {
        SharedFunctions.setSwim(this.props.id, 25, 20, this.props.noMove ? true : false, ['a', 'b', 'c', 'd', 'e'], 'notSet', [1,2,3]);
        SharedFunctions.setBlink(this.props.id, 10, 20);
        SharedFunctions.colorRedOne(this.props.id, this.props.color1r);
        SharedFunctions.colorGreenOne(this.props.id, this.props.color1g);
        SharedFunctions.colorBlueOne(this.props.id, this.props.color1b);
        SharedFunctions.colorRedTwo(this.props.id, this.props.color2r);
        SharedFunctions.colorGreenTwo(this.props.id, this.props.color2g);
        SharedFunctions.colorBlueTwo(this.props.id, this.props.color2b);
        SharedFunctions.degree(this.props.id, this.props.degree);
        SharedFunctions.percent(this.props.id, this.props.percent);
    }
    render() {
        return (
            <div className="fish_wrap" id={this.props.id}>
                <div className="fish1">
                    <div className="top_fin"></div>
                    <div className="tail_fin"></div>
                    <div className="fish_body">
                        <div className="eye"></div>
                        <div className="scale_1"></div>
                        <div className="scale_2"></div>
                        <div className="scale_3"></div>
                        <div className="scale_4"></div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Fish;