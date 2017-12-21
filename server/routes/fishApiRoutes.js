let db = require('../models');


module.exports = function(app) {

    app.get('/api/allFishTemplates', function(req, res) {
        db.Fish.findAll({  
        }).then((allFish) => {
                console.log(allFish);
                res.json(allFish);
        });
    });

    app.get('/api/allUserFish', function(req, res) {
        db.UserFish.findAll({
            // TODO re-enable this once we have users built in
            // where: {
            //     UserId:  req.user.id
            // }  
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
                    movementHeightMax: req.body.movementHeightMax
                })
                .then((newFishObject) => {
                    console.log(newFishObject);
                    res.json(newFishObject)
                });
            }
        });
    });

    app.post('/api/createUserFish/:id', function(req, res){
        // This will be purchasing a fish from the store
        // so... we'll use the template to create a new fish
        // first select the template: 
        // TODO FIRST FIRST FIRST we need to validate they have the cash
        // TODO not sure what cash looks like yet - we need to implement user very soon
        db.Fish.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((selectedFish) => {
            db.UserFish.create({
                species: selectedFish.species,
                image: selectedFish.image,
                movementMin: selectedFish.movementMin,
                movementMax: selectedFish.movementMax,
                movementPercent: selectedFish.movementPercent,
                movementHeightMin: selectedFish.movementHeightMin,
                movementHeightMax: selectedFish.movementHeightMax,
                UserId: 1 // TODO obvious hard coding is obviously WRONG 
                         // fix when users ready
            })
            .then((fishObject) => {
                console.log(fishObject);
                res.json(fishObject)
            });
        });
    });

}//End of module.exports        