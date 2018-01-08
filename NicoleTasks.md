**SELL PAGE**
**You will have to hard code a fish into the database for the time being
    1	name	species	Fish	1	1	1	1	1	1	1	1	1	5	2017-01-08 00:00:00	2017-01-08 00:00:00	2

Create function to get user inventory on sell page
Build sell cards for each fish that includes a 'Sell this fish' button
Build a sell cart
    1. Sell button
    2. Remove from cart button

    ** When I remove it from sell cart, I only want to remove it from the sell cart 
    ** and NOT the user total inventory

    **Fish to be sold will go to Buy page
        **Ask Kyle if we can add a 'soldBy' column to the fish/user tables
        **That way, when a fish shows up in the buy page, if it is being sold by another user, 
        **it shows who is selling the fish

When another user purchases the fish you sold, it updates your wallet

**UPDATE USER INVENTORY PAGE**
Build a page under the "My..." tab that shows all the users inventory that can be updated
A card for each user item will populate with: 
    -A checkbox to choose whether it is sellable or not?
    -A price at which to sell fish
    -User can also choose a name for their fish
These changes will save to the database

    **Use these routes to query for your data
        **STEP ONE: Populate page with this!
            GET: /api/allUserFish/
            Lists all fish for a particular userId
        

        **STEP TWO:UPDATE User fish spec with this route!
            PUT: /api/userFishUpdate/:id
                Updating a user fish for ONE or TWO reasons:
                1. Rename the fish (uses req.body.name)
                2. Put the fish up for sale (or take it off sale)
                    a. forSale (Boolean):  req.body.forSale
                    b. price (double): req.body.price (needs to be a value above zero);

**REORGANIZATION OF TABS**
Create a dropdown menu titled "My..."
    Login
    Home
    Fish Market    
    My..
        .. Quarium
        .. Wallet
        .. Fish Stock - Where users will update the specs of their fish

        **You will need to reorganize how the Wallet page queries for data because of this reorganization! WARNING!
          

