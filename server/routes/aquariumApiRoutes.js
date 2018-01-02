let db = require('../models');

module.exports = function(app) {
    app.post('/api/userPurchaseAquarium/:id', authenticationMiddleware, function(req, res){
        // app.post('/api/userPurchaseAquarium/:id', function(req, 1res){ // --- TEST VALUE
            // Purchasing a fish from the store
            // 1. Find the fishObject
            // 2. See if there are quantity quantityAvailable
            // 3. If it is, see if the user has the required funds
            // 4. If all of that works, buy it and move along 
            db.Aquarium.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then((selectedAquarium) => {
                if (selectedAquarium.quantityAvailable > 1) {
                    console.log(`We're good to continue - we have this aquarium available: ${selectedAquarium.quantityAvailable}`);
                }
                else {
                    console.log(`Not enough quantity available`);
                    res.json({"Error": "Not enough quantity available to purchase this aquarium"});
                }
    
                db.User.findOne({
                    where: {
                        id: req.user.id
                        // id: 1 // --- TEST VALUE
                    }
                })
                .then((user) => {
                    console.log(`zzzz wallet balance: ${user.walletBalance} --- aquarium cost: ${selectedAquarium.price}`);
                    if (user.walletBalance >= selectedAquarium.price) {
                        console.log(`You're clear to buy this aquarium, w00t!`);
                        selectedAquarium.update({quantityAvailable: (selectedAquarium.quantityAvailable -= 1)});
                        user.update({walletBalance: (user.walletBalance -= selectedAquarium.price)});
                        db.WalletHistory.create({
                            UserId: req.user.id,
                            // UserId: 1, //--- TEST VALUE
                            walletBalanceChange: -selectedAquarium.price,
                            walletBalanceChangeReason: `Aquarium purchased: ${selectedAquarium.tankDescription}`,
                            lastWalletBalance: (user.walletBalance - selectedAquarium.price)
                        });
                        console.log("********************************************");
                        console.log("********************************************");
                        console.log("********************************************");
                        console.log("********************************************");
                        console.log("********************************************");
                        console.log("********************************************");
                        console.log(selectedAquarium.dataValues.numFishAllowed);
                        
                        // do we need to update the current req.user to reflect the new balance?           
                        db.UserAquarium.create({
                            tankDescription: selectedAquarium.dataValues.tankDescription,
                            numFishAllowed: selectedAquarium.dataValues.numFishAllowed,
                            numDecorationsAllowed: selectedAquarium.dataValues.numDecorationsAllowed,
                            // UserId: 1 // --- TEST VALUE
                            UserId: req.user.id
                        })
                        .then((aquariumObject) => {
                            console.log(aquariumObject);
                            res.json(aquariumObject)
                        });
                    }
                    else {
                        res.json({"Error": "Insufficient funds to purchase this aquarium"});
                    }
                });
            });
        });

        
}//End of module.exports

