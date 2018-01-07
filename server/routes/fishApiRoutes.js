let db = require('../models');
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
            // TODO re-enable this once we have users built in
            where: {
                UserId:  req.user.id
            }  
        }).then((allUserFish) => {
            res.json(allUserFish);
        });
    });

    // TODO:  fix this - it's an older generation - disabled 2018/1/7 - Kyle
    // Granted, we don't really NEED this, we can just populate the DB directly... so maybe we'll ditch this.
    // app.post('/api/createFishTemplate', function(req, res){
    //     db.Fish.count({
    //         where: {
    //             species: req.body.species
    //         }
    //     })
    //     .then((count) => {
    //         if (count > 0) {
    //             res.json({"Error": "Species exists, cannot duplicate"});
    //         }
    //         else {
    //             db.Fish.create({
    //                 species: req.body.species,
    //                 image: req.body.image,
    //                 movementMin: req.body.movementMin,
    //                 movementMax: req.body.movementMax,
    //                 movementPercent: req.body.movementPercent,
    //                 movementHeightMin: req.body.movementHeightMin,
    //                 movementHeightMax: req.body.movementHeightMax,
    //                 quantityAvailable: req.body.quantityAvailable,
    //                 price: req.body.price
    //             })
    //             .then((newFishObject) => {
    //                 res.json(newFishObject)
    //             });
    //         }
    //     });
    // });

    app.post('/api/userPurchaseFish/:id', function(req, res){
    // app.post('/api/userPurchaseFish/:id', function(req, res){ // --- TEST VALUE
        // Purchasing a fish from the store
        // 1. Find the fishObject
        // 2. See if there are quantity quantityAvailable
        // 3. If it is, see if the user has the required funds
        // 4. If all of that works, buy it and move along 
        db.Fish.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((selectedFish) => {
            if (selectedFish.quantityAvailable > 1) {
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
                    // TODO - Kyle - I'll finish up the randomization as soon as I can (likely Monday)
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
                        res.json(fishObject)
                    });
                }
                else {
                    res.json({"Error": "Insufficient funds to purchase this fish"});
                }
            });
        });
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
