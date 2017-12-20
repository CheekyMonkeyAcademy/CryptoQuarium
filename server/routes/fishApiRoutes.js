let db = require('../models');


module.exports = function(app) {

    app.post('/api/createFish', function(req, res){
        // TODO validate that we do not already have this species
        // If we do have the species, do not create and return.  
        console.log(`In createFish`)
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
        .then(function(fishObject){
            console.log(fishObject);
            res.json(fishObject)
        });
    });

    app.get('/api/allFish', function(req, res) {
        db.Fish.findAll({  
        }).then(function(allFish){
                console.log(allFish);
                res.json(allFish);
        });
    });

}//End of module.exports        