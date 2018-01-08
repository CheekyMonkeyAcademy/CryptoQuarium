function setProperty(fish_body, degree){
    fish_body.style.setProperty('--degree', degree + 'deg')
};

function setPropertyColorRed(fish_body, colorOneR){
    fish_body.style.setProperty('--colorOneR', colorOneR)
}

function setPropertyColorGreen(fish_body, colorOneG) {
    fish_body.style.setProperty('--colorOneG', colorOneG)
}

function setPropertyColorBlue(fish_body, colorOneB) {
    fish_body.style.setProperty('--colorOneB', colorOneB)
}

function setPropertyColorRedTwo(fish_body, colorTwoR) {
    fish_body.style.setProperty('--colorTwoR', colorTwoR)
}

function setPropertyColorGreenTwo(fish_body, colorTwoG) {
    fish_body.style.setProperty('--colorTwoG', colorTwoG)
}

function setPropertyColorBlueTwo(fish_body, colorTwoB) {
    fish_body.style.setProperty('--colorTwoB', colorTwoB)
}

function setPropertyPercent(fish_body, percent) {
    fish_body.style.setProperty('--percent', percent + '%')
}


export function changeDegree(fish_body){
    let randomDegree = Math.floor(Math.random() * 181);
    setProperty(fish_body, randomDegree);
    return randomDegree;
}

export function changePercent(fish_body) {
    let randomPercent = Math.floor(Math.random() * 60 + 20);
    setPropertyPercent(fish_body, randomPercent);
    return randomPercent;
}

export function changeRedOne(fish_body){
    let randRedOne = Math.floor(Math.random() * 255);
    setPropertyColorRed(fish_body, randRedOne);
    return randRedOne;    
}
export function changeGreenOne(fish_body) {
    let randGreenOne = Math.floor(Math.random() * 255);
    setPropertyColorGreen(fish_body, randGreenOne);
    return randGreenOne;
}

export function changeBlueOne(fish_body) {
    let randBlueOne = Math.floor(Math.random() * 255);
    setPropertyColorBlue(fish_body, randBlueOne);
    return randBlueOne;
}

export function changeRedTwo(fish_body) {
    let randRedTwo = Math.floor(Math.random() * 255);
    setPropertyColorRedTwo(fish_body, randRedTwo);
    return randRedTwo;
}
export function changeGreenTwo(fish_body) {
    let randGreenTwo = Math.floor(Math.random() * 255);
    setPropertyColorGreenTwo(fish_body, randGreenTwo);
    return randGreenTwo;
}

export function changeBlueTwo(fish_body) {
    let randBlueTwo = Math.floor(Math.random() * 255);
    setPropertyColorBlueTwo(fish_body, randBlueTwo);
    return randBlueTwo;
}