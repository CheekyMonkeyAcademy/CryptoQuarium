POST:  /api/createFishTemplate
Species must be unique
    species: req.body.species,
    image: req.body.image,
    movementMin: req.body.movementMin,
    movementMax: req.body.movementMax,
    movementPercent: req.body.movementPercent,
    movementHeightMin: req.body.movementHeightMin,
    movementHeightMax: req.body.movementHeightMax,
    quantityAvailable: req.body.quantityAvailable,
    price: req.body.price

GET: /api/allFishTemplates
Lists all of the fish templates - NOT users fish

POST: /api/userPurchaseFish/:id
Takes the passed ID of the fish and adds it to the current logged in user inventory
    <!-- name: req.body.name (a user can name their fish)
    forSale: req.body.forSale (BOOLEAN - default false)
    price: req.body.price (DOUBLE - default 0.0) -->

GET: /api/allUserFish/
Lists all fish for a particular userId
(The Sequelize WHERE clause pulls in req.user.id - so we're looking at CURRENT USER inventory);
!!!ALERT!!! User currently not turned on so this returns all user fish 

PUT: /api/updateFish/:id
Target fish is updatable
