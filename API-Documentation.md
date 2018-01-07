GET:  /api/getAuthenticatedUser
This returns either the user information (which can be accessed in your .then as <uservariable>.data) or it returns a JSON error saying no user is logged in.  

<!-- DISABLED ***************
This is really a 'for us' route - NOT for the users (they shouldn't create fish).  
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
    DISABLED *************** -->

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
(The Sequelize WHERE clause pulls in req.user.id - so we're looking at CURRENT USER inventory)

PUT: /api/userFishUpdate/:id
    Updating a user fish for ONE or TWO reasons:
    1. Rename the fish (uses req.body.name)
    2. Put the fish up for sale (or take it off sale)
        a. forSale (Boolean):  req.body.forSale
        b. price (double): req.body.price (needs to be a value above zero);

POST: /api/addFundsToWallet/
    Adding funds from a bank - NOT SURE HOW TO VALIDATE BANK BALANCE - so we'll use fake money for now
    user: req.user.id
    amount: req.body.amount (amount to be deposited);

GET: /api/viewWalletHistory/
    uses req.user.id to identify current user - then returns their entire history
