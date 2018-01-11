let db = require('../models');

module.exports = function(app) {
    app.post('/api/userPurchaseAquarium/:id', function(req, res){
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
            }
            else {
                res.json({"Error": "Not enough quantity available to purchase this aquarium"});
            }

            db.User.findOne({
                where: {
                    id: req.user.id
                    // id: 1 // --- TEST VALUE
                }
            })
            .then((user) => {
                if (user.walletBalance >= selectedAquarium.price) {
                    selectedAquarium.update({quantityAvailable: (selectedAquarium.quantityAvailable -= 1)});
                    user.update({walletBalance: (user.walletBalance -= selectedAquarium.price)});
                    db.WalletHistory.create({
                        UserId: req.user.id,
                        // UserId: 1, //--- TEST VALUE
                        walletBalanceChange: -selectedAquarium.price,
                        walletBalanceChangeReason: `Aquarium purchased: ${selectedAquarium.tankDescription}`,
                        lastWalletBalance: (user.walletBalance - selectedAquarium.price)
                    });
                    
                    // do we need to update the current req.user to reflect the new balance?           
                    db.UserAquarium.create({
                        tankDescription: selectedAquarium.dataValues.tankDescription,
                        numFishAllowed: selectedAquarium.dataValues.numFishAllowed,
                        numDecorationsAllowed: selectedAquarium.dataValues.numDecorationsAllowed,
                        // UserId: 1 // --- TEST VALUE
                        UserId: req.user.id
                    })
                    .then((aquariumObject) => {
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

