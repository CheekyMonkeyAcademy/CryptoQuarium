let db = require('../models');


module.exports = function(app) {

    app.post('/api/createfish', function(req, res){
        let createfishObject = {};
        //This are fake variables.
        createfishObject.name = "myfish";
        createfishObject.species = "fish species";
        createfishObject.image = "fish image";
        createfishObject.movementMin = 0;
        createfishObject.movementMax = 0;
        createfishObject.movementPercent = 0;
        createfishObject.movementHeightMin = 0;
        createfishObject.movementHeightMax = 0;
        //End of fake variables.
        db.Fish.create( {...createfishObject} )
        .then(function(fishObject){
            console.log(fishObject);
        })
    });

    app.get('/api/allfishes', function(req, res) {
        console.log("something that we can see");
        db.Fish.findAll({  
        }).then(function(allfishes){
                console.log(allfishes);
                res.json(allfishes);
        })
    });

}//End of module.exports        