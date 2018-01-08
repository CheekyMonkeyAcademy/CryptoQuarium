import React, {Component} from "react";
import "./Fish.css";
import {changeAnimationTime} from "./moveRand";
import {changeDegree} from "./colorRando";
import {changePercent} from "./colorRando";
import {changeRedOne} from "./colorRando";
import {changeGreenOne} from "./colorRando";
import {changeBlueOne} from "./colorRando";
import {changeRedTwo} from "./colorRando";
import {changeGreenTwo} from "./colorRando";
import {changeBlueTwo} from "./colorRando";
// import models from "../../../server/models/fish.js";

class Fish extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    degree() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let gradeDegree = changeDegree(fish_wrap);
        }
    percent() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let gradePercent = changePercent(fish_wrap);
    }

    colorRedOne(){
        let fish_wrap = document.querySelector(".fish_wrap");
        let redOne = changeRedOne(fish_wrap);
    }

    colorGreenOne() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let greenOne = changeGreenOne(fish_wrap);
    }

    colorBlueOne() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let blueOne = changeBlueOne(fish_wrap);
    }

    colorRedTwo() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let redTwo = changeRedTwo(fish_wrap);
    }

    colorGreenTwo() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let greenTwo = changeGreenTwo(fish_wrap);
    }

    colorBlueTwo() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let blueTwo = changeBlueTwo(fish_wrap);
    }

    swim() {
        let fish_wrap = document.querySelector(".fish_wrap");
        let time = changeAnimationTime(fish_wrap);

        setTimeout(() => {
            this.swim();
        }, time * 1000);
    }

    componentDidMount() {
        this.swim();
        this.degree();
        this.percent();
        this.colorRedOne();
        this.colorGreenOne();
        this.colorBlueOne();
        this.colorRedTwo();
        this.colorGreenTwo();
        this.colorBlueTwo();
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