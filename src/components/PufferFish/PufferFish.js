import React, {Component} from "react";
import "./PufferFish.css";


class PufferFish extends Component {
   constructor(props) {
        super(props);
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