import React, {Component} from "react";
import "./PufferFish.css";


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

     swim() {
         // TODO proxy this out to its own file
        let animationDuration = Math.floor(Math.random() * 20 + 20);
        
        this.props.quantityAvailable ? // If there is a value for quantity Available we are on a sell screen
            animationDuration = 0 : // so we set the duration to zero (non moving fish)
            ""; // No quantity available means we take the animation duration
        
        if (this.props.forSale === true) {animationDuration = 0} // If a fish is for sale, it doesn't move (detriment of selling a fish)
        // TODO put fish that are for sale in a 'sale box' of some sort - where they don't move.  
        // This disallows someone from putting all fish on sale AND looking at them.  
        
        let fish_wrap = document.getElementById(this.props.id);
        // The following prevents a bug when we navigate AWAY from the aquarium page.  
        fish_wrap ? fish_wrap.style.setProperty("--animation-time", animationDuration + "s") : console.log(`No fish, no style`);

        setTimeout(() => {
            fish_wrap ? this.swim() : console.log(`Stop swimming!`);
        }, animationDuration * 2000);
    }

    componentDidMount() {
        this.swim();
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