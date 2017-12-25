let db = require('../models');
const authenticationMiddleware = require('../passport/authenticationMiddleware');

module.exports = function(app) {

    app.get('/api/allFishTemplates', function(req, res) {
        db.Fish.findAll({  
        }).then((allFish) => {
                console.log(allFish);
                res.json(allFish);
        });
    });

    app.get('/api/allUserFish', authenticationMiddleware, function(req, res) {
        db.UserFish.findAll({
            // TODO re-enable this once we have users built in
            where: {
                UserId:  req.user.id
            }  
        }).then((allUserFish) => {
            console.log(allUserFish);
            res.json(allUserFish);
        });
    });

    app.post('/api/createFishTemplate', function(req, res){
        db.Fish.count({
            where: {
                species: req.body.species
            }
        })
        .then((count) => {
            if (count > 0) {
                console.log(`species exists - we're not creating it again`);
                res.json({"Error": "Species exists, cannot duplicate"});
            }
            else {
                console.log(`Creating new species`)
                console.log(req.body);
                db.Fish.create({
                    species: req.body.species,
                    image: req.body.image,
                    movementMin: req.body.movementMin,
                    movementMax: req.body.movementMax,
                    movementPercent: req.body.movementPercent,
                    movementHeightMin: req.body.movementHeightMin,
                    movementHeightMax: req.body.movementHeightMax,
                    quantityAvailable: req.body.quantityAvailable,
                    price: req.body.price
                })
                .then((newFishObject) => {
                    console.log(newFishObject);
                    res.json(newFishObject)
                });
            }
        });
    });

    app.post('/api/userPurchaseFish/:id', authenticationMiddleware, function(req, res){
    // app.post('/api/userPurchaseFish/:id', function(req, res){ --- TEST VALUE
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
                console.log(`We're good to continue - we have fish available: ${selectedFish.quantityAvailable}`);
            }
            else {
                console.log(`Not enough quantity available`);
                res.json({"Error": "Not enough quantity available to purchase this fish"});
            }

            db.User.findOne({
                where: {
                    id: req.user.id
                    // id: 1  --- TEST VALUE
                }
            })
            .then((user) => {
                console.log(`zzzz wallet balance: ${user.walletBalance} --- fish cost: ${selectedFish.price}`);
                if (user.walletBalance >= selectedFish.price) {
                    console.log(`You're clear to buy this fish, w00t!`);
                    selectedFish.update({quantityAvailable: (selectedFish.quantityAvailable -= 1)});
                    user.update({walletBalance: (user.walletBalance -= selectedFish.price)});
                    // do we need to update the current req.user to reflect the new balance?           
                    db.UserFish.create({
                        name: req.body.name,
                        species: selectedFish.species,
                        image: selectedFish.image,
                        movementMin: selectedFish.movementMin,
                        movementMax: selectedFish.movementMax,
                        movementPercent: selectedFish.movementPercent,
                        movementHeightMin: selectedFish.movementHeightMin,
                        movementHeightMax: selectedFish.movementHeightMax,
                        forSale: false,
                        price: 0,
                        // UserId: 1 --- TEST VALUE
                        UserId: req.user.id
                    })
                    .then((fishObject) => {
                        console.log(fishObject);
                        res.json(fishObject)
                    });
                }
                else {
                    res.json({"Error": "Insufficient funds to purchase this fish"});
                }
            });
        });
    });

}//End of module.exports        