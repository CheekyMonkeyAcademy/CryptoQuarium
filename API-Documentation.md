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
    Purchasing a fish from the store...
    1. Find the fishObject
    2. See if there are quantity quantityAvailable
    3. If it is, see if the user has the required funds
    4. If all of that works, buy it and move along 
    <!-- name: req.body.name (a user can name their fish)
    forSale: req.body.forSale (BOOLEAN - default false)
    price: req.body.price (DOUBLE - default 0.0) -->

GET: /api/allUserFish/
Lists all fish for a particular userId
(The Sequelize WHERE clause pulls in req.user.id - so we're looking at CURRENT USER inventory);


