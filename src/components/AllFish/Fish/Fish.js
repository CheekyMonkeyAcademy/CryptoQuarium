import React, {Component} from "react";
import "./Fish.css";
import "../_SharedFish/SharedFishSwimming.css"

class Fish extends Component {
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

    setSwim() {
        // set our swim animation duration
        let fish_wrap = document.getElementById(this.props.id);
        let animationDuration = Math.floor(Math.random() * 20 + 20);
        let swimStyle = 'swim1';
        
        this.props.noMove ? 
            "" // If there is a value for no move we don't move the fish -- we do not set the animation var
            : 
            // This sets the animation var
            // It also prevents a bug when we navigate AWAY from the aquarium page.  
            fish_wrap ? 
                fish_wrap.style.setProperty("--swimAnimationTime", animationDuration + "s") 
            :   '';
            // The above code is tied to no move
        
        fish_wrap ? 
            fish_wrap.style.setProperty("--swimType", swimStyle)
        :   '';

        setTimeout(() => {
            fish_wrap ? this.setSwim() : '';
        }, animationDuration * 2000)
    }

    setBlink() {
        let fish_wrap = document.getElementById(this.props.id);
        let timeBetweenBlinks = Math.floor(Math.random() * 10 + 5);
        fish_wrap ? 
            fish_wrap.style.setProperty("--timeBetweenBlinks", timeBetweenBlinks + "s")
        :   '';

        setTimeout(() => {
            fish_wrap ? this.setBlink() : '';
        }, timeBetweenBlinks * 2000)
    }

    componentDidMount() {
        this.setSwim();
        this.setBlink();
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