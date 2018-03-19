import React, {Component} from "react";
import "./Fish.css";
import "../_SharedFish/SharedFishSwimming.css";
import SharedFunctions from "../_SharedFish/SharedFishFunctions.js";

class Fish extends Component {
    state = {
        timer: null
    }

    setSwimRecurse = (id, animationDurationMin, animationDurationVariable, passedSwimArray, passedSwimNumber, swimVarianceArray) => {
        let animationDuration = Math.floor(Math.random() * animationDurationMin + animationDurationVariable);
        let fish_wrap = document.getElementById(id);
        let swimStyle;
        let currentSwimNumber; 
        let currentSwimSecondNumber;
        let randomSwimVariance = swimVarianceArray[Math.floor(Math.random() * swimVarianceArray.length)];
    
        // if we are starting movement choose a random start location from the array
        if (passedSwimNumber === 'notSet'){
            currentSwimNumber = (Math.floor(Math.random() * passedSwimArray.length));
            currentSwimSecondNumber = currentSwimNumber + 1;
        }
        // If we're not starting movement - continue on the loop
        else{
            currentSwimNumber = passedSwimNumber;
            currentSwimSecondNumber = passedSwimNumber + 1;
        }
        // Starting the loop over
        if (currentSwimNumber >= passedSwimArray.length) {
            currentSwimNumber = 0;
            currentSwimSecondNumber = 1;
        }
        // Resetting the second number of the loop if it's too high
        if (currentSwimNumber+1 >= passedSwimArray.length) {
            currentSwimSecondNumber = 0;
        }

        swimStyle = passedSwimArray[currentSwimNumber] + randomSwimVariance + passedSwimArray[currentSwimSecondNumber];
        currentSwimNumber++;
        
        if (this.props.noMove !== true) {
            fish_wrap ? 
                fish_wrap.style.setProperty("--swimAnimationTime", animationDuration + "s")
            : '';
            fish_wrap ? 
                fish_wrap.style.setProperty("--swimType", swimStyle)
            : '';
            
            let timer = setTimeout(() => this.setSwimRecurse(id, animationDurationMin, animationDurationVariable, passedSwimArray, currentSwimNumber, swimVarianceArray), animationDuration * 1000)    
            this.setState({timer});
        }
    }

    componentDidMount() {
        this.setSwimRecurse(this.props.id, 15, 10, ['a', 'b', 'c', 'd', 'e'], 'notSet', [1,2,3]);
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

    componentWillUnmount() {
        clearTimeout(this.state.timer);
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