POST:  /api/createFish
Species must be unique
    species: req.body.species,
    image: req.body.image,
    movementMin: req.body.movementMin,
    movementMax: req.body.movementMax,
    movementPercent: req.body.movementPercent,
    movementHeightMin: req.body.movementHeightMin,
    movementHeightMax: req.body.movementHeightMax

GET: /api/allFish
Lists all of the fish templates - NOT users fish