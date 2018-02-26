function setSwim(id, minDuration, variableDuration, noMove, passedSwimArray, passedSwimNumber) {
    // set our swim animation duration and what route to take
    let fish_wrap = document.getElementById(id);
    let animationDuration = Math.floor(Math.random() * variableDuration + minDuration);
    let swimStyleArray = passedSwimArray
    let swimStyle;
    let currentSwimNumber; 
    
    if (passedSwimNumber === 'notSet'){
        currentSwimNumber = (Math.floor(Math.random() * swimStyleArray.length));
    }
    else{
        currentSwimNumber = passedSwimNumber;
    }

    if (currentSwimNumber >= swimStyleArray.length) {
        currentSwimNumber = 0;
    }

    swimStyle = swimStyleArray[currentSwimNumber];
    console.log(`${swimStyle}`);
    currentSwimNumber++;
    
    if (noMove === false) {
        // It also prevents a bug when we navigate AWAY from the aquarium page.  
        fish_wrap ? 
            fish_wrap.style.setProperty("--swimAnimationTime", animationDuration + "s") 
        :   '';
    
        fish_wrap ? 
            fish_wrap.style.setProperty("--swimType", swimStyle)
        :   '';
    }

    setTimeout(() => {
        setSwim(id, minDuration, variableDuration, noMove, passedSwimArray, currentSwimNumber);
    }, animationDuration * 1000)
}

function setBlink(id, minDuration, variableDuration) {
    let fish_wrap = document.getElementById(id);
    let timeBetweenBlinks = Math.floor(Math.random() * variableDuration + minDuration);
    fish_wrap ? 
        fish_wrap.style.setProperty("--timeBetweenBlinks", timeBetweenBlinks + "s")
    :   '';

    setTimeout(() => {
        fish_wrap ? this.setBlink(id, minDuration, variableDuration) : '';
    }, timeBetweenBlinks * 1000)
}

function colorRedOne(id, color1r){
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--colorOneR', color1r);
}

function colorGreenOne(id, color1g) {
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--colorOneG', color1g);
}

function colorBlueOne(id, color1b) {
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--colorOneB', color1b);
}

function colorRedTwo(id, color2r) {
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--colorTwoR', color2r);
}

function colorGreenTwo(id, color2g) {
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--colorTwoG', color2g);
}

function colorBlueTwo(id, color2b) {
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--colorTwoB', color2b);
}

function degree(id, degree) {
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--degree', degree + 'deg');
}

function percent(id, percent) {
    let fish_wrap = document.getElementById(id);
    fish_wrap.style.setProperty('--percent', percent + '%');
}

module.exports = {
    setSwim: setSwim,
    setBlink: setBlink,
    colorRedOne: colorRedOne,
    colorGreenOne: colorGreenOne,
    colorBlueOne: colorBlueOne,
    colorRedTwo: colorRedTwo,
    colorGreenTwo: colorGreenTwo,
    colorBlueTwo: colorBlueTwo,
    degree: degree,
    percent: percent,
}