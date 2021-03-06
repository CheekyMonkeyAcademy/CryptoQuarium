const db = require('../models');
const passport = require('passport');

module.exports = function(app) {

    app.get('/api/getAuthenticatedUser', function(req, res){
        if (req.user) {
            console.log(`User is logged in: '${req.user.displayName}'`);
            res.json(req.user);
        }
        else {
            console.log(`NO CURRENT USER`);
            res.json({"Error": "No one logged in"});
        }
    });

    // Google OAuth 2
    app.get('/auth/google',
    passport.authenticate('google', { scope: 
        [ 'https://www.googleapis.com/auth/plus.login',
         'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
    ));

    app.get('/auth/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: '/MyAquarium', 
        failureRedirect: '/Login'
    }));

    app.get('/auth/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
}//End of module.exports        