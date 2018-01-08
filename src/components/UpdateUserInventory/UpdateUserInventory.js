//Login
//Home
//Fish Market
// **Add ad drop down menu for my and add the following
//My..
    //.. Quarium
    //.. Wallet
    //.. Fish Stock

//STEP ONE: Populate page with this!
//  GET: /api/allUserFish/
// Lists all fish for a particular userId
// (The Sequelize WHERE 

//STEP TWO:UPDATE User fish spec with this route!
// PUT: /api/userFishUpdate/:id
//     Updating a user fish for ONE or TWO reasons:
//     1. Rename the fish (uses req.body.name)
//     2. Put the fish up for sale (or take it off sale)
//         a. forSale (Boolean):  req.body.forSale
//         b. price (double): req.body.price (needs to be a value above zero);