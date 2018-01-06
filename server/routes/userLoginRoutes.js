const db = require('../models');
const passport = require('passport');
const authenticationMiddleware = require('../passport/authenticationMiddleware');


module.exports = function(app) {

    app.get('/api/getAuthenticatedUser', function(req, res){
        if (req.user) {
            console.log(`User is logged in`);
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
        , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
    ));

    app.get('/auth/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: 'localhost:3000/', // TODO fix this hack job -- react-router ??
        failureRedirect: '/login'
    }));

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
}//End of module.exports        