import React, {Component} from "react";
import "./Fish.css";
import {changeAnimationTime} from "./moveRand";

class Fish extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    degree() {
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--degree', this.props.degree + 'deg');
    }
    percent() {
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--percent', this.props.percent + '%');
    }

    colorRedOne(){
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--colorOneR', this.props.color1r);
    }

    colorGreenOne() {
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--colorOneG', this.props.color1g);
    }

    colorBlueOne() {
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--colorOneB', this.props.color1b);
    }

    colorRedTwo() {
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--colorTwoR', this.props.color2r);
    }

    colorGreenTwo() {
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--colorTwoG', this.props.color2g);
    }

    colorBlueTwo() {
        let fish_wrap = document.querySelector(".fish_wrap");
        fish_wrap.style.setProperty('--colorTwoB', this.props.color2b);
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