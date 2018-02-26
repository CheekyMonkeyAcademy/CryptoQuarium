Basics of fish movement

Fish move from the left (left: 0%) to the right (left: ~70%) 
--- why 70%?  the fish are approx 30% of the scree in size 

They move from the top (top: 0vh) to the bottom (top: ~40vh)

They face left : transform: scaleX(1);  // validate
They face right: transform: scaleX(-1); // validate

the idea of the CSS?

Fish move from A to B to C to D to E and back to A - these are set in a loop (we can add additional letters or a secondary loop) - a swim on top - etc

There are 3 variants on this a1b, a2b, a3b - they all start at A and end at B.. but the path between changes.  We then have b1c, b2c, b3c... same thing... start at B end at C but path between changes.  This adds variability to pathing, randomness.  

HOW DO WE CONTROL WHICH PATH(S) THE FISH TAKE?  We pass in an array - the array consts of the middle part (1, 2, 3) and which of these the fish will take.  So... a fish with array 1,2,3... might go a1b, b3c, c2d, d1e, e1a (they always go a>b>c>d>e>a... the middle randomizes each loop)

So the function is set on each fish (it's a recursive function):

SharedFunctions.setSwim(this.props.id
                        , 15
                        , 20
                        , this.props.noMove ? true : false
                        , ['a', 'b', 'c', 'd', 'e']
                        , 'notSet'
                        , [1,2,3]);

this.props.id = id of the fish
15 = minimum time for each loop
20 = variable time each loop (in this case between 0 and 20)
this.props.noMove = required to keep fish from moving on buy/sell pages, please leave as ternary
a,b,c,d,e array = path this fish is taking (we can create additional CSS paths later and sub them in for each fish)
'notSet' = randomized start position, then passes current position for recursion
1,2,3 = which array paths are open to take in this case it can go a1b, a2b, or a3b... while going A>B>C>D>E and back to A

over architected?  Maybe - but it should make maintenace easy, we just need to write new CSS routes and code new fish, but we CAN re-use the old routes easy enough.  