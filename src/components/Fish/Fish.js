import React, {Component} from "react";
import "./Fish.css";
import {changeAnimationTime} from "./moveRand";
// import models from "../../../server/models/fish.js";

class Fish extends Component {
    constructor(props){
        super(props)

        this.state = {
            // id: id,
            // species: species,
            // price: price
        }
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
    }
    render() {
        return (
            <div className="fish_wrap"> 
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