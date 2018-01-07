function randomize(minNumber, maxNumber) {
    let randomNumber = (Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber);
    return randomNumber;
}

module.exports = randomize;