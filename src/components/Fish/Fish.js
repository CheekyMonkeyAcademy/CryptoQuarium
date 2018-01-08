import React, {Component} from "react";
import "./Fish.css";

class Fish extends Component {
    constructor(props) {
        super(props);
    }

    degree() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--degree', this.props.degree + 'deg');
    }
    percent() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--percent', this.props.percent + '%');
    }

    colorRedOne(){
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--colorOneR', this.props.color1r);
    }

    colorGreenOne() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--colorOneG', this.props.color1g);
    }

    colorBlueOne() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--colorOneB', this.props.color1b);
    }

    colorRedTwo() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--colorTwoR', this.props.color2r);
    }

    colorGreenTwo() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--colorTwoG', this.props.color2g);
    }

    colorBlueTwo() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--colorTwoB', this.props.color2b);
    }

    swim() {
        let animationDuration = Math.floor(Math.random() * 20 + 20);
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty("--animation-time", animationDuration + "s");

        setTimeout(() => {
            this.swim();
        }, animationDuration * 1000);
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