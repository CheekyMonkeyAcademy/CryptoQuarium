let db = require('../models');
const Sequelize = require('sequelize');
// const authenticationMiddleware = require('../passport/authenticationMiddleware');
const randomize = require('../services/randomize.js');

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
                // TODO:  This should - theoretically - eliminate your own sales from the for sale... 
                // ... remove once tested - or comment out code :)  Still need to remove own users' sales
                UserId: {[Sequelize.op.ne]: req.user.id} 
            }  
        }).then((allUserFishOnSale) => {
            res.json(allUserFishOnSale);
        });
    });

    // TODO TEST THIS ENTIRE BEAST
    app.post('/api/userPurchaseOtherUserFish/', function(req, res){
        // First we go through the array of fish and we start breaking them down to individual buys
        
        req.body.forEach((fish) => {
            // TODO:  Fix this - it's an async mess.  
            // Basically... you call it and it executes them all at the same time - BAD
            // let fish = {} // --- TEST VALUE
            // fish.id = 65; // --- TEST VALUE
            db.UserFish.findOne({
                where: {
                    id: fish.id
                }
            })
            .then((fishForSale) => {
                // Get the user wanting to purchase
                db.User.findOne({
                    where: {
                        id: req.user.id
                        // id: 1 // --- TEST VALUE
                    }
                })
                .then((userBuying) => {
                    if (userBuying.walletBalance >= fishForSale.price) {
                        // Money changes hands
                        userBuying.update({walletBalance: (userBuying.walletBalance -= fishForSale.price)});
                        db.WalletHistory.create({
                            UserId: req.user.id,
                            // UserId: 1, //--- TEST VALUE
                            walletBalanceChange: -fishForSale.price,
                            walletBalanceChangeReason: `Fish purchased from other user: ${fishForSale.species} named: '${fishForSale.name}'`,
                            lastWalletBalance: (userBuying.walletBalance - fishForSale.price)
                        });

                        db.User.findOne({
                            where: {
                                id: fishForSale.UserId
                            }
                        })
                        .then((userSelling) => {
                            userSelling.update({walletBalance: (userSelling.walletBalance += fishForSale.price)});
                            db.WalletHistory.create({
                                UserId: userSelling.UserId,
                                walletBalanceChange: +fishForSale.price,
                                walletBalanceChangeReason: `Fish sold: ${fishForSale.species} named: '${fishForSale.name}'`,
                                lastWalletBalance: (userSelling.walletBalance + fishForSale.price)
                            });
                        });

                        // Fish is moved from original user to current user
                        fishForSale.update({UserId: req.user.id});
                        // fishForSale.update({UserId: 1}); // --- TEST VALUE
                        fishForSale.update({forSale: false});
                        res.json({"Success": "Fish has changed hands"});
                    }
                });
            });
        });
    });
                

    app.post('/api/userPurchaseFish/', function(req, res){
        // Purchasing a fish from the store
        // 0. Iterate through the fish in the cart
        // 1. Find the target fishObject
        // 2. See if there are quantity quantityAvailable
        // 3. If it is, see if the user has the required funds
        // 4. If all of that works, buy it and move along 
        console.log(req.body);

        req.body.forEach((fish) => {
            // TODO:  Fix this - it's an async mess.  
            // Basically... you call it and it executes them all at the same time - BAD
            console.log(fish.species);
            db.Fish.findOne({
                where: {
                    id: fish.id
                }
            })
            .then((selectedFish) => {
                if (selectedFish.quantityAvailable >= 1) {
                    console.log(`You are clear to purchase a: ${selectedFish.species}`);
                }
                else {
                    res.json({"Error": "Not enough quantity available to purchase this fish"});
                }

                db.User.findOne({
                    where: {
                        id: req.user.id
                        // id: 1 // --- TEST VALUE
                    }
                })
                .then((user) => {
                    if (user.walletBalance >= selectedFish.price) {
                        console.log(`You're clear to buy this fish, w00t!`);
                        selectedFish.update({quantityAvailable: (selectedFish.quantityAvailable -= 1)});
                        user.update({walletBalance: (user.walletBalance -= selectedFish.price)});
                        db.WalletHistory.create({
                            UserId: req.user.id,
                            // UserId: 1, //--- TEST VALUE
                            walletBalanceChange: -selectedFish.price,
                            walletBalanceChangeReason: `Fish purchased: ${selectedFish.species}`,
                            lastWalletBalance: (user.walletBalance - selectedFish.price)
                        });
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
                        // do we need to update the current req.user to reflect the new balance?           
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
                            // UserId: 1 // --- TEST VALUE
                            UserId: req.user.id
                        })
                        .then((fishObject) => {
                            console.log(`Fish purchased`);
                        });
                    }
                    else {
                        res.json({"Error": "Insufficient funds to purchase this fish"});
                    }
                });
            });
        })
        res.json({'Success': 'Fish have been purchased.'});
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
