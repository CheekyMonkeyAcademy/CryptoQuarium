const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const db = require('../models');
const PORT = process.env.PORT || 8080;

//Serialize user ids
passport.serializeUser(function(user, done){
    done(null, user.userId);
});
//Deserialize user ids
passport.deserializeUser(function(userId, done) {  
    db.User.findOne({
        where: {
            userId: userId
        }
    })
    .then((user) => {
        // TODO restrict this object down to only what we need, not everything
        // console.log(`zzzzzz deserialized user`);
        // console.log(user);
        // console.log(`zzzzzz end deserialize user`);
        done(null, user)
    })
    .catch(err => {
        done(err, null);
    });
});

//---------------------------Google strategy begins-------------------------
passport.use(new GoogleStrategy({
    clientID:     `763654066344-7rok26dkplnoagci46oieb58303md5qo.apps.googleusercontent.com`,
    clientSecret: `faDZggDkMGEO0GSggDs3YqMz`,
    callbackURL: `http://localhost:${PORT}/auth/google/callback`,
    passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
    db.User.findOne({
        where: {
            userId: profile.id
        }
    }).then((user) => {
        //No user was found... so create a new user with values from Facebook (all the profile. stuff)
        if (!user) {
            db.User.create({
                displayName: profile.displayName,
                email: profile.emails[0].value,
                userId: profile.id,
                username: profile.username,
                provider: 'google'
            })
            .then((user) => {
                console.log(`This is the done user`);
                console.log(user);
                console.log(`This is the end of the done user`);
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
            console.log(updatedUserSpecs);
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

