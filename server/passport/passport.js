const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const db = require('../models');
const PORT = process.env.PORT || 8080;

//Serialize user ids
passport.serializeUser(function(user, done){
    console.log(`Serialized user ID: ${user.userId}`);
    console.log(`Accessing environment variables... Host: ${process.env.PROD_DB_HOST}`)
    done(null, user.userId);
});
//Deserialize user ids
passport.deserializeUser(function(userId, done) {  
    console.log(`Deserialized user ID: ${userId}`);
    console.log(`Accessing environment variables... Host: ${process.env.PROD_DB_HOST}`)
    db.User.findOne({
        where: {
            userId: userId
        }
    })
    .then((user) => {
        done(null, user)
    })
    .catch(err => {
        done(err, null);
    });
});

//---------------------------Google strategy begins-------------------------
let callbackUrlVar = '';
if (process.env.NODE_ENV == 'production'){
    callbackUrlVar = `https://cryptoquarium.herokuapp.com/auth/google/callback`
    console.log(`Using PRODUCTION callback URL: ${callbackUrlVar}`);
}
else {
    callbackUrlVar = `http://localhost:8080/auth/google/callback`
    console.log(`Using LOCAL callback URL: ${callbackUrlVar}`);
}

passport.use(new GoogleStrategy({
    clientID:        `763654066344-7ev3pq5ne5bjdkomjpuff726mufhvruj.apps.googleusercontent.com`,
    clientSecret:    `4ZiThL5yW11HyTWIU43TdEX_`,
    callbackURL: callbackUrlVar,
    passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
    db.User.findOne({
        where: {
            userId: profile.id
        }
    }).then((user) => {
        let defaultAccountBalance = 10;
        //No user was found... so create a new user with values from Facebook (all the profile. stuff)
        if (!user) {
            db.User.create({
                displayName: profile.displayName,
                email: profile.emails[0].value,
                userId: profile.id,
                username: profile.username,
                provider: 'google',
                walletBalance: defaultAccountBalance // add a gratis 10 to get some basics
            })
            .then((user) => {
                db.WalletHistory.create({
                    UserId: user.id,
                    walletBalanceChange: defaultAccountBalance,
                    walletBalanceChangeReason: "New Account Creation Balance",
                    lastWalletBalance: defaultAccountBalance
                });
                return done(null, user);
            })
            .catch(err => {
                if (err) { 
                    console.log('err', err);
                    return done(err);
                }
            });
        } else {
            //found user. Return
            let updatedUserSpecs = {
                displayName: profile.displayName,
                email: profile.emails[0].value,
                userId: profile.id,
                provider: 'google',
            }
            // console.log(updatedUserSpecs);
            db.User.update(updatedUserSpecs,{
                where: {
                    userId: updatedUserSpecs.userId
                }    
            })
            .then((results) => {
                return done(null, updatedUserSpecs);
            })
            .catch(err => {
                if (err) { 
                    console.log('err', err);
                    return done(err);
                }
            });
        }
    });
}
));

