function setSwim(id, minDuration, variableDuration, noMove, passedSwimArray, passedSwimNumber, swimVarianceArray) {
    // set our swim animation duration and what route to take
    let fish_wrap = document.getElementById(id);
    let animationDuration = Math.floor(Math.random() * variableDuration + minDuration);
    let swimStyle;
    let currentSwimNumber; 
    let currentSwimSecondNumber;
    let randomSwimVariance = swimVarianceArray[Math.floor(Math.random() * swimVarianceArray.length)];

// Variables to tie fin movement to forward swimming animation
    let dorsalFinDuration = animationDuration / 10;
    let tailFinDuration = animationDuration / 20;

    setDorsal(this.props.id, 1, dorsalFinDuration);
    setTail(this.props.id, 1, tailFinDuration);

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

    // Setting the second number of the loop
    if (currentSwimNumber+1 >= passedSwimArray.length) {
        currentSwimSecondNumber = 0;
    }

    swimStyle = passedSwimArray[currentSwimNumber] + randomSwimVariance + passedSwimArray[currentSwimSecondNumber];
    console.log(`id: ${id} now has ${swimStyle}`);
    currentSwimNumber++;
    
    if (noMove === false) {
        // This prevents a bug when we navigate AWAY from the aquarium page.  
        fish_wrap ? 
            fish_wrap.style.setProperty("--swimAnimationTime", animationDuration + "s") 
        :   '';
    
        // This prevents a bug when we navigate AWAY from the aquarium page.  
        fish_wrap ? 
            fish_wrap.style.setProperty("--swimType", swimStyle)
        :   '';
    }

    setTimeout(() => {
        // This prevents a bug when we navigate AWAY from the aquarium page.  
        fish_wrap ? setSwim(id, minDuration, variableDuration, noMove, passedSwimArray, currentSwimNumber, swimVarianceArray) : '';
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

function setDorsal(id, minDuration, variableDuration) {
    let fish_wrap = document.getElementById(id);
    fish_wrap ? 
        fish_wrap.style.setProperty("--timeBetweenDorsalMovement", dorsalFinDuration + "s")
    :   '';

    setTimeout(() => {
        fish_wrap ? this.setDorsal(id, minDuration, variableDuration) : '';
    }, dorsalFinDuration * 1000)
}

function setTail(id, minDuration, variableDuration) {
    let fish_wrap = document.getElementById(id);
    let timeBetweenBlinks = Math.floor(Math.random() * variableDuration + minDuration);
    fish_wrap ? 
        fish_wrap.style.setProperty("--timeBetweenFinMovement", tailFinDuration + "s")
    :   '';

    setTimeout(() => {
        fish_wrap ? this.setTail(id, minDuration, variableDuration) : '';
    }, tailFinDuration * 1000)
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