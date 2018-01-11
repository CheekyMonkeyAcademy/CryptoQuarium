let db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const randomize = require('../services/randomize.js');
const Q = require('q');

module.exports = function(app) {

    app.get('/api/allFishTemplates', function(req, res) {
        db.Fish.findAll({  
        })
        .then((allFish) => {
            res.json(allFish);
        });
    });

    app.get('/api/allUserFish', function(req, res) {
        db.UserFish.findAll({
            where: {
                UserId:  req.user.id
            }  
        }).then((allUserFish) => {
            res.json(allUserFish);
        });
    });

    app.get('/api/allUserFishOnSale', function(req, res) {
        db.UserFish.findAll({
            where: {
                forSale: true,
                // This hides the sales by the existing user (you can't buy your own fish);
                UserId: {[Op.ne]: req.user.id}

            }  
        }).then((allUserFishOnSale) => {
            res.json(allUserFishOnSale);
        });
    });

    app.post('/api/userPurchaseOtherUserFish/', function(req, res){
        
        asyncOtherUserFishPurchase(req.body, req.user.id)
        .then((asyncReturn) => {
            console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
            res.sendStatus(204);
        })
        .catch((error) => {
            console.log(`BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
            res.sendStatus(400).json(error);
        })
    });
                

    app.post('/api/userPurchaseFish/', function(req, res){
        // Purchasing a fish from the store
        // 0. Iterate through the fish in the cart
        // 1. Find the target fishObject
        // 2. See if there are quantity quantityAvailable
        // 3. If it is, see if the user has the required funds
        // 4. If all of that works, buy it and move along 
        
        asyncFishPurchase(req.body, req.user.id)
        .then((asyncReturn) => {
            console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
            res.sendStatus(204);
        })
        .catch((error) => {
            console.log(`BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
            res.sendStatus(400).json(error);
        })
    });

    app.put('/api/userFishUpdate/:id', function(req, res) {
        let updatedUserFish = {} 
        if (req.body.name !== "" || req.body.name !== null) {
            updatedUserFish.name = req.body.name
        }
        if (req.body.forSale === true) {
            console.log(`Fish is for sale - we need a price`)
            if (req.body.price > 0) {
                updatedUserFish.forSale = true;
                updatedUserFish.price = req.body.price;
            }
        }
        // TODO validate this functionality
        console.log(updatedUserFish);
        db.User.update(updatedUserFish,{
            where: {
                id: updatedUserFish.id
            }    
        })
    });

}//End of module.exports        

asyncFishPurchase = (fishArray, userId, index = 0, deferred = Q.defer()) => {
    console.log(`total length: ${fishArray.length}`);
    console.log(`Calling fish purchase async like.. round ${index}.`);

    if (index >= fishArray.length) {
        console.log(`ANNNDD we're done here!`);
        deferred.resolve();
        return "Success";
    }
    else {
        console.log(`Purchase fish here ${fishArray[index]}`);

        db.UserFish.findOne({
            where: {
                id: fishArray[index].id
            }
        })
        .then((selectedFish) => {
            if (selectedFish.quantityAvailable >= 1) {
                console.log(`You are clear to purchase a: ${selectedFish.species}`);
            }
            else {
                let returnError = {"Error": `Not enough quantity available to purchase fish '${selectedFish.species}'`}
                deferred.reject(returnError);
            }

            db.User.findOne({
                where: {
                    id: userId
                }
            })
            .then((user) => {
                if (user.walletBalance >= selectedFish.price) {
                    console.log(`You're clear to buy this fish, w00t!`);
                    selectedFish.update({quantityAvailable: (selectedFish.quantityAvailable -= 1)})
                    .then(() => {
                        user.update({walletBalance: (user.walletBalance -= selectedFish.price)})
                        .then(() => {
                            db.WalletHistory.create({
                                UserId: userId,
                                walletBalanceChange: -selectedFish.price,
                                walletBalanceChangeReason: `Fish purchased: ${selectedFish.species}`,
                                lastWalletBalance: user.walletBalance
                            })
                            .then(() => {
                                let randomizeThese = JSON.parse(selectedFish.randomizeVar);
                                let randomizedTargets = {};
                                if (randomizeThese.percent === true) {
                                    console.log(`We are randomizing PERCENT on this fish`);
                                    randomizedTargets.percent = randomize(0,100);
                                }
                                if (randomizeThese.degree === true) {
                                    console.log(`We are randomizing DEGREE on this fish`);
                                    randomizedTargets.degree = randomize(1,360);
                                }
                                randomizeThese.color.forEach((color) => {
                                    console.log(`We are randomizing THIS COLOR: ${color}`);
                                    randomizedTargets[color] = randomize(1, 255);
                                })
                                console.log(randomizedTargets);
            
                                db.UserFish.create({
                                    name: 'New Fish Needs A Name',
                                    species: selectedFish.species,
                                    codeSpecies: selectedFish.codeSpecies,
                                    color1r: randomizedTargets.color1r ? randomizedTargets.color1r : selectedFish.color1r,
                                    color1b: randomizedTargets.color1b ? randomizedTargets.color1b : selectedFish.color1b,
                                    color1g: randomizedTargets.color1g ? randomizedTargets.color1g : selectedFish.color1g,
                                    color2r: randomizedTargets.color2r ? randomizedTargets.color2r : selectedFish.color2r,
                                    color2b: randomizedTargets.color2b ? randomizedTargets.color2b : selectedFish.color2b,
                                    color2g: randomizedTargets.color2g ? randomizedTargets.color2g : selectedFish.color2g,
                                    degree: randomizedTargets.degree ? randomizedTargets.degree : selectedFish.degree,
                                    percent: randomizedTargets.percent ? randomizedTargets.percent : selectedFish.percent,
                                    forSale: false,
                                    price: 0,
                                    UserId: userId
                                })
                                .then((fishObject) => {
                                    console.log(`Fish purchased`);
                                    // move the index along and fire again
                                    index++
                                    asyncFishPurchase(fishArray, userId, index, deferred);
                                });
                            })
                        })
                    })
                }
                else {
                    let returnError = {"Error": "Insufficient funds to purchase this fish"}
                    deferred.reject(returnError);
                }
            });
        });
    }
    return deferred.promise;
}

asyncOtherUserFishPurchase = (fishArray, userId, index = 0, deferred = Q.defer()) => {
    console.log(`total length: ${fishArray.length}`);
    console.log(`Calling fish purchase async like.. round ${index}.`);

    if (index >= fishArray.length) {
        console.log(`ANNNDD we're done here!`);
        deferred.resolve();
        return "Success";
    }
    else {
        console.log(`Purchase fish here ${fishArray[index]}`);

        db.UserFish.findOne({
            where: {
                id: fishArray[index].id
            }
        })
        .then((fishForSale) => {
            // Get the user wanting to purchase
            db.User.findOne({
                where: {
                    id: userId
                }
            })
            .then((userBuying) => {
                if (userBuying.walletBalance >= fishForSale.price) {
                    // Money changes hands
                    userBuying.update({walletBalance: (userBuying.walletBalance -= fishForSale.price)})
                    .then(() => {
                        db.WalletHistory.create({
                            UserId: userId,
                            walletBalanceChange: -fishForSale.price,
                            walletBalanceChangeReason: `Fish purchased from other user: ${fishForSale.species} named: '${fishForSale.name}'`,
                            lastWalletBalance: (userBuying.walletBalance)
                        })
                        .then(() => {
                            db.User.findOne({
                                where: {
                                    id: fishForSale.UserId
                                }
                            })
                            .then((userSelling) => {
                                userSelling.update({walletBalance: (userSelling.walletBalance += fishForSale.price)})
                                .then(() => {
                                    db.WalletHistory.create({
                                        UserId: userSelling.id,
                                        walletBalanceChange: +fishForSale.price,
                                        walletBalanceChangeReason: `Fish sold: ${fishForSale.species} named: '${fishForSale.name}'`,
                                        lastWalletBalance: (userSelling.walletBalance)
                                    })
                                    .then(() => {
                                        // Fish is moved from original user to current user 
                                        fishForSale.update({UserId: userId});
                                        fishForSale.update({forSale: false});
                                        // move the index along and fire again
                                        index++
                                        asyncOtherUserFishPurchase(fishArray, userId, index, deferred);
                                    });
                                });
                            });
                        })
                    })
                }
                else {
                    let returnError = {"Error": "Insufficient funds to purchase this fish"}
                    deferred.reject(returnError);
                }
            });
        });
    }
    return deferred.promise;
}
