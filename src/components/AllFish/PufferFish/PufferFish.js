import React, {Component} from "react";
import "./PufferFish.css";
import "../_SharedFish/SharedFishSwimming.css";
import SharedFunctions from "../_SharedFish/SharedFishFunctions.js";

class PufferFish extends Component {
    spot() {
        let fish_wrap = document.getElementById(this.props.id);
        fish_wrap.style.setProperty('--degree', this.props.degree + 'px');
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

    setSwim() {
        // set our swim animation duration
        let fish_wrap = document.getElementById(this.props.id);
        let animationDuration = Math.floor(Math.random() * 20 + 20);
        let swimStyle = 'swim1';
        
        if (this.props.noMove === false) {
            // It also prevents a bug when we navigate AWAY from the aquarium page.  
            fish_wrap ? 
                fish_wrap.style.setProperty("--swimAnimationTime", animationDuration + "s") 
            :   '';
        
            fish_wrap ? 
                fish_wrap.style.setProperty("--swimType", swimStyle)
            :   '';
        }
    
        setTimeout(() => {
            fish_wrap ? this.setSwim() : '';
        }, animationDuration * 2000)
    }
    
    setBlink() {
        let fish_wrap = document.getElementById(this.props.id);
        let timeBetweenBlinks = Math.floor(Math.random() * 20 + 20);
        fish_wrap ? 
            fish_wrap.style.setProperty("--timeBetweenBlinks", timeBetweenBlinks + "s")
        :   '';
    
        setTimeout(() => {
            fish_wrap ? this.setBlink() : '';
        }, timeBetweenBlinks * 2000)
    }

    componentDidMount() {
        // SharedFunctions.setSwim(this.props.id, 20, 20, this.props.noMove ? true : false);
        // SharedFunctions.setBlink(this.props.id, 5, 15);
        this.setSwim();
        this.setBlink();
        this.spot();
        this.colorRedOne();
        this.colorGreenOne();
        this.colorBlueOne();
        this.colorRedTwo();
        this.colorGreenTwo();
        this.colorBlueTwo();
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