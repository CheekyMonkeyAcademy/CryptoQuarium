function setProperty(fish_body, duration) {
    fish_body.style.setProperty("--animation-time", duration + "s");
}

export function changeAnimationTime(fish_body) {
    let animationDuration = Math.floor(Math.random() * 40 + 40);
    setProperty(fish_body, animationDuration);
    return animationDuration;
}