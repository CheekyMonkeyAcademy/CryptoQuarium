// import "../_SharedFish/SharedFishSwimming.css"

function setSwim(id, minDuration, variableDuration, noMove) {
    console.log(`called set swim`);
    // set our swim animation duration
    let fish_wrap = document.getElementById(id);
    let animationDuration = Math.floor(Math.random() * variableDuration + minDuration);
    let swimStyle = 'swim1';
    
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
        fish_wrap ? setSwim() : '';
    }, animationDuration * 2000)
}

function setBlink(id, minDuration, variableDuration) {
    console.log(`called set blink`);
    let fish_wrap = document.getElementById(id);
    let timeBetweenBlinks = Math.floor(Math.random() * variableDuration + minDuration);
    fish_wrap ? 
        fish_wrap.style.setProperty("--timeBetweenBlinks", timeBetweenBlinks + "s")
    :   '';

    setTimeout(() => {
        fish_wrap ? this.setBlink() : '';
    }, timeBetweenBlinks * 2000)
}


module.exports = {
    setSwim: setSwim,
    setBlink: setBlink,
}