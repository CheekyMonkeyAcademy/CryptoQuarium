POST:  /api/createFishTemplate
Species must be unique
    species: req.body.species,
    image: req.body.image,
    movementMin: req.body.movementMin,
    movementMax: req.body.movementMax,
    movementPercent: req.body.movementPercent,
    movementHeightMin: req.body.movementHeightMin,
    movementHeightMax: req.body.movementHeightMax

GET: /api/allFishTemplates
Lists all of the fish templates - NOT users fish

POST: /api/createUserFish/:id
Takes the passed ID of the fish and adds it to the current logged in user inventory

GET: /api/allUserFish/
Lists all fish for a particular userId
(The Sequelize WHERE clause pulls in req.user.id - so we're looking at CURRENT USER inventory);
!!! User currently not built so this returns all user fish 